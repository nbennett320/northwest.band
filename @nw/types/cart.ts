import { SelectedOption } from './common'
import { ProductImage } from './product' 

export interface CostAmount {
  amount: string,
  currencyCode: string,
}

export interface CartDataItem {
  cartLineId: string,
  variantId: string,
  handle: string,
  title: string,
  price: string,
  image: ProductImage,
  selectedOptions: Array<SelectedOption>,
}

export interface CartCostData {
  totalAmount: CostAmount,
  subtotalAmount: CostAmount,
  taxAmount: CostAmount,
  dutyAmount: CostAmount,
  checkoutChargeAmount: CostAmount,
}

export interface CartData {
  id: string,
  totalQuantity: number,
  checkoutUrl: string,
  items: Array<CartDataItem>,
  cost: CartCostData,
}

export interface CreateCartResponse {
  id: string,
  totalQuantity: number,
}

export interface UpdateCartResponse {
  totalQuantity: number,
  cost: CartCostData,
}

export interface RemoveCartResponse extends UpdateCartResponse {}

export interface AddCartResponse extends UpdateCartResponse {}
