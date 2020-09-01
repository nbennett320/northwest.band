import server from '../server.config'

export default (cart, address) => {
  if(address) {
    return useAddress(cart, address)
  } else {
    // const acceptedLocation = confirm("do you mind if we use your location to estimate shipping..? (you can say no)")
    // localStorage.setItem("allowsLocation", acceptedLocation)
    // if(acceptedLocation) {
    //   return await useLocation(cart)
    // } else {
      console.warn("no location or address provided -- cannot estimate shipping")
      return ''
    // }
  } 
}

const useAddress = async (cart, address) => {
  const res = await fetch(`${server}/calculate/shipping/address
    ?weight=${calculateTotalWeight(cart)}
    &zip=${address.zip}
    &street=${address.street}
    &city=${address.city}
    &state=${address.state}
  `)
  return res
}

const useLocation = async (cart) => {
  const { coords } = navigator.geolocation.getCurrentPosition()
  const res = await fetch(`${server}/calculate/shipping/location
    ?weight=${calculateTotalWeight(cart)}
    &lat=${coords.latitude}
    &long=${coords.longitude}
  `)
  return res
}

const calculateTotalWeight = cart => {
  let sum = 0
  return sum
}