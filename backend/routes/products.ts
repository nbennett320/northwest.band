
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
    title: edge.node?.title,
    productType: edge.node?.productType,
    images: edge.node?.images?.edges?.map((image: any) => ({
      url: image.node?.url,
      altText: image.node?.altText,
    }))
  }))
  
  res.send(products)
})

module.exports = router
