
import express from 'express'
import fetch from 'node-fetch'
import config from '../config.json'

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
              images(first: 3) {
                edges {
                  node {
                    url
                    altText
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
  const products = data?.data?.products?.edges?.map((edge: any) => ({
    id: edge.node?.id,
    handle: edge.node?.handle,
    title: edge.node?.title,
    productType: edge.node?.productType,
    images: edge.node?.images?.edges?.map((image: any) => ({
      url: image.node?.url,
      altText: image.node?.altText,
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
          productType
          images(first: 3) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    `
  })

  const data = await query.json()
  const product = {
    id: data?.data?.product?.id,
    handle: data?.data?.product?.handle,
    title: data?.data?.product?.title,
    productType: data?.product?.data?.productType,
    images: data?.data?.product?.images?.edges?.map((image: any) => ({
      url: image.node?.url,
      altText: image.node?.altText,
    }))
  }
  
  res.send(product)
})

module.exports = router
