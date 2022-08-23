// get github tree link from location.pathname
export default pathname => {
  const path = 'tree/main/src/views'
  switch(true) {
    case pathname === '/':
      return `${path}/home/Home.js`
    case pathname === '/music':
      return `${path}/music/Music.js`
    case pathname.includes('/songs'):
      return `${path}/music/Lyrics.js`
    case pathname === '/merch':
      return `${path}/merch/Merch.js`
    case pathname.includes('/product'):
      return `${path}/product-page/ProductPage.js`
    case pathname === '/cart':
      return `${path}/cart-page/CartPage.js`
    case pathname === '/goodies':
      return `${path}/goodies/Goodies.js`
    default:
      return 'tree/main/src/'
  }
}