import type { Product } from "./types"
import { placaProducts } from "@/lib/products/placasYeso";
import { superboardProducts } from "@/lib/products/superboard";
import { perfilesProducts } from "@/lib/products/perfilesmetal";
import { perfilesBaldosasProducts } from "@/lib/products/perfilesBaldosas";
import { masillasProducts } from "@/lib/products/masillas";
import { cintasProducts } from "@/lib/products/cintas";
import { baldosasProducts } from "@/lib/products/baldosas";

const Mainproducts: Product[] = []
export const products: Product[] = [
  ...Mainproducts,
  ...placaProducts,
  ...superboardProducts,
  ...perfilesProducts,
  ...perfilesBaldosasProducts,
  ...masillasProducts,
  ...cintasProducts,
  ...baldosasProducts,
]