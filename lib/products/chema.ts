import type { Product } from "@/lib/types";

export const chemaProducts: Product[] = [
  // IMPERMEABILIZANTES INTEGRALES
  {
    id: "chema-1-liquido-1",
    code: "CHEMA1LIQ-01",
    name: "Chema 1 Líquido",
    description: "Aditivo impermeabilizante integral líquido para concreto y mortero. Reduce la permeabilidad, mejora la trabajabilidad y prolonga la vida útil de las estructuras. Ideal para obras civiles, tanques, piscinas y cimentaciones.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/CHEMA1.jpg",
    category: "chema",
    subcategory: "chema-1-liquido",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón, balde y tambor",
      "Color": "Líquido transparente",
      "Densidad": "1.05 ± 0.02 g/cm³",
      "Consumo": "200-400 ml por saco de cemento (42.5 kg)",
      "Aplicación": "Mezclado directo en el agua de amasado"
    },
    features: [
      "Reduce la permeabilidad del concreto",
      "Mejora la trabajabilidad",
      "Compatible con todo tipo de cementos"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chema-1-liquido.pdf",
    tags: ["impermeabilizante", "aditivo", "concreto"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chema-1-polvo-1",
    code: "CHEMA1POLVO-01",
    name: "Chema 1 en polvo",
    description: "Aditivo impermeabilizante en polvo para concreto y mortero. Proporciona protección integral contra la humedad, evitando la formación de eflorescencias y prolongando la vida útil de las estructuras. Ideal para cimentaciones, tanques y muros.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/CHEMA1-POLVO.jpg",
    category: "chema",
    subcategory: "chema-1-polvo",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Bolsa de 1 kg y 25 kg",
      "Color": "Polvo blanco",
      "Densidad": "1.10 ± 0.05 g/cm³",
      "Consumo": "1 kg por saco de cemento (42.5 kg)",
      "Aplicación": "Mezclado directo en seco con el cemento antes de agregar el agua"
    },
    features: [
      "Evita eflorescencias y filtraciones",
      "Fácil dosificación y mezcla homogénea",
      "Compatible con todo tipo de cementos"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chema-1-polvo.pdf",
    tags: ["impermeabilizante", "aditivo", "concreto"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chemita-polvo-1",
    code: "CHEMITAPOLVO-01",
    name: "Chemita en polvo",
    description: "Aditivo impermeabilizante en polvo especialmente formulado para morteros de albañilería y tarrajeo. Mejora la cohesión y reduce la absorción capilar, facilitando acabados duraderos y resistentes a la humedad.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/CHEMITA-EN-POLVO.jpg",
    category: "chema",
    subcategory: "chemita-polvo",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Bolsa de 1 kg",
      "Color": "Polvo blanco",
      "Densidad": "1.10 ± 0.05 g/cm³",
      "Consumo": "1 kg por saco de cemento (42.5 kg)",
      "Aplicación": "Mezclado directo en seco con el cemento"
    },
    features: [
      "Facilita el tarrajeo y la albañilería",
      "Reduce la absorción de agua",
      "Evita la formación de hongos y manchas"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chemita-polvo.pdf",
    tags: ["impermeabilizante", "mortero", "tarrajeo"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chemaplast-impermeabilizante-1",
    code: "CHEMAPLASTIMP-01",
    name: "Chemaplast Impermeabilizante",
    description: "Aditivo líquido plastificante e impermeabilizante para concreto y mortero. Mejora la trabajabilidad, reduce la permeabilidad y aumenta la durabilidad de las mezclas. Ideal para obras civiles, tanques, piscinas y cimentaciones.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/chemaplast-impermeabilizante-1.jpg",
    category: "chema",
    subcategory: "chemaplast-impermeabilizante",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón, balde y tambor",
      "Color": "Líquido marrón",
      "Densidad": "1.08 ± 0.02 g/cm³",
      "Consumo": "200-400 ml por saco de cemento (42.5 kg)",
      "Aplicación": "Mezclado directo en el agua de amasado"
    },
    features: [
      "Plastifica e impermeabiliza en un solo paso",
      "Reduce la segregación y mejora la cohesión",
      "Compatible con todo tipo de cementos"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chemaplast-impermeabilizante.pdf",
    tags: ["impermeabilizante", "plastificante", "concreto"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  // IMPERMEABILIZANTES SUPERFICIALES
  {
    id: "chemaantisalitre-1",
    code: "CHEMAANTISALITRE-01",
    name: "Chema Antisalitre Extreme",
    description: "Impermeabilizante superficial de alta tecnología para la protección de muros y superficies expuestas a la humedad y sales. Forma una barrera efectiva contra el salitre, prolongando la vida útil de las estructuras y mejorando el acabado final.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/CHEMA-WELD-1G-300x300.jpg",
    category: "chema",
    subcategory: "chemaantisalitre",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón y balde",
      "Color": "Líquido blanco lechoso",
      "Rendimiento": "6-8 m²/L por mano",
      "Aplicación": "Brocha, rodillo o pulverizador sobre superficies limpias y secas"
    },
    features: [
      "Bloquea la migración de sales y humedad",
      "Mejora la adherencia de pinturas y acabados",
      "Fácil aplicación y secado rápido"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chemaantisalitre.pdf",
    tags: ["impermeabilizante", "superficial", "salitre"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chematopantisalitre-1",
    code: "CHEMATOPANTISALITRE-01",
    name: "Chema Top Antisalitre Tipo Pintura",
    description: "Impermeabilizante superficial tipo pintura, formulado para proteger muros y fachadas contra la humedad y el salitre. Proporciona un acabado decorativo y resistente, ideal para ambientes interiores y exteriores expuestos a condiciones agresivas.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/ChemaTopPintura.webp",
    category: "chema",
    subcategory: "chematopantisalitre",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón y balde",
      "Color": "Blanco mate",
      "Rendimiento": "8-10 m²/L por mano",
      "Aplicación": "Brocha, rodillo o pistola sobre superficies limpias y secas"
    },
    features: [
      "Protege contra humedad y salitre",
      "Acabado decorativo y lavable",
      "Alta adherencia y durabilidad"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chematopantisalitre.pdf",
    tags: ["impermeabilizante", "superficial", "pintura", "salitre"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chematop-1",
    code: "CHEMATOP-01",
    name: "Chema Top en Polvo",
    description: "Impermeabilizante superficial en polvo para superficies de concreto y mortero. Sella poros y microfisuras, evitando filtraciones y mejorando la resistencia a la humedad en muros, pisos y techos.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/chematop.jfif",
    category: "chema",
    subcategory: "chematop",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Bolsa de 5 kg y 25 kg",
      "Color": "Polvo gris claro",
      "Rendimiento": "1.5-2 kg/m² por mano",
      "Aplicación": "Espolvoreo o mezcla con agua para formar una lechada y aplicar con brocha"
    },
    features: [
      "Sella poros y microfisuras",
      "Evita filtraciones de agua",
      "Fácil aplicación en obra nueva o reparación"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chematop.pdf",
    tags: ["impermeabilizante", "superficial", "polvo"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chema-seal-1",
    code: "CHEMASEAL-01",
    name: "Chema Seal",
    description: "Impermeabilizante superficial de alto desempeño para sellado de superficies de concreto, mortero y mampostería. Forma una barrera protectora contra la humedad, mejorando la durabilidad y el acabado de las estructuras.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/WEB-Chema-Seal.png",
    category: "chema",
    subcategory: "chema-seal",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón y balde",
      "Color": "Líquido transparente",
      "Rendimiento": "8-10 m²/L por mano",
      "Aplicación": "Brocha, rodillo o pulverizador sobre superficies limpias y secas"
    },
    features: [
      "Sella y protege superficies porosas",
      "Evita filtraciones y manchas de humedad",
      "Mejora la adherencia de pinturas y acabados"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chema-seal.pdf",
    tags: ["impermeabilizante", "superficial", "sellador"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chema-seal-200-1",
    code: "CHEMASEAL200-01",
    name: "Chema Seal 200",
    description: "Impermeabilizante superficial de alto desempeño, especialmente formulado para sellar y proteger superficies expuestas a condiciones extremas de humedad. Ideal para aplicaciones en sótanos, muros y cimentaciones.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/chema-seal-200-2-600x600.jpg",
    category: "chema",
    subcategory: "chema-seal-200",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón y balde",
      "Color": "Líquido blanco lechoso",
      "Rendimiento": "6-8 m²/L por mano",
      "Aplicación": "Brocha, rodillo o pulverizador sobre superficies limpias y secas"
    },
    features: [
      "Alta resistencia a la presión hidrostática",
      "Ideal para zonas de alta humedad",
      "Fácil aplicación y rápido secado"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chema-seal-200.pdf",
    tags: ["impermeabilizante", "superficial", "sellador"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chema-seal-por-cristalizacion-1",
    code: "CHEMASEALCRISTAL-01",
    name: "Chema Seal por Cristalizacion",
    description: "Impermeabilizante superficial por cristalización para concreto. Penetra en la estructura y forma cristales insolubles que bloquean el paso del agua, brindando protección duradera incluso bajo presión negativa.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/WEB-Chema-Seal(1).png",
    category: "chema",
    subcategory: "chema-seal-por-cristalizacion",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Bolsa de 5 kg y 25 kg",
      "Color": "Polvo gris claro",
      "Rendimiento": "1-1.5 kg/m² por mano",
      "Aplicación": "Brocha o llana sobre superficies húmedas"
    },
    features: [
      "Protección permanente por cristalización",
      "Resiste presión positiva y negativa",
      "Ideal para sótanos, tanques y túneles"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chema-seal-cristalizacion.pdf",
    tags: ["impermeabilizante", "cristalización", "concreto"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chematecho-1",
    code: "CHEMATECHO-01",
    name: "Chema Techo",
    description: "Impermeabilizante acrílico de alta elasticidad para techos y terrazas. Forma una membrana continua y flexible que protege contra filtraciones, rayos UV y cambios de temperatura. Ideal para mantenimiento preventivo y correctivo en cubiertas expuestas.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/Chema-Techo-web.jpg",
    category: "chema",
    subcategory: "chematecho",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón y balde",
      "Color": "Blanco, rojo, gris",
      "Rendimiento": "1-1.5 kg/m² en dos manos",
      "Aplicación": "Brocha, rodillo o airless sobre superficies limpias y secas"
    },
    features: [
      "Alta elasticidad y resistencia a la intemperie",
      "Protege contra rayos UV y lluvia",
      "Fácil aplicación y rápido secado"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chematecho.pdf",
    tags: ["impermeabilizante", "techo", "acrílico"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chematechoelastic-1",
    code: "CHEMATECHOELASTIC-01",
    name: "Chema Techo Elastic",
    description: "Impermeabilizante elástico de última generación para techos y terrazas. Su fórmula avanzada permite puentear fisuras y soportar movimientos estructurales, garantizando protección duradera contra filtraciones y agentes climáticos.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/CHEMA-TECHO-ELASTIC.jpg",
    category: "chema",
    subcategory: "chematechoelastic",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón y balde",
      "Color": "Blanco, rojo, gris",
      "Rendimiento": "1-1.5 kg/m² en dos manos",
      "Aplicación": "Brocha, rodillo o airless sobre superficies limpias y secas"
    },
    features: [
      "Máxima elasticidad y capacidad de puenteo de fisuras",
      "Resistente a rayos UV y lluvia intensa",
      "Ideal para techos expuestos a movimientos estructurales"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chematechoelastic.pdf",
    tags: ["impermeabilizante", "techo", "elástico"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chema-bitumen-1",
    code: "CHEMABITUMEN-01",
    name: "Chema Bitumen",
    description: "Impermeabilizante bituminoso de alta adherencia para superficies de concreto, mortero y metal. Forma una barrera continua y flexible que protege contra la humedad, agentes químicos y corrosión. Ideal para cimientos, muros de contención y estructuras enterradas.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/Chema-Bitumen.png",
    category: "chema",
    subcategory: "chema-bitumen",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón y balde",
      "Color": "Negro brillante",
      "Rendimiento": "1-1.5 kg/m² por mano",
      "Aplicación": "Brocha, rodillo o espátula sobre superficies limpias y secas"
    },
    features: [
      "Alta resistencia a la humedad y agentes químicos",
      "Flexible y durable en ambientes agresivos",
      "Ideal para protección de estructuras enterradas"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chema-bitumen.pdf",
    tags: ["impermeabilizante", "bituminoso", "cimientos"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "chema-alquitran-1",
    code: "CHEMAALQUITRAN-01",
    name: "Chema Alquitran",
    description: "Impermeabilizante a base de alquitrán para superficies expuestas a humedad extrema. Proporciona una película protectora resistente a la intemperie, ideal para estructuras metálicas, madera y concreto en contacto con el suelo.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/images.jfif",
    category: "chema",
    subcategory: "chema-alquitran",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Galón y balde",
      "Color": "Negro intenso",
      "Rendimiento": "1-1.5 kg/m² por mano",
      "Aplicación": "Brocha, rodillo o espátula sobre superficies limpias y secas"
    },
    features: [
      "Protección duradera contra humedad y corrosión",
      "Ideal para estructuras metálicas y de madera",
      "Fácil aplicación y rápido secado"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/chema-alquitran.pdf",
    tags: ["impermeabilizante", "alquitran", "protección"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "water-stop-1",
    code: "WATERSTOP-01",
    name: "Water Stop",
    description: "Sellador hidroexpansivo para juntas y grietas en concreto. Expande en contacto con el agua, asegurando un sellado hermético y duradero en estructuras sometidas a presión hidrostática. Ideal para sótanos, tanques y túneles.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/Chema-Water-Stop.webp",
    category: "chema",
    subcategory: "water-stop",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 5 m y 10 m",
      "Color": "Rojo ladrillo",
      "Expansión": "Hasta 300% en volumen",
      "Aplicación": "Colocación directa en juntas antes del vaciado de concreto"
    },
    features: [
      "Expande al contacto con el agua",
      "Sella juntas y grietas de forma permanente",
      "Resiste presión hidrostática positiva y negativa"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/water-stop.pdf",
    tags: ["sellador", "hidroexpansivo", "juntas"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "water-stop-de-pvc-1",
    code: "WATERSTOPPVC-01",
    name: "Water Stop de PVC",
    description: "Banda de PVC flexible para sellado de juntas de dilatación y construcción en estructuras de concreto. Proporciona estanqueidad y absorbe movimientos estructurales, evitando filtraciones en sótanos, piscinas y canales.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/water-stop-pvc.jpg",
    category: "chema",
    subcategory: "water-stop-de-pvc",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 15 m y 20 m",
      "Color": "Azul",
      "Ancho": "150 mm, 200 mm, 250 mm",
      "Aplicación": "Colocación en juntas antes del vaciado de concreto"
    },
    features: [
      "Flexible y resistente a movimientos estructurales",
      "Evita filtraciones en juntas de dilatación",
      "Fácil instalación en obra"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/water-stop-pvc.pdf",
    tags: ["sellador", "pvc", "juntas"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  // MEMBRANAS ASFALTICAS
  {
    id: "megaflex-aluminio-1",
    code: "MEGAFLEXALU-01",
    name: "Membrana Megaflex Aluminio",
    description: "Membrana asfáltica prefabricada con recubrimiento de aluminio, diseñada para impermeabilización de techos y terrazas. Ofrece alta reflectividad solar, resistencia a la intemperie y protección duradera contra filtraciones.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/NO-CRACK.png",
    category: "chema",
    subcategory: "megaflex-aluminio",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 1 m x 10 m",
      "Color": "Aluminio brillante",
      "Espesor": "4 mm",
      "Aplicación": "Sopleteado o adherido en frío sobre superficies limpias y secas"
    },
    features: [
      "Alta reflectividad solar y ahorro energético",
      "Excelente resistencia a rayos UV y envejecimiento",
      "Ideal para techos expuestos y terrazas transitables"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/megaflex-aluminio.pdf",
    tags: ["membrana", "asfáltica", "aluminio"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "geocolor-gris-1",
    code: "GEOCOLORGRIS-01",
    name: "Membrana Geocolor gris",
    description: "Membrana asfáltica prefabricada color gris, ideal para impermeabilización de superficies expuestas a la intemperie. Proporciona protección duradera contra filtraciones y excelente adherencia a concreto y mortero.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/24879-p5368.jpeg",
    category: "chema",
    subcategory: "geocolor-gris",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 1 m x 10 m",
      "Color": "Gris",
      "Espesor": "4 mm",
      "Aplicación": "Sopleteado o adherido en frío sobre superficies limpias y secas"
    },
    features: [
      "Color decorativo y protección UV",
      "Impermeabilización duradera de techos y terrazas",
      "Fácil instalación y mantenimiento"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/geocolor-gris.pdf",
    tags: ["membrana", "asfáltica", "gris"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "glasdan-al-80-1",
    code: "GLASDANAL80-01",
    name: "Membrana Glasdan AL-80",
    description: "Membrana asfáltica prefabricada con refuerzo de aluminio, ideal para impermeabilización de techos, terrazas y cubiertas expuestas. Ofrece excelente resistencia a rayos UV, envejecimiento y filtraciones de agua.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/glasdanal80.jpg",
    category: "chema",
    subcategory: "glasdan-al-80",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 1 m x 10 m",
      "Color": "Aluminio",
      "Espesor": "4 mm",
      "Aplicación": "Sopleteado o adherido en frío sobre superficies limpias y secas"
    },
    features: [
      "Refuerzo de aluminio para máxima durabilidad",
      "Alta reflectividad y protección térmica",
      "Ideal para techos y cubiertas expuestas"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/glasdan-al-80.pdf",
    tags: ["membrana", "asfáltica", "aluminio"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "meganor-1",
    code: "MEGANOR-01",
    name: "Membrana Meganor",
    description: "Membrana asfáltica de alta resistencia mecánica, diseñada para impermeabilización de superficies sometidas a tránsito moderado y condiciones exigentes. Proporciona protección duradera contra filtraciones y desgaste.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/MEMBRANA-ASFALTICA-MEGANOR.jpg",
    category: "chema",
    subcategory: "meganor",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 1 m x 10 m",
      "Color": "Negro",
      "Espesor": "4 mm",
      "Aplicación": "Sopleteado o adherido en frío sobre superficies limpias y secas"
    },
    features: [
      "Alta resistencia mecánica y al desgaste",
      "Impermeabilización duradera en zonas de tránsito",
      "Fácil instalación y mantenimiento"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/meganor.pdf",
    tags: ["membrana", "asfáltica", "resistente"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "esterdan-plus-40-gp-elastomero-1",
    code: "ESTERDAN40GP-01",
    name: "Membrana Esterdan plus 40 GP Elastomero",
    description: "Membrana asfáltica elastomérica de alto desempeño, diseñada para impermeabilización de techos, terrazas y cubiertas sometidas a movimientos estructurales. Ofrece gran flexibilidad, resistencia a la intemperie y durabilidad superior.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/esterdan40gp.jfif",
    category: "chema",
    subcategory: "esterdan-plus-40-gp-elastomero",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 1 m x 10 m",
      "Color": "Negro",
      "Espesor": "4 mm",
      "Aplicación": "Sopleteado o adherido en frío sobre superficies limpias y secas"
    },
    features: [
      "Alta elasticidad y capacidad de puenteo de fisuras",
      "Resistente a movimientos estructurales y vibraciones",
      "Durabilidad superior en ambientes exigentes"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/esterdan-plus-40-gp-elastomero.pdf",
    tags: ["membrana", "asfáltica", "elastomérica"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "cinta-asfaltica-1",
    code: "CINTAASFALTICA-01",
    name: "Cinta Asfaltica Autoadhesiva",
    description: "Cinta asfáltica autoadhesiva para sellado e impermeabilización de juntas, grietas y uniones en techos, canaletas y superficies metálicas. Proporciona una barrera instantánea y flexible contra filtraciones de agua y humedad.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/Asphalt.avif",
    category: "chema",
    subcategory: "cinta-asfaltica",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 10 cm x 10 m, 20 cm x 10 m",
      "Color": "Negro",
      "Espesor": "1.5 mm",
      "Aplicación": "Colocación directa sobre superficies limpias y secas, presión manual"
    },
    features: [
      "Autoadhesiva y de fácil aplicación",
      "Sella instantáneamente filtraciones y grietas",
      "Flexible y resistente a la intemperie"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/cinta-asfaltica.pdf",
    tags: ["cinta", "asfáltica", "sellado"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "imperdan-fp-3-1",
    code: "IMPERDANFP3-01",
    name: "Membrana Imperdan FP 30",
    description: "Membrana asfáltica prefabricada para impermeabilización de superficies horizontales y verticales. Ofrece excelente adherencia, resistencia a la intemperie y protección duradera contra filtraciones de agua.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/fp30.jpg",
    category: "chema",
    subcategory: "imperdan-fp-3",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 1 m x 10 m",
      "Color": "Negro",
      "Espesor": "3 mm",
      "Aplicación": "Sopleteado o adherido en frío sobre superficies limpias y secas"
    },
    features: [
      "Impermeabilización eficiente y duradera",
      "Fácil instalación en superficies horizontales y verticales",
      "Resistente a la intemperie y rayos UV"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/imperdan-fp-30.pdf",
    tags: ["membrana", "asfáltica", "impermeabilización"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  {
    id: "imperdan-fp-4-1",
    code: "IMPERDANFP4-01",
    name: "Membrana imperdan FP 40 P",
    description: "Membrana asfáltica de alta resistencia para impermeabilización de superficies sometidas a tránsito y condiciones exigentes. Proporciona protección superior contra filtraciones, desgaste y agentes climáticos.",
    price: 0,
    discount: 0,
    rating: 0,
    reviews: 0,
    image: "/chema/fp40.jpg",
    category: "chema",
    subcategory: "imperdan-fp-4",
    isNew: true,
    inStock: true,
    date: "2025-06-27",
    technicalSpecs: {
      "Presentación": "Rollos de 1 m x 10 m",
      "Color": "Negro",
      "Espesor": "4 mm",
      "Aplicación": "Sopleteado o adherido en frío sobre superficies limpias y secas"
    },
    features: [
      "Alta resistencia al tránsito y desgaste",
      "Impermeabilización duradera en ambientes exigentes",
      "Fácil instalación y mantenimiento"
    ],
    fichaTecnica: "https://chema.com.pe/fichas/imperdan-fp-40-p.pdf",
    tags: ["membrana", "asfáltica", "resistente"],
    stockDisponible: 0,
    ubicacionAlmacen: ""
  },
  
];
