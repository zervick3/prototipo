import type { ReactNode } from "react";
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
  fichaTecnica: string
  tags: string[]
  stockDisponible: number
  ubicacionAlmacen: string
  technicalSpecs: {
    [key: string]: string
  }
  features: string[]
}
export interface SubSubcategory {
  name: string
  slug: string
}
export type Subcategory = {
  name: string;
  slug: string;
  icon?: ReactNode;
  color?: string;
  subcategories?: SubSubcategory[];
};

export type Category = {
  name: string;
  slug: string;
  icon?: ReactNode;
  color?: string;
  subcategories?: Subcategory[];
};

