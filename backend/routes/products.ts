
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

  res.send(data)
})

module.exports = router
