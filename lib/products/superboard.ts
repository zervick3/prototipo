import type { Product } from "@/lib/types";

export const superboardProducts: Product[] = [
    {
        id: "2",
        code: "PL-001",
        name: "Placa de Acero Inoxidable 20x20cm",
        description: "Placa resistente a la corrosión, ideal para proyectos industriales y domésticos.",
        price: 24.99,
        discount: 5,
        rating: 4.5,
        reviews: 30,
        image: "/placa.svg",
        category: "materiales",
        subcategory: "placas",
        isNew: false,
        inStock: true,
        date: "2024-01-10",
        technicalSpecs: {
            Material: "Acero inoxidable",
            Espesor: "2mm",
            Dimensiones: "20x20 cm",
        },
        features: [
            "Alta resistencia al óxido",
            "Fácil de cortar y soldar",
            "Ideal para exteriores",
        ],
        fichaTecnica: "",
        tags: [],
        stockDisponible: 0,
        ubicacionAlmacen: ""
    },
];
