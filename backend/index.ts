import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'

// Initialize the express engine
const app: express.Application = express()
const port: number = 4432
const jsonParser = bodyParser.json()
const proxy = createProxyMiddleware({ 
  target: 'http://localhost:3000', 
  changeOrigin: true,
})

app.use(cors({ origin: 'http://localhost:3000' }))

// Handling '/' Request
// app.get('/', (_req, res) => {
//   res.send("TypeScript With Expresss")
// })

app.use('/', require('./routes/index'))
app.use('/products', require('./routes/products'))
app.use('/cart', jsonParser, require('./routes/cart'))

// Server setup
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}/`)
})


