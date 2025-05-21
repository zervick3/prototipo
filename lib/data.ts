import type { Product } from "./types"
import { placaProducts } from "@/lib/products/placasYeso";
import { superboardProducts } from "@/lib/products/superboard";
import { perfilesProducts } from "@/lib/products/perfilesmetal";
import { perfilesBaldosasProducts } from "@/lib/products/perfilesBaldosas";
import { masillasProducts } from "@/lib/products/masillas";
import { cintasProducts } from "@/lib/products/cintas";
import { baldosasProducts } from "@/lib/products/baldosas";
import { simplisimaProducts } from "./products/simplisima";

const Mainproducts: Product[] = []
export const rawproducts: Product[] = [
  ...Mainproducts,
  ...placaProducts,
  ...superboardProducts,
  ...perfilesProducts,
  ...perfilesBaldosasProducts,
  ...masillasProducts,
  ...cintasProducts,
  ...baldosasProducts,
  ...simplisimaProducts
]
// Asigna un id único si no existe o si hay repetidos
export const products: Product[] = rawproducts.map((product, idx) => ({
  ...product,
  id: product.id ? `${product.id}-${idx}` : `prod-${idx + 1}`,
}))