import type { Product } from "@/lib/types";

export const fijacionesDrywall: Product[] = [
  // Tornillos para Planchas Drywall (fosfatado y zincado, 1" a 3")
  ...["1", "1 1/4", "1 5/8", "2", "2 1/2", "3"].flatMap(size => [
    {
      id: `tornillo-plancha-fosfatado-${size.replace(/\s|\//g, "-")}`,
      code: `TPF-${size}`,
      name: `Tornillo Fosfatado para Planchas Drywall ${size}''`,
      description: `Tornillo fosfatado de ${size}'' para fijación de planchas de yeso a estructura metálica. Punta fina, rosca fina, alta resistencia a la corrosión.`,
      price: 0,
      discount: 0,
      rating: 4.7,
      reviews: 10,
      image: "/tornilleria/tornillo.jpg",
      category: "fijaciones-drywall",
      subcategory: "tornillos-planchas",
      isNew: false,
      inStock: true,
      date: "2025-06-27",
      fichaTecnica: "https://www.sodimac.cl/sodimac-cl/product/1104046/Tornillo-para-drywall-1-pulgada/1104046",
      tags: ["tornillo", "planchas", "fosfatado", "drywall"],
      stockDisponible: 100,
      ubicacionAlmacen: "A1-01",
      technicalSpecs: {
        "Largo": `${size}''`,
        "Rosca": "Fina",
        "Material": "Acero fosfatado",
        "Aplicación": "Planchas de yeso a estructura metálica",
        "Presentación": "Caja x 1000 unidades"
      },
      features: [
        "Alta resistencia a la corrosión",
        "Punta fina para fácil penetración",
        "Rosca fina para mejor agarre en metal"
      ]
    },
    {
      id: `tornillo-plancha-zincado-${size.replace(/\s|\//g, "-")}`,
      code: `TPZ-${size}`,
      name: `Tornillo Zincado para Planchas Drywall ${size}''`,
      description: `Tornillo zincado de ${size}'' para fijación de planchas de yeso a estructura metálica. Punta fina, rosca fina, acabado brillante.`,
      price: 0,
      discount: 0,
      rating: 4.6,
      reviews: 8,
      image: "/fijaciones_drywall/tornillozincado.jpg",
      category: "fijaciones-drywall",
      subcategory: "tornillos-planchas",
      isNew: false,
      inStock: true,
      date: "2025-06-27",
      fichaTecnica: "https://www.sodimac.cl/sodimac-cl/product/1104046/Tornillo-para-drywall-1-pulgada/1104046",
      tags: ["tornillo", "planchas", "zincado", "drywall"],
      stockDisponible: 100,
      ubicacionAlmacen: "A1-01",
      technicalSpecs: {
        "Largo": `${size}''`,
        "Rosca": "Fina",
        "Material": "Acero zincado",
        "Aplicación": "Planchas de yeso a estructura metálica",
        "Presentación": "Caja x 1000 unidades"
      },
      features: [
        "Acabado brillante",
        "Punta fina para fácil penetración",
        "Rosca fina para mejor agarre en metal"
      ]
    }
  ]),
  // Tornillos para Estructura Drywall (fosfatado y zincado, 1" a 3")
  ...["1", "1 1/4", "1 5/8", "2", "2 1/2", "3"].flatMap(size => [
    {
      id: `tornillo-estructura-fosfatado-${size.replace(/\s|\//g, "-")}`,
      code: `TEF-${size}`,
      name: `Tornillo punta Broca zincado para Estructura Drywall ${size}''`,
      description: `Tornillo Punta Broca Zincado de ${size}'' para fijación de perfiles metálicos en sistemas drywall. Rosca gruesa, alta resistencia mecánica.`,
      price: 0,
      discount: 0,
      rating: 4.8,
      reviews: 10,
      image: "/fijaciones_drywall/waferbroca.jpg",
      category: "fijaciones-drywall",
      subcategory: "tornillos-estructura",
      isNew: false,
      inStock: true,
      date: "2025-06-27",
      fichaTecnica: "https://www.sodimac.cl/sodimac-cl/product/1104050/Tornillo-estructura-drywall-1-pulgada/1104050",
      tags: ["tornillo", "estructura", "fosfatado", "drywall"],
      stockDisponible: 100,
      ubicacionAlmacen: "A1-03",
      technicalSpecs: {
        "Largo": `${size}''`,
        "Rosca": "Gruesa",
        "Material": "Acero punta broca zincado",
        "Aplicación": "Fijación de perfiles metálicos",
        "Presentación": "Caja x 1000 unidades"
      },
      features: [
        "Cabeza hexagonal",
        "Rosca gruesa para mejor agarre",
        "Alta resistencia mecánica"
      ]
    },
    {
      id: `tornillo-estructura-zincado-${size.replace(/\s|\//g, "-")}`,
      code: `TEZ-${size}`,
      name: `Tornillo Zincado para Estructura Drywall ${size}''`,
      description: `Tornillo zincado de ${size}'' para fijación de perfiles metálicos en sistemas drywall. Rosca gruesa, acabado brillante.`,
      price: 0,
      discount: 0,
      rating: 4.7,
      reviews: 8,
      image: "/fijaciones_drywall/wafer.jpg",
      category: "fijaciones-drywall",
      subcategory: "tornillos-estructura",
      isNew: false,
      inStock: true,
      date: "2025-06-27",
      fichaTecnica: "https://www.sodimac.cl/sodimac-cl/product/1104050/Tornillo-estructura-drywall-1-pulgada/1104050",
      tags: ["tornillo", "estructura", "zincado", "drywall"],
      stockDisponible: 100,
      ubicacionAlmacen: "A1-03",
      technicalSpecs: {
        "Largo": `${size}''`,
        "Rosca": "Gruesa",
        "Material": "Acero zincado",
        "Aplicación": "Fijación de perfiles metálicos",
        "Presentación": "Caja x 1000 unidades"
      },
      features: [
        "Acabado brillante",
        "Rosca gruesa para mejor agarre",
        "Alta resistencia mecánica"
      ]
    }
  ]),
  // Clavos para Drywall (3/4", 1", 1 1/4", 1 1/2", 2")
  ...["3/4", "1", "1 1/4", "1 1/2", "2"].map(size => ({
    id: `clavo-${size.replace(/\s|\//g, "-")}`,
    code: `CL-${size}`,
    name: `Clavo para Drywall ${size}''`,
    description: `Clavo de acero templado de ${size}'' para fijación de perfiles y planchas en sistemas drywall. Punta diamantada, alta dureza.`,
    price: 0,
    discount: 0,
    rating: 4.5,
    reviews: 7,
    image: "/fijaciones_drywall/clavo.webp",
    category: "fijaciones-drywall",
    subcategory: "clavos-drywall",
    isNew: false,
    inStock: true,
    date: "2025-06-27",
    fichaTecnica: "https://www.sodimac.cl/sodimac-cl/product/1104060/Clavo-drywall-1-pulgada/1104060",
    tags: ["clavo", "drywall"],
    stockDisponible: 100,
    ubicacionAlmacen: "A1-04",
    technicalSpecs: {
      "Largo": `${size}''`,
      "Material": "Acero templado",
      "Aplicación": "Fijación de perfiles y planchas",
      "Presentación": "Caja x 500 unidades"
    },
    features: [
      "Punta diamantada",
      "Alta dureza",
      "Fácil instalación"
    ]
  })),
  // Clip 90° 1
  {
    id: "clavo-Clip-90°-1",
    code: "CL-Clip 90° 1",
    name: "Clip 90° 1\" para Drywall",
    description: "Clip metálico de 90° para fijación especial en sistemas drywall. Alta resistencia y fácil instalación.",
    price: 0,
    discount: 0,
    rating: 4.5,
    reviews: 7,
    image: "/fijaciones_drywall/CLAVO-CLIP.jpg",
    category: "fijaciones-drywall",
    subcategory: "clavos-drywall",
    isNew: false,
    inStock: true,
    date: "2025-06-27",
    fichaTecnica: "",
    tags: ["clip", "90", "drywall"],
    stockDisponible: 100,
    ubicacionAlmacen: "A1-04",
    technicalSpecs: {
      "Largo": "1''",
      "Material": "Acero galvanizado",
      "Aplicación": "Fijación especial en ángulos",
      "Presentación": "Caja x 100 unidades"
    },
    features: [
      "Alta resistencia",
      "Fácil instalación",
      "Diseño para ángulos de 90°"
    ]
  },
  // Fulminantes para Drywall (marrón, verde, amarillo)
  {
    id: "fulminante-marron",
    code: "FUL-MAR",
    name: "Fulminante Marrón para Drywall",
    description: "Fulminante de pólvora tipo marrón para fijación rápida de perfiles metálicos a concreto en sistemas drywall. Uso profesional.",
    price: 0,
    discount: 0,
    rating: 4.9,
    reviews: 15,
    image: "/fijaciones_drywall/fulminante_marron.jpg",
    category: "fijaciones-drywall",
    subcategory: "fulminantes-drywall",
    isNew: false,
    inStock: true,
    date: "2025-06-27",
    fichaTecnica: "https://www.sodimac.cl/sodimac-cl/product/1104070/Fulminante-marron-drywall/1104070",
    tags: ["fulminante", "marron", "drywall"],
    stockDisponible: 100,
    ubicacionAlmacen: "A1-05",
    technicalSpecs: {
      "Color": "Marrón",
      "Tipo": "Pólvora",
      "Aplicación": "Fijación rápida a concreto",
      "Presentación": "Caja x 100 unidades"
    },
    features: [
      "Uso profesional",
      "Fijación rápida",
      "Alta potencia"
    ]
  },
  {
    id: "fulminante-verde",
    code: "FUL-VER",
    name: "Fulminante Verde para Drywall",
    description: "Fulminante de pólvora tipo verde para fijación de perfiles metálicos a concreto en sistemas drywall. Potencia media, uso profesional.",
    price: 0,
    discount: 0,
    rating: 4.8,
    reviews: 10,
    image: "/fijaciones_drywall/fulminante-verde-cal-22-strutek.jpg",
    category: "fijaciones-drywall",
    subcategory: "fulminantes-drywall",
    isNew: false,
    inStock: true,
    date: "2025-06-27",
    fichaTecnica: "https://www.sodimac.cl/sodimac-cl/product/1104071/Fulminante-verde-drywall/1104071",
    tags: ["fulminante", "verde", "drywall"],
    stockDisponible: 100,
    ubicacionAlmacen: "A1-06",
    technicalSpecs: {
      "Color": "Verde",
      "Tipo": "Pólvora",
      "Aplicación": "Fijación rápida a concreto",
      "Presentación": "Caja x 100 unidades"
    },
    features: [
      "Potencia media",
      "Uso profesional",
      "Fijación eficiente"
    ]
  },
  {
    id: "fulminante-amarillo",
    code: "FUL-AMA",
    name: "Fulminante Amarillo para Drywall",
    description: "Fulminante de pólvora tipo amarillo para fijación de perfiles metálicos a concreto en sistemas drywall. Potencia alta, uso profesional.",
    price: 0,
    discount: 0,
    rating: 4.9,
    reviews: 13,
    image: "/fijaciones_drywall/fulminanteamarillo.jpg",
    category: "fijaciones-drywall",
    subcategory: "fulminantes-drywall",
    isNew: false,
    inStock: true,
    date: "2025-06-27",
    fichaTecnica: "https://www.sodimac.cl/sodimac-cl/product/1104072/Fulminante-amarillo-drywall/1104072",
    tags: ["fulminante", "amarillo", "drywall"],
    stockDisponible: 100,
    ubicacionAlmacen: "A1-07",
    technicalSpecs: {
      "Color": "Amarillo",
      "Tipo": "Pólvora",
      "Aplicación": "Fijación rápida a concreto",
      "Presentación": "Caja x 100 unidades"
    },
    features: [
      "Potencia alta",
      "Uso profesional",
      "Fijación eficiente"
    ]
  },
];
