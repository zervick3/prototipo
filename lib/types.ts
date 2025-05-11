export interface Product {
  id: string
  code: string
  name: string
  description: string
  price: number
  discount: number
  rating: number
  reviews: number
  image: string
  category: string
  subcategory: string
  isNew: boolean
  inStock: boolean
  date: string
  technicalSpecs: {
    [key: string]: string
  }
  features: string[]
}
