export interface ProductImage {
  url: string
  altText?: string
  height: number
  width: number
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
