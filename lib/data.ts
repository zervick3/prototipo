import type { Product } from "./types"
import { placaProducts } from "@/lib/products/placasYeso";
import { superboardProducts } from "@/lib/products/superboard";
import { perfilesProducts } from "@/lib/products/perfilesmetal";
import { perfilesBaldosasProducts } from "@/lib/products/perfilesBaldosas";
import { masillasProducts } from "@/lib/products/masillas";
import { cintasProducts } from "@/lib/products/cintas";
import { baldosasProducts } from "@/lib/products/baldosas";

const Mainproducts: Product[] = [
  {
    id: "1",
    code: "TP-2050-PRO",
    name: "Taladro Percutor Profesional 20V",
    description: "Taladro percutor inalámbrico de alta potencia con batería de litio de 20V, incluye 2 baterías y maletín. Ideal para trabajos profesionales en construcción y carpintería. Diseño ergonómico para reducir la fatiga durante uso prolongado.",
    price: 149.99,
    discount: 10,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=400&width=400",
    category: "herramientas-electricas",
    subcategory: "taladros",
    isNew: true,

    inStock: true,
    date: "2023-11-15",
    technicalSpecs: {
      Potencia: "20V",
      Velocidad: "0-1800 RPM",
      "Torque máximo": "60 Nm",
      "Capacidad del mandril": "13mm",
      Peso: "1.8 kg",
      Incluye: "2 baterías, cargador, maletín",
      Garantía: "3 años",
    },
    features: [
      "Motor sin escobillas para mayor durabilidad",
      "Luz LED integrada para trabajar en áreas oscuras",
      "21 posiciones de embrague para control preciso",
      "Batería de litio de carga rápida",
      "Mango ergonómico con agarre suave",
    ],
    fichaTecnica: "",
    tags: [],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },

]
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