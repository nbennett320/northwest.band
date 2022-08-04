export interface Product {
  id: string
  handle: string
  title: string
  productType?: string
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
