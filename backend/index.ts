import express from 'express'

// Initialize the express engine
const app: express.Application = express()
const port: number = 4432

// Handling '/' Request
// app.get('/', (_req, res) => {
//   res.send("TypeScript With Expresss")
// })

app.use('/', require('./routes/index'))
app.use('/products', require('./routes/products'))

// Server setup
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}/`)
})


