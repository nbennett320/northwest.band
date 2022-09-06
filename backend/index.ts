import process from 'process'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { args } from './config'

// Initialize the express engine
const app: express.Application = express()
const port: number = (process.env.PORT ? parseInt(process.env.PORT) : undefined) || 4432
const jsonParser = bodyParser.json()
const proxy = createProxyMiddleware({ 
  target: 'http://localhost:3000', 
  changeOrigin: true,
})

app.set('strict routing', true)

app.use(cors({ origin: args.env === 'production' ? 'https://northwest.band' : 'http://localhost:3000' }))

app.use('/', require('./routes/index'))
app.use('/products', require('./routes/products'))
app.use('/cart', jsonParser, require('./routes/cart'))

// Server setup
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}/`)
})

app.use((req, res, next) => {
  if (req.path.substr(-1) === '/' && req.path.length > 1) {
    const query = req.url.slice(req.path.length)
    const safepath = req.path.slice(0, -1).replace(/\/+/g, '/')
    res.redirect(301, safepath + query)
  } else {
    next()
  }
})


