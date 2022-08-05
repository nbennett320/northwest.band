export interface Product {
  id: string
  handle: string
  title: string
  productType?: string
  price: number,
  images: [
    {
      url: string
      altText?: string
      height: number
      width: number
    }
  ]
  options?: [
    {
      name: string
    }
  ]
}
