export default cart => {
  let sum = 0
  cart.forEach(item => {
    sum += item.price
  })
  console.log("sum: ", sum)
  return sum.toFixed(2)
}