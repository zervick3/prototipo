// dataCategoria.ts
import type { Category } from "./types";
import { Hammer, Layers2,PaintBucket, Cuboid, LibraryBig, Wrench, Ruler, Paintbrush, Lightbulb, Shield } from "lucide-react";

// Tipo extendido con sub-subcategorías
export interface SubcategoryWithChildren {
  name: string;
  slug: string;
  icon?: JSX.Element;
  children?: { name: string; slug: string }[];
}

export const categories: Category[] = [
  {
    name: "Sistema Drywall",
    slug: "Drywall",
    icon: <Layers2 className="h-5 w-5" />,
    color: "category-gradient-1",
    subcategories: [
      {
        name: "Placas de Drywall",
        slug: "placas-drywall",
        subcategories: [
          { name: "Placas de Yesos", slug: "placas" },
          { name: "Superboard", slug: "superboard" },
          { name: "Superboard Texturada Madera", slug: "superboardt" },
          { name: "Simplisima", slug: "simplisima" },
        ],
      },
      {
        name: "Perfiles Metálicos",
        slug: "perfiles-metalicos",
        subcategories: [
          { name: "Parantes", slug: "Parante" },
          { name: "Rieles", slug: "riel" },
          { name: "Omega", slug: "omega" },
          { name: "Esquineros", slug: "esquinero" },
        ],
      },
      {
        name: "Cintas Drywall",
        slug: "cintas-drywall",
        subcategories: [
          { name: "Cinta malla de vidrio 2'", slug: "cintavidrio" },
          { name: "Cinta papel", slug: "cintapapel" },
          { name: "Cinta Metalica", slug: "cintametalica" },
        ],
      },
      {
        name: "Masilla Drywall",
        slug: "masillas-drywall",
        subcategories: [
          { name: "Masilla Gyplac 20kg", slug: "masillasG20" },
          { name: "Masila Balde Gyplac 27kg", slug: "masillasG27" },
          { name: "Masilla 5kg", slug: "masillasG5" },
          { name: "Masilla ANTIHUMEDAD 15kg Gyplac", slug: "masillasG15" },
          { name: "Masilla en Polvo 25kg GYPLAC", slug: "masillasGP25" },
          { name: "Masilla en Polvo 25kg Volcan", slug: "masillasVP25" },
          { name: "Masilla Volcan 20kg", slug: "masillasV20" },
          { name: "Masilla Construtek 20kg", slug: "masillasC20" },
        ],
      },
      {
        name: "Fijaciones Para Drywall",
        slug: "fijaciones-drywall",
        subcategories: [
          { name: "Tornillos para Planchas Drywall", slug: "tornillos-planchas" },
          { name: "Tornillos para Estructura Drywall", slug: "tornillos-estructura" },
          { name: "Clavos para Drywall", slug: "clavos-drywall" },
          { name: "Fulminantes para Drywall", slug: "fulminantes-drywall" },
        ],
      },
    ],
  },



  // Otras categorías generales aquí ↓
  {
    name: "Cielo Raso",
    slug: "cielo raso",
    icon: <Hammer className="h-5 w-5" />,
    color: "category-gradient-1",
    subcategories: [
      { name: "Baldosa de Vinil", slug: "baldosavinil" },
      { name: "Baldosa Fibra Mineral CTK", slug: "baldosacosntrutek" },
      { name: "Baldosa Fibrocemento", slug: "baldosafibrocemento" },
      { name: "Susp Tee Principales", slug: "principales" },
      { name: "Susp Tee Secundarios", slug: "secundarios" },
      { name: "Susp Tee Terciaria", slug: "terciaria" },
      { name: "Angulo Susp Perimetral", slug: "angulo" },
      { name: "Alambre", slug: "alambre" },
    ],
  },
  {
    name: "Aditivos",
    slug: "aditivos",
    icon: <PaintBucket className="h-5 w-5" />,
    color: "category-gradient-1",
    subcategories: [
      {
        name: "Z Aditivos",
        slug: "z-aditivo",
        subcategories: [
          // Aquí van todas las subcategorías que estaban bajo 'Z Aditivo'
          {
            name: "Desmoldantes",
            slug: "desmoldantes",
            subcategories: [
              { name: "Z Cron", slug: "zcron" },
              { name: "Z Desmol AL", slug: "zdesmolal" },
              { name: "Z Desmolac PU", slug: "zdemolac" },
            ],
          },
          {
            name: "Curadores",
            slug: "curadores",
            subcategories: [
              { name: "Z Membrana Blanco", slug: "zmembranaB" },
              { name: "Z Membrana S", slug: "zmembranas" },
              { name: "Curet Z ", slug: "curetz" },
            ],
          },
          {
            name: "Impermeabilizantes",
            slug: "impermeabilizantes",
            subcategories: [
              {
                name: "Integrales",
                slug: "integrales",
                subcategories: [
                  { name: "Z 1 Liquido", slug: "z1liquido" },
                  { name: "Z 1 Polvo", slug: "sub2" }
                ]
              },
              {
                name: "Estructuras Enterrasadas",
                slug: "estructuras-enterra",
                subcategories: [
                  { name: "Z Bitumen", slug: "bitumen" },
                  { name: "Imprimante Z", slug: "imprimantez" },
                  { name: "Z Solvente B", slug: "zsolventeb" },
                ]
              },
              {
                name: "Tanques y Cisternas",
                slug: "tanques-cisternas",
                subcategories: [
                  { name: "Aquafin-CI", slug: "aquafin" },
                  { name: "Z Top Impermeable", slug: "ztopimpermeable" },
                  { name: "Z Top Flexible", slug: "ztopflexible" },
                ]
              },
              {
                name: "Superficiales",
                slug: "superficiales",
                subcategories: [
                  { name: "Z Imperoof", slug: "zimperoof" },
                  { name: "Z 2000", slug: "z2000" },
                ]
              },
              {
                name: "Sellador de Superficies",
                slug: "sellador-superficies",
                subcategories: [
                  { name: "Mate Z", slug: "matez" },
                ]
              }
            ],
          },
          {
            name: "Selladores De Juntas",
            slug: "selladores-juntas",
            subcategories: [
              { name: "Z Flex PU 30-40 ", slug: "zflex3040" },
              { name: "Imprimante ZPM", slug: "imprimantezpm" },
              { name: "Z flex Poliuretano A+B", slug: "zflexpoliuretano" },
              { name: "Backer Rod", slug: "backerrod" },
              {
                name: "Selladores para juntas Frias",
                slug: "selladores-juntas-frias",
                subcategories: [
                  { name: "Water Stop PVC", slug: "waterpvc" },
                  { name: "Water Stop RX-101", slug: "waterrx101" }
                ]
              }
            ],
          },
          {
            name: "Epoxicos",
            slug: "epoxicos",
            subcategories: [
              { name: "Z Pox 31 ", slug: "pox31" },
              { name: "Z Pox 32", slug: "pox32" },
              { name: "Z Pox BV", slug: "poxbv" },
              { name: "Z Pox Tacha", slug: "poxtacha" },
              {
                name: "Separadores",
                slug: "separadores",
                subcategories: [
                  { name: "Separadores de Concreto", slug: "separadores2" },
                ]
              }
            ],
          },
          {
            name: "Morteros",
            slug: "morteros",
            subcategories: [
              {
                name: "Moteros de Reparación",
                slug: "morteros-reparacion",
                subcategories: [
                  { name: "Mortero Z T40", slug: "morterot40" },
                ]
              },
              {
                name: "Morteros de Nivelación",
                slug: "morteros-nivelacion",
                subcategories: [
                  { name: "Z Nivelante T30", slug: "znivelante" },
                ]
              },
              {
                name: "Endurecedor de piso ",
                slug: "endurecedor-piso",
                subcategories: [
                  { name: "Z Piso", slug: "zpiso" },
                ]
              },
              {
                name: "Groutings ",
                slug: "groutings",
                subcategories: [
                  { name: "Z Grout", slug: "zgrout" },
                  { name: "Mortero Epoxicos Z", slug: "morteroepoxicosz" },
                ]
              }
            ],
          },
          {
            name: "Aditivos Para Concreto",
            slug: "aditivos-concreto",
            subcategories: [
              {
                name: "Plastificantes y Superplastificantes",
                slug: "plastificantes-superplastificantes",
                subcategories: [
                  { name: "Z Fluidizante IR ", slug: "zfluidizanteir" },
                  { name: "Z RR Plast 545 ", slug: "zrrplast545" },
                  { name: "Z Fluidizante SR-1000 ", slug: "zfluidizantesr1000" },
                ]
              },
              {
                name: "Acelerantes",
                slug: "acelerantes",
                subcategories: [
                  { name: "Z Fragua #3", slug: "zfragua3" },
                  { name: "Z Fragua #5", slug: "zfragua5" },
                ]
              },
              {
                name: "Retardantes",
                slug: "retardantes",
                subcategories: [
                  { name: "Z Retar", slug: "zretar" },
                ]
              }
            ]
          },
          {
            name: "Aditivos Para Concreto",
            slug: "aditivos-concreto",
            subcategories: [
              {
                name: "Aditivos Complementarios",
                slug: "aditivos-complementarios",
                subcategories: [
                  { name: "Z Resina 100% ", slug: "zresina100%" },
                  { name: "Removedor de Oxido ", slug: "removedoroxido" },
                  { name: "Z Fibra PP ", slug: "zfibrapp" },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Chema",
        slug: "chema",
        subcategories: [
          {
            name: "IMPERMEABILIZANTES INTEGRALES",
            slug: "impermeabilizantes-integradas",
            subcategories: [
              { name: "Chema 1 Liquido", slug: "chema-1-liquido" },
              { name: "Chema 1 en polvo", slug: "chema-1-polvo" },
              { name: "Chemita en polvo", slug: "chemita-polvo" },
              { name: "Chemaplast Impermeabilizante", slug: "chemaplast-impermeabilizante" },
            ],
          },
          { 
             name: "IMPERMEABILIZANTES SUPERFICIALES",
             slug: "impermeabilizantes-superficiales",
             subcategories: [
             { name: "Chema Antisalitre Extreme", slug: "chemaantisalitre" },
             { name: "Chema Top Antisalitre Tipo Pintura", slug: "chematopantisalitre" },
             { name: "Chema Top en Polvo", slug: "chematop" },
             { name: "Chema Seal", slug: "chema-seal" },
             { name: "Chema Seal 200 ", slug: "chema-seal-200" },
             { name: "Chema Seal por Cristalizacion", slug: "chema-seal-por-cristalizacion" },
             { name: "Chema Techo", slug: "chematecho" },
             { name: "Chema Techo Elastic", slug: "chematechoelastic" },
             { name: "Chema Bitumen", slug: "chema-bitumen" },
             { name: "Chema Alquitran", slug: "chema-alquitran" },
             { name: "Water Stop", slug: "water-stop" },
             { name: "Water Stop de PVC", slug: "water-stop-de-pvc" },
          ],},
          {
            name: "MEMBRANAS ASFALTICAS",
            slug: "membranas-asfalticas",
            subcategories: [
              { name: "Membrana Megaflex Aluminio", slug: "megaflex-aluminio" },
              { name: "Membrana Geocolor gris", slug: "geocolor-gris" },
              { name: "Membrana Glasdan AL-80", slug: "glasdan-al-80" },
              { name: "Membrana Meganor", slug: "meganor" },
              { name: "Membrana Esterdan plus 40 GP Elastomero", slug: "esterdan-plus-40-gp-elastomero" },
              { name: "Cinta Asfaltica Autoadhesiva", slug: "cinta-asfaltica" },
              { name: "Membrana Imperdan FP 30", slug: "imperdan-fp-3" },
              { name: "Membrana imperdan FP 40 P", slug: "imperdan-fp-4" },
              { name: "Membrana Esterdan Plu", slug: "esterdan-plu" },
            ],
          },
          {
            name: "ACELERANTES PARA CONCRETO",
            slug: "acelerantes-concreto",
            subcategories: [
              { name: "Chema Plug", slug: "chema-plug" },
              { name: "Chema 3", slug: "chema-3" },
              { name: "Chema 5", slug: "chema-5" },
              { name: "Chema Estruct", slug: "chema-estruct" },
            ],
          },
          {
            name: "PLASTIFICANTES PARA CONCRETO",
            slug: "plastificantes-para-concreto",
            subcategories: [
              { name: "Chema Plast", slug: "chema-plast" },
              { name: "Chemaplast 126 N", slug: "chemaplast-126-n" },
              { name: "Chemaplast120D", slug: "chemaplast-120d" },
            ],
          },
          {
            name: "SUPER PLASTIFICANTES PARA CONCRETO",
            slug: "super-plastificantes-para-concreto",
            subcategories: [
              { name: "Chemament 290 G", slug: "chemament-290-g" },
              { name: "Chemament 400", slug: "chemament-400" },
              { name: "Chemament 440", slug: "chemament-440" },
              { name: "Chema Megaplast", slug: "chema-megaplast" },
              { name: "Chema Megaplast 1000 M", slug: "chema-megaplast-1000-m" },
              { name: "Chema Megaplast 2000 M", slug: "chema-megaplast-2000-m" },
            ],
          },
          {
            name: "RETARDANTES DE FRAGUADO",
            slug: "retardantes-de-fraguado",
            subcategories: [
              { name: "Chema Ratardante", slug: "chema-ratardante" },
              { name: "Chematard 400", slug: "chematard-400" },
              { name: "Chema Plast Ret", slug: "chema-plast-ret" },
            ],
          },
          {
            name: "INCORPORADORES DE AIRE",
            slug: "incorporadores-de-aire",
            subcategories: [
              { name: "Chema Entrampaire", slug: "chema-entrampaire" },
              { name: "Chema Entramplast", slug: "chema-entramplast" },
            ],
          },
          {
            name: "FIBRA PARA EL CONCRETO",
            slug: "fibra-para-el-concreto",
            subcategories: [
              { name: "Chema Fibra Ultra Fina", slug: "chema-fibra-ultra-fina" },
            ],
          },
          { 
            name: "EXPANSIVOS", 
            slug: "expansivos",
            subcategories: [
                 { name: "Chema Expand", slug: "chema-expand" },
            ],
          },
          {
            name: "OTROS ADITIVOS",
            slug: "otros-aditivos",
            subcategories: [
              { name: "Chema Inhibidor de Corrosion", slug: "chema-inhibidor-corrosion" },
              { name: "Chema Tunel LA", slug: "chema-tunel-la" },
              { name: "Chema Tunel CA", slug: "chema-tunel-ca" },
              { name: "Chema Fume", slug: "chema-fume" },
              { name: "Chema Aqua", slug: "chema-aqua" },
              { name: "Chema Antipolvo", slug: "chema-antipolvo" },
              { name: "Chema Bond", slug: "chema-bond" },
            ],
          },
          {
            name: "FRACTURADO DE ROCA",
            slug: "fracturado-de-roca",
            subcategories: [
              { name: "Chema Crack", slug: "chema-crack" },
            ],
          },
          {
            name: "DESMOLADANTES PARA ENCOFRADOS",
            slug: "desmoldantes-para-encofrados",
            subcategories: [
              { name: "Chemalac", slug: "chemalac" },
              { name: "Chemalac 2", slug: "chemalac-2" },
              { name: "Chemalac Extra", slug: "chemalac-extra" },
              { name: "Chema Desmold TB", slug: "chema-desmold-tb" },
              { name: "Chema Desmold Metal EQ", slug: "chema-desmold-metal-eq" },
              { name: "Chema Desmold Eco", slug: "chema-desmold-eco" },
            ],
          },
          {
            name: "CURADORES DE FRAGUA DEL CONCRETO",
            slug: "curadores-de-fragua-del-concreto",
            subcategories: [
              { name: "Membranil A", slug: "membranil-a" },
              { name: "Membranil B", slug: "membranil-b" },
              { name: "Membranil C9", slug: "membranil-c9" },
              { name: "Curador Membranil Reforzado", slug: "curador-membranil-reforzado" },
            ],
          },
          {
            name: "MORTEROS DE REPARACION",
            slug: "morteros-de-reparacion",
            subcategories: [
              { name: "Chemarep", slug: "chemarep" },
              { name: "Chema Grout", slug: "chema-grout" },
              { name: "Chema Grout Epoxico NF", slug: "chema-grout-epoxico-nf" },
              { name: "Chema Patch", slug: "chema-patch" },
              { name: "Chemaweld", slug: "chemaweld" },
            ],
          },
          {
            name: "ENDURECEDORES DE PISO",
            slug: "endurecedores-de-piso",
            subcategories: [
              { name: "Chemadur XF", slug: "chemadur-xf" },
              { name: "Chemadur SP 100", slug: "chemadur-sp-100" },
              { name: "Chema Listo Piso Autonivelante", slug: "chema-listo-piso-autonivelante" },
            ],
          },
          {
            name: "PEGAMENTOS EPÓXICOS",
            slug: "pegamentos-epoxicos",
            subcategories: [
              { name: "Chema Epox Anclaje 31", slug: "chema-epox-anclaje-31" },
              { name: "Chema Epox Adhesivo 32", slug: "chema-epox-adhesivo-32" },
              { name: "Polyepox O Universal", slug: "polyepox-o-universal" },
              { name: "Polyepox Endur BV", slug: "polyepox-endur-bv" },
              { name: "Polyepox Endur Gel", slug: "polyepox-endur-gel" },
              { name: "Polyepox Humedo", slug: "polyepox-humedo" },
            ],
          },
          {
            name: "SELLADO DE JUNTAS",
            slug: "sellado-de-juntas",
            subcategories: [
              { name: "Chema Junta Flexible de Poliuretano", slug: "chema-junta-flexible-poliuretano" },
              { name: "Chema junta Flexible Epoxica", slug: "chema-junta-flexible-epoxica" },
              { name: "Chema Rod", slug: "chema-rod" },
              { name: "Chema Junta Flex 100 FC", slug: "chema-junta-flex-100-fc" },
              { name: "Chema Boom", slug: "chema-boom" },
            ],
          },
          {
            name: "MASILLAS PARA SUPERFICIES",
            slug: "masillas-para-superficies",
            subcategories: [
              { name: "Chemasilla Epoxica", slug: "chemasilla-epoxica" },
              { name: "Chemasilla Acrilica", slug: "chemasilla-acrilica" },
              { name: "Chemasilla SP", slug: "chemasilla-sp" },
              { name: "Chemasilla Drywall", slug: "chemasilla-drywall" },
            ],
          },
          {
            name: "CEMENTO PULIDO DECORATIVO",
            slug: "cemento-pulido-decorativo",
            subcategories: [
              { name: "Decormix", slug: "decormix" },
            ],
          },
          {
            name: "PEGAMENTOS PARA PISO VINILICOS",
            slug: "pegamentos-para-piso-vinilicos",
            subcategories: [
              { name: "Pegavinil Negro", slug: "pegavinil-negro" },
            ],
          },
          { 
            name: "ADHESIVOS PEGATODO", 
            slug: "adhesivos-pegatodo",
            subcategories: [
            { name: "Chema Power Pegatodo", slug: "chema-power-pegatodo" },
          ], 
        },
          { 
            name: "PEGAMENTOS PARA ENCHAPES", 
            slug: "pegamentos-para-enchapes",
            subcategories: [
              { name: "Chemayolic Rapid", slug: "chemayolic-rapid" },
              { name: "Chemayolic Super Formatos", slug: "chemayolic-super-formatos" },
              { name: "Chemayolic Blanco Flexible", slug: "chemayolic-blanco-flexible" },
              { name: "Chemayolic Flexible Gris", slug: "chemayolic-flexible-gris" },
              { name: "Chemayolic Extrafuerte Gris", slug: "chemayolic-extrafuerte-gris" },
              { name: "Chemayolic Extrafuerte Blanco", slug: "chemayolic-extrafuerte-blanco" },
              { name: "Chemayolic Exteriores Pocelanatos y Gres Porcelanicos", slug: "chemayolic-exteriores-porcelanatos-gres" },
              { name: "Chemayolic Ceramicos Porcelanatos y Gres Porcelanicos", slug: "chemayolic-ceramicos-porcelanatos-gres" },
              { name: "Chemayolic Interiores", slug: "chemayolic-interiores" },
              { name: "Chemayolic en Pasta", slug: "chemayolic-en-pasta" },
              { name: "Chemayolic Block de Vidrio", slug: "chemayolic-block-de-vidrio" },
              { name: "Chemayolic Pepelma", slug: "chemayolic-pepelma" }, 
              { name: "Chemayolic en Reparacion", slug: "chemayolic-en-reparacion" },
              
            ],
          },
          {
            name: "PORCELANAS PARA JUNTAS DE ENCHAPES",
            slug: "porcelanas-para-juntas-de-enchapes",
            subcategories: [
              { name: "Porclana Especial para Porcelanatos", slug: "porclana-especial-porcelanatos" },
              { name: "Super Porcelana Chema", slug: "super-porcelana-chema" },
              { name: "Porcelana Especial para Piscina y Baños", slug: "porcelana-especial-piscina-banos" },
              { name: "Super Porcelana Epoxica Antiacida", slug: "super-porcelana-epoxica-antiacida" },
            ],
          },
          { 
            name: "LIMPIADORES DE SUPERFICIES", 
            slug: "limpiadores-de-superficies",
            subcategories: [
              { name: "Chema Clean Multi Usos", slug: "chema-clean-multi-usos" },
              { name: "Chema Clean Desinfectante Antibacterial", slug: "chema-clean-desinfectante-antibacterial" },
              { name: "Chema Clean Porcelanato", slug: "chema-clean-porcelanato" },
              { name: "Chema Clean Pisos Laminado", slug: "chema-clean-pisos-laminado" },
              { name: "Chema Clean Laja y Piedra", slug: "chema-clean-laja-piedra" },
              { name: "Chema Clean Aceros y Cromos", slug: "chema-clean-aceros-cromos" },
              { name: "Chema Remove", slug: "chema-remove" },
            ],
          },
          { 
            name: "SELLADORES DE SUPERFICIES", 
            slug: "selladores-de-superficies",
            subcategories: [
              { name: "Bella Laja Exteriores", slug: "bella-laja-exteriores" },
              { name: "Bella Laja Mate", slug: "bella-laja-mate" },
              { name: "Chema Vista Eco", slug: "chema-vista-eco" },
              { name: "Sellador Chema", slug: "sellador-chema" },
              { name: "Sellador Chema Extrafuerte", slug: "sellador-chema-extrafuerte" },
              { name: "Chema Sella Eco Porcelanatos Brillante", slug: "chema-sella-eco-porcelanatos-brillante" },
              { name: "Chema Sella Piedra Concreto y Laja", slug: "chema-sella-piedra-concreto-laja" },
              { name: "Bella Fragua", slug: "bella-fragua" },
              { name: "Chemaflex", slug: "chemaflex" },
              { name: "Cera Selladora", slug: "cera-selladora" },
              { name: "Chema Caravista", slug: "chema-caravista" },
            ],
          },
          { 
            name: "SELLADORES EPOXICOS", 
            slug: "selladores-epoxicos",
            subcategories: [
              { name: "Polyepox Primer Recubrimiento", slug: "polyepox-primer-recubrimiento" },
              { name: "Chemalkacid", slug: "chemalkacid" },
              { name: "Chema Black", slug: "chema-black" },
            ],
          },
          { 
            name: "TRATAMIENTOS DE LA MADERA", 
            slug: "tratamientos-de-la-madera",
            subcategories: [
              { name: "Chemaderil", slug: "chemaderil" },
              { name: "Chemathane Eco", slug: "chemathane-eco" },
            ],
          },
          { 
            name: "TRATAMIENTO DEL OXIDO", 
            slug: "tratamiento-del-oxido",
            subcategories: [
              { name: "Transformador de Oxido", slug: "transformador-de-oxido" },
              { name: "Removedor de Oxido", slug: "removedor-de-oxido" },
            ],
          },
          { 
            name: "BASES PREVIO AL PINTADO", 
            slug: "bases-previo-al-pintado",
            subcategories: [
              { name: "Sellador Chems Color", slug: "sellador-chems-color" },
              { name: "Pasta Mural Chems Color", slug: "pasta-mural-chems-color" },
              { name: "Chemalit", slug: "chemalit" },
              { name: "Chema Temple", slug: "chema-temple" },
            ],
          },
          { 
            name: "PINTURAS LATEX PARA ACABADOS", 
            slug: "pinturas-latex-para-acabados",
            subcategories: [
              { name: "Chems Termo Aislante", slug: "chems-termo-aislante" },
              { name: "Chems Playa", slug: "chems-playa" },
              { name: "Chems Plus", slug: "chems-plus" },
              { name: "Chems Color", slug: "chems-color" },
              { name: "Chems Temple", slug: "chems-temple" },
            ],
          },
          {
            name: "PINTURAS ESMALTES", 
            slug: "pinturas-esmaltes",
            subcategories: [
              { name: "Bases Zincromato", slug: "bases-zincromato" },
              { name: "Chems Esmalte Sintetico", slug: "chems-esmalte-sintetico" },
              { name: "Chems Trafico", slug: "chems-trafico" },
            ],
          },
          { name: "LINEA CHEMITA", slug: "linea-chemita",
            subcategories: [
              { name: "Chemita Desmold Metal", slug: "chemita-desmold-metal" },
              { name: "Chemita Curador Reforzado", slug: "chemita-curador-reforzado" },
              { name: "Chemita Epox Anclaje 31", slug: "chemita-epox-anclaje-31" },
              { name: "Chemita Epox Adhisivo 32", slug: "chemita-epox-adhisivo-32" },
              { name: "Chemita Gris Interiores", slug: "chemita-gris-interiores" },
              { name: "Chemita Blanco Flexible", slug: "chemita-blanco-flexible" },
              { name: "Chemita Blanco Extrafuerte", slug: "chemita-blanco-extrafuerte" },
              { name: "Chemita Gris Extrafuerte", slug: "chemita-gris-extrafuerte" },
            ],
          },
          { 
            name: "LINEA SANSON", 
            slug: "linea-sanson",
            subcategories: [
              { name: "Sanson Gris Interiores", slug: "sanson-gris-interiores" },
              { name: "Sanson Blanco Flexible", slug: "sanson-blanco-flexible" },
              { name: "Sanson Extrafuerte Blanco", slug: "sanson-extrafuerte-blanco" },
              { name: "Sanson Extrafuerte Gris", slug: "sanson-extrafuerte-gris" },
              { name: "Sanson Fragua", slug: "sanson-fragua" },
            ],
          },
          { 
            name: "LINEA PAGATON", 
            slug: "linea-pagaton",
            subcategories: [
              { name: "Pegaton Gris Interiores", slug: "pegaton-gris-interiores" },
              { name: "Pegaton Blanco Flexible", slug: "pegaton-blanco-flexible" },
            ],
          },
        
        ],
      },
    ],
  },
  {
    name: "Herramientas Manuales",
    slug: "herramientas manuales",
    icon: <Hammer className="h-5 w-6" />,
    color: "category-gradient-1",
    subcategories: [
      { name: "Martillos", slug: "martillos" },
      { name: "Destornilladores", slug: "destornilladores" },
      { name: "Llaves", slug: "llaves" },
      { name: "Alicates", slug: "alicates" },
    ],
  },
  {
    name: "Herramientas inalámbricas",
    slug: "inalámbricas",
    icon: <Hammer className="h-5 w-6" />,
    color: "category-gradient-1",
    subcategories: [
      { name: "Atornilladores Inalámbricos", slug: "impacto" },
      { name: "Taladro Percutor Inalámbricos", slug: "taladro" },
      {name:"Amoladora 4½ Inalambrica Total", slug: "amoladora-inalambrica"},
      {name:"Pistola de Calor Inalambrica", slug: "pistola-calor"},
      
    ],
  },
  {
    name: "Herramientas Eléctricas",
    slug: "herramientas electricas",
    icon: <Wrench className="h-5 w-5" />,
    color: "category-gradient-1",
    subcategories: [
      { name: "Taladros", slug: "taladros" },
      { name: "Sierras", slug: "sierras" },
      { name: "Lijadoras", slug: "lijadoras" },
      { name: "Amoladoras", slug: "amoladoras" },
    ],
  },
  {
    name: "Medición y Nivelación",
    slug: "medicion-nivelacion",
    icon: <Ruler className="h-5 w-5" />,
    color: "category-gradient-1",
    subcategories: [
      { name: "Cintas métricas", slug: "cintas-metricas" },
      { name: "Niveles", slug: "niveles" },
      { name: "Escuadras", slug: "escuadras" },
    ],
  },
  {
    name: "Pinturas y Acabados",
    slug: "pinturas-acabados",
    icon: <Paintbrush className="h-5 w-5" />,
    color: "category-gradient-1",
    subcategories: [
      { name: "Pinturas", slug: "pinturas" },
      { name: "Brochas y Rodillos", slug: "brochas-rodillos" },
      { name: "Barnices", slug: "barnices" },
    ],
  },
  {
    name: "Iluminación",
    slug: "iluminacion",
    icon: <Lightbulb className="h-5 w-5" />,
    color: "category-gradient-1",
    subcategories: [
      { name: "Lámparas", slug: "lamparas" },
      { name: "Focos LED", slug: "focos-led" },
      { name: "Linternas", slug: "linternas" },
    ],
  },
  {
    name: "Seguridad",
    slug: "seguridad",
    icon: <Shield className="h-5 w-5" />,
    color: "category-gradient-1",
    subcategories: [
      { name: "Cascos", slug: "cascos" },
      { name: "Guantes", slug: "guantes" },
      { name: "Gafas protectoras", slug: "gafas-protectoras" },
    ],
  },
];
