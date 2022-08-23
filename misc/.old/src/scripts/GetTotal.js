import GetSubtotal from './GetSubtotal'
import GetShippingCost from './GetShippingCost'

export default cart => 
  GetSubtotal(cart) + GetShippingCost(cart)