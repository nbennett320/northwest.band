import { SERVER_URL } from '../env'
import { Product } from '../types/product'

export const getAllProductPaths = async ():
Promise<{ params: { handle: string } }[]> => {
  const res = await fetch(`${SERVER_URL}/products/all-handles`)
  const handles: string[] = await res.json()

  return handles.map(e => ({ params: { handle: e } }))
}

// get all static data for an individual product
export const getAllProductData = async (handle: string) => {
  const res = await fetch(`${SERVER_URL}/products/item/${handle}`)
  const data: Product = await res.json()

  return data
}
