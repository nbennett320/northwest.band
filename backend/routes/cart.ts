import express from 'express'
import fetch from 'node-fetch'
import { AddCartResponse, CartData, CreateCartResponse, RemoveCartResponse } from '@nw/types'
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
            checkoutChargeAmount {
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
      checkoutChargeAmount: data?.data?.cart.cost.checkoutChargeAmount,
    },
  } as CartData

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
      'content-type': 'application/graphql',
      'x-shopify-storefront-access-token': config.access_token,
    },
    body: `
      mutation {
        cartCreate(
          input: {
            lines: [
              {
                quantity: 1,
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
  } as CreateCartResponse
  
  res.send(cart)
})

router.post('/remove', async (req, res, next) => {
  const cartId: string = req.body?.cartId
  const lineId: string = req.body?.lineId

  if(!cartId) { 
    res.status(400).send({
      error: true,
      message: "No cart id provided",
    })

    return
  }
  
  if(!lineId) {
    res.status(400).send({
      error: true,
      message: "No cart line id provided",
    })

    return
  }

  const query = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/graphql',
      'x-shopify-storefront-access-token': config.access_token,
    },
    body: `
      mutation {
        cartLinesRemove(
          cartId: "${cartId}",
          lineIds: ["${lineId}"]
        ) {
          cart {
            totalQuantity
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
              checkoutChargeAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `
  })

  const data = await query.json()
  if(data?.data?.userErrors?.code) {
    const { code, field, message } = data.data.userErrors

    res.status(500).send({
      error: true,
      message: `Shopify error ${code} on ${field}: ${message}`
    })

    return
  }

  const updateData = {
    totalQuantity: data?.data.cartLinesRemove.cart.totalQuantity,
    cost: data?.data.cartLinesRemove.cart.cost,
  } as RemoveCartResponse

  res.send(updateData)
})

router.post('/add', async (req, res, next) => {
  const cartId: string = req.body?.cartId
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
        cartLinesAdd(
          cartId: "${cartId}",
          lines: [
            {
              quantity: 1,
              merchandiseId: "${variantId}"
            }
          ]
        ) {
          cart {
            totalQuantity
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
              checkoutChargeAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `
  })

  const cartData = await cartQuery.json()
  if(cartData?.data?.userErrors?.code) {
    const { code, field, message } = cartData.data.userErrors

    res.status(500).send({
      error: true,
      message: `Shopify error ${code} on ${field}: ${message}`
    })

    return
  }

  console.log("updated cart data: ", cartData)

  const updateData = {
    totalQuantity: cartData?.data.cartLinesAdd.cart.totalQuantity,
    cost: cartData?.data.cartLinesAdd.cart.cost,
  } as AddCartResponse

  res.send(updateData)
})

module.exports = router
