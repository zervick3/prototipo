import type { Product } from "@/lib/types";

export const cintasProducts: Product[] = [
    {
        id: "pro-cinta-1",
        code: "PREC408038",
        name: "Cinta de malla de Fibra de Vidrio′ 63,50mm x 91,44m",
        description: "Las cintas Construtek, son el mejor complemento para otorgar fuerza, resistencia y estética al tratamiento de juntas de una construcción en drywall",
        price: 24.99,
        discount: 5,
        rating: 4.5,
        reviews: 30,
        image: "/cintas/cintavidrio.jpeg",
        category: "materiales",
        subcategory: "cintavidrio",
        isNew: false,
        inStock: true,
        date: "2024-01-10",
        technicalSpecs: {
            Ancho: "63.5mm",
            largo: "91.44m",
            
            
            Material: "Fibra de Vidrio",
            Uso: "Para tapar juntas en paredes de drywall"
        },
        features: [
            "Cuenta con una malla de fibra de vidrio que crea una superficie sin costuras",
            " fácil de ocultar",
            "además es resistente al moho y a la humedad",
        ],
        fichaTecnica: "https://precor.pe/admin_pmp_precor//public/data/product/download/FT%20Masilla%20y%20cintas%20CONSTRUTEK_compressed.pdf202202101619381.pdf",
        tags: ["cinta", "malla", "vidrio"],
        stockDisponible: 100,
        ubicacionAlmacen: "nuevo chimbote - chimbote",
    },
    {
        id: "pro-cinta-2",
        code: "PREC408036",
        name: "CINTA DE PAPEL 5 CM X 75 MT - CONSTRUTEK",
        description: "Las cintas Construtek, son el mejor complemento para otorgar fuerza, resistencia y estética al tratamiento de juntas de una construcción en drywall.",
        price: 24.99,
        discount: 5,
        rating: 4.5,
        reviews: 30,
        image: "/cintas/cintapapel.jpg",
        category: "cintas",
        subcategory: "cintapapel",
        isNew: false,
        inStock: true,
        date: "2024-01-10",
        technicalSpecs: {
            Ancho: "50.0mm",
            largo: "70.00m",
            
            
            Material: "papel",
            Uso: "Para unir materiales, reparar grietas, hendiduras, en construcción de drywall."
        },
        features: [
            "Papel microperforado resistente.",
            "Papel microperforado resistente.",
            "Fácil de aplicar y fijar",
        ],
        fichaTecnica: "https://precor.pe/admin_pmp_precor//public/data/product/download/FT%20Masilla%20y%20cintas%20CONSTRUTEK_compressed.pdf202202101619381.pdf",
        tags: ["cinta", "malla", "vidrio" , "papel"],
        stockDisponible: 100,
        ubicacionAlmacen: "nuevo chimbote - chimbote",
    },
    {
        id: "pro-cinta-3",
        code: "PREC408039",
        name: "CINTA METALICA 30 MT FLEXIBLE - CONSTRUCTEK",
        description: "Las cintas Construtek, son el mejor complemento para otorgar fuerza, resistencia y estética al tratamiento de juntas de una construcción en drywall.",
        price: 24.99,
        discount: 5,
        rating: 4.5,
        reviews: 30,
        image: "/cintas/cintametalica.jpeg",
        category: "cintas",
        subcategory: "cintametalica",
        isNew: false,
        inStock: true,
        date: "2024-01-10",
        technicalSpecs: {
            Ancho: "52.0mm",
            largo: "30.00m",
            
            
            Material: "papel y aluminio",
            Uso: "Para unir materiales, reparar grietas, hendiduras, en construcción de drywall."
        },
        features: [
            "Papel microperforado resistente.",
        
            "Fácil de aplicar y fijar",
        ],
        fichaTecnica: "https://precor.pe/admin_pmp_precor//public/data/product/download/FT%20Masilla%20y%20cintas%20CONSTRUTEK_compressed.pdf202202101619381.pdf",
        tags: ["cinta", "metalica", "flex" , "papel"],
        stockDisponible: 100,
        ubicacionAlmacen: "nuevo chimbote - chimbote",
    },
];
