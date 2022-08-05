import express from 'express'
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send("TypeScript With Expresss")
})

module.exports = router
