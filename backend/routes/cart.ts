import express from 'express'
import fetch from 'node-fetch'
import config from '../config.json'

const router = express.Router()
const url = `https://${config.store_name}.myshopify.com/api/2022-07/graphql.json`

interface SelectedOption {
  value: string
  label: string
  data: {
    id: string
    optionName: string
    handle: string
  }
}

router.post('/', async (req, res, next) => {
  const cartId: string = req.body?.cartId

  if(!cartId) { 
    res.status(400).send({
      error: true,
      message: "No cart id provided"
    })
    return
  }

  const query = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': config.access_token,
    },
    body: `
      {
        cart(id: "${cartId}") {
          id
          totalQuantity
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    product {
                      handle
                      title
                      priceRange {
                        minVariantPrice {
                          amount
                          currencyCode
                        }
                      }
                      images(first: 1) {
                        edges {
                          node {
                            id
                            url
                            altText
                          }
                        }
                      }
                    }
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
            totalDutyAmount {
              amount
              currencyCode
            }
          }
        }
      }
    `
  })

  const data = await query.json()
  const cart = {
    id: data?.data?.cart.id,
    totalQuantity: data?.data?.cart.totalQuantity,
    checkoutUrl: data?.data?.cart.checkoutUrl,
    items: data?.data?.cart.lines?.edges?.map((edge: any) => ({
      cartLineId: edge?.node?.id,
      variantId: edge?.node?.merchandise.id,
      handle: edge?.node?.merchandise.product.handle,
      title: edge?.node?.merchandise.product.title,
      price: edge?.node?.merchandise.product.priceRange.minVariantPrice?.amount,
      image: {
        id: edge?.node?.merchandise.product.images?.edges[0]?.node.id,
        url: edge?.node?.merchandise.product.images?.edges[0]?.node.url,
        altText: edge?.node?.merchandise.product.images?.edges[0]?.node.altText,
      },
      selectedOptions: edge?.node?.merchandise.selectedOptions,
    })),
    cost: {
      totalAmount: data?.data?.cart.cost.totalAmount,
      subtotalAmount: data?.data?.cart.cost.subtotalAmount,
      taxAmount: data?.data?.cart.cost.totalTaxAmount,
      dutyAmount: data?.data?.cart.cost.totalDutyAmount,
    },
  }

  res.send(cart)
})

router.post('/create', async (req, res, next) => {
  const itemHandle: string = req.body?.handle
  const selectedOptions = Object.values(req.body?.selected).map(val => ({
    name: (val as SelectedOption)?.data?.optionName,
    value: (val as SelectedOption)?.value
  }))
  const selectedOptionsJson = JSON.stringify(selectedOptions).replace(/"([^"]+)":/g, '$1:')
  const variantQuery = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': config.access_token,
    },
    body: `
      {
        product(handle: "${itemHandle}") {
          variantBySelectedOptions(selectedOptions: ${selectedOptionsJson}) {
            id
          }
        }
      }
    `
  })

  const variantData = await variantQuery?.json()
  const variantId = variantData?.data?.product?.variantBySelectedOptions?.id
  const cartQuery = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': config.access_token,
    },
    body: `
      mutation {
        cartCreate(
          input: {
            lines: [
              {
                quantity:1,
                merchandiseId: "${variantId}"
              }
            ]
          }
        ) {
          cart {
            id
            totalQuantity
          }
        }
      }
    `
  })

  const cartData = await cartQuery.json()
  const cart = { 
    id: cartData?.data?.cartCreate?.cart.id,
    totalQuantity: cartData?.data?.cartCreate?.cart.totalQuantity,
  }
  
  res.send(cart)
})

module.exports = router
