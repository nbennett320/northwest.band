export interface ProductImage {
  url: string
  altText?: string
  height?: number
  width?: number
}

export interface ProductOption {
  id: string
  name: string
  values: string[]
}

export interface Product {
  id: string
  handle: string
  title: string
  productType?: string
  price: number
  images: [ProductImage]
  options?: [ProductOption]
}

export interface SelectedOption {
  name: string,
  value: string,
}

export interface CostAmount {
  amount: number,
  currencyCode: string,
}

export interface CartData {
  id: string,
  totalQuantity: number,
  checkoutUrl: string,
  items: Array<{
    cartLineId: string,
    variantId: string,
    handle: string,
    title: string,
    price: number,
    image: ProductImage,
    selectedOptions: Array<SelectedOption>,
  }>,
  cost: {
    totalAmount: CostAmount,
    subtotalAmount: CostAmount,
    taxAmount: CostAmount,
    dutyAmount: CostAmount,
    checkoutChargeAmount: CostAmount,
  }
}

export interface CreateCartResponse {
  id: string,
  totalQuantity: number,
}
