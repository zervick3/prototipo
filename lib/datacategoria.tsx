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
          },{
            name: "Morteros de Nivelación",
            slug: "morteros-nivelacion",
            
           subcategories: [
          { name: "Z Nivelante T30", slug: "znivelante" },
         
        ]
          },{
            name: "Endurecedor de piso ",
            slug: "endurecedor-piso",
            
           subcategories: [
          { name: "Z Piso", slug: "zpiso" },
         
        ]
          },{
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
          },{
            name: "Acelerantes",
            slug: "acelerantes",
           subcategories: [
          { name: "Z Fragua #3", slug: "zfragua3" },
          { name: "Z Fragua #5", slug: "zfragua5" },
          
         
              ]
          },{

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
