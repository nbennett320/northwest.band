const USPS = require('usps-webtools')

const usps = new USPS({
    server: 'http://production.shippingapis.com/ShippingAPI.dll',
    userId: '470NORTH0117',
    ttl: 10000
})

export default usps