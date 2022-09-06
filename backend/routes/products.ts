import express from 'express'
import fetch from 'node-fetch'
import { config } from '../config'
import { ProductData, ProductListing } from '@nw/types'

const router = express.Router()
const url = `https://${config.store_name}.myshopify.com/api/2022-07/graphql.json`

router.get('/', async (req, res, next) => {
  const query = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': config.access_token,
    },
    body: `
      {
        products(first: 3) {
          edges {
            node {
              id
              handle
              title
              productType
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 2) {
                edges {
                  node {
                    url
                    altText
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    `
  })

  const data = await query.json()
  const products: Array<ProductListing> = data?.data?.products?.edges?.map((edge: any) => ({
    id: edge.node?.id,
    handle: edge.node?.handle,
    title: edge.node?.title,
    productType: edge.node?.productType,
    price: edge.node?.priceRange.minVariantPrice?.amount,
    images: edge.node?.images?.edges?.map((image: any) => ({
      url: image.node?.url,
      altText: image.node?.altText,
      height: image.node?.height,
      width: image.node?.width,
    }))
  }))
  
  res.send(products)
})

router.get('/all-handles', async (req, res, next) => {
  const length = 100
  const query = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': config.access_token,
    },
    body: `
      {
        products(first: ${length}) {
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `
  })

  if (query.status !== 200) {
    console.log("Query to /products/all-handles returned with status: ", query.status)
    console.log("/products/all-handles response: ", query.statusText)
  }

  const data = await query.json()
  const products = data?.data?.products
  const handles = products.edges?.map((edge: any) => edge.node?.handle)
  
  res.send(handles)
})

router.get('/item/:handle', async (req, res, next) => {
  const handle = req.params.handle

  const query = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': config.access_token,
    },
    body: `
      {
        product(handle: "${handle}") {
          id
          handle
          title
          description
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
                height
                width
              }
            }
          }
          options {
            id
            name
            values
          }
        }
      }
    `
  })

  if (query.status !== 200) {
    console.log(`Query to /products/${handle} returned with status: `, query.status)
    console.log(`/products/${handle} response: `, query.statusText)
  }

  const data = await query.json()
  const product: ProductData = {
    id: data?.data?.product?.id,
    handle: data?.data?.product?.handle,
    title: data?.data?.product?.title,
    description: data?.data?.product?.description,
    productType: data?.data?.product?.data?.productType,
    price: data?.data?.product?.priceRange.minVariantPrice?.amount,
    images: data?.data?.product?.images?.edges?.map((image: any) => ({
      url: image.node?.url,
      altText: image.node?.altText,
      height: image.node?.height,
      width: image.node?.width,
    })),
    options: data?.data?.product.options,
  }
  
  res.send(product)
})

module.exports = router
