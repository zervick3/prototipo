import type { Product } from "@/lib/types";

export const aditivos: Product[] = [
  {
    id: "pro-zcron-1",
    code: "ZCRON-01",
    name: "Z Cron DESMOLDANTE",
    description:
      "Desmoldante especial de base oleosa (libre de VOC) que evita la adherencia del concreto o mortero al encofrado metálico, fenólico, plástico o madera, brindando excelente acabado sin manchas.",
    price: 0,
    discount: 0,
    rating: 4.5,
    reviews: 30,
    image: "/aditivos/zcron.jpg",
    category: "aditivos",
    subcategory: "zcron",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      Tipo: "Líquido oleoso",
      Color: "Ámbar claro / marrón claro",
      Densidad: "0.86 kg/L (±0.02)",
      "pH (10 %)": "6.0–6.1",
      "Sólidos Totales": "≈ 82.7 %",
      "Materias Volátiles": "53 g/L",
      Rendimiento: "25–30 m² por galón",
    },
    features: [
      "Libre de VOC (no contiene compuestos orgánicos volátiles)",
      "Fácil aplicación con brocha, rodillo o mochila de aspersión",
      "No mancha ni altera la coloración del concreto",
      "Rendidor: cubre aprox. 25–30 m² por galón",
      "Seguro: no tóxico, no inflamable a temperatura ambiente",
    ],
    fichaTecnica:
      "https://panel.construproductos.com/filespdf/z-cron-610d3f4661914.pdf",
    tags: ["desmoldante", "encofrado", "aceite", "z-cron", "z aditivos"],
    stockDisponible: 100,
    ubicacionAlmacen: "nuevo chimbote - chimbote",
  },
];
