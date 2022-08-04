export interface Product {
  id: string
  handle: string
  title: string
  productType?: string
  images: [
    {
      url: string
      altText?: string
    }
  ]
  options?: [
    {
      name: string
    }
  ]
}
