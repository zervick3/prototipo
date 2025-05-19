// dataCategoria.ts
import type { Category, Subcategory } from "./types";
import { Hammer,Layers2,Cuboid,LibraryBig, Wrench, Ruler, Paintbrush, Lightbulb, Shield } from "lucide-react"; // Asegúrate de importar los íconos necesarios

export const categories: Category[] = [
    {
        name: "Placas De Drywall",
        slug: "Drywall",
        icon: <Layers2 className="h-5 w-5" />,
        color: "category-gradient-6",
        subcategories: [
            { name: "Placas de Yesos", slug: "placas" },
            { name: "Superboard", slug: "superboard" },
        ],
        
    },
    {
        name: "Perfiles Metalicos",
        slug: "Drywallperfiles",
        icon: <LibraryBig className="h-5 w-5" />,
        color: "category-gradient-6",
        subcategories: [
            { name: "Parantes", slug: "Parante" },
            { name: "Rieles", slug: "riel" },
            { name: "Omega", slug: "omega" },
            { name: "Esquineros", slug: "esquinero" },
        ],
        
    },
    {
        name: "Cintas Para Drywall",
        slug: "cintas",
        icon: <LibraryBig className="h-5 w-5" />,
        color: "category-gradient-6",
        subcategories: [
            { name: "Cinta malla de vidrio 2'", slug: "cintavidrio" },
            { name: "Cinta papel", slug: "cintapapel" },
            { name: "Cinta Metalica", slug: "cintametalica" },
            
        ],
        
    },
    {
        name: "Masillas Para Drywall",
        slug: "masillas",
        icon: <Cuboid className="h-5 w-5" />,
        color: "category-gradient-6",
        subcategories: [
            { name: "Masilla Gyplac 20kg", slug: "masillas" },
            { name: "Masila Balde Gyplac 27kg ", slug: "masillas" },
            { name: "Masilla 5kg", slug: "masillas" },
            { name: "Masilla en Polvo 25kg Gyplac", slug: "masillas" },
            { name: "Masilla en Polvo 25kg Volcan", slug: "masillas" },
            { name: "Masilla Volcan 20kg", slug: "masillas" },
            { name: "Masilla Construtek 20kg", slug: "masillas" },
            
        ],
        
    },
    {
        name: "Cielo Raso",
        slug: "Cielo Raso",
        icon: <Hammer className="h-5 w-5" />,
        color: "category-gradient-3",
        subcategories: [
            { name: "Susp Tee Principales", slug: "principales" },
            { name: "Susp Tee Secundarios", slug: "secundarios" },
            { name: "Susp Tee Terciaria", slug: "terciaria" },
            { name: "Angulo Susp Perimetral", slug: "angulo" },
            { name: "Alambre", slug: "alambre" },
        ],
    },
    {
        name: "Herramientas Manuales",
        slug: "herramientas-manuales",
        icon: <Hammer className="h-5 w-5" />,
        color: "category-gradient-1",
        subcategories: [
            { name: "Martillos", slug: "martillos" },
            { name: "Destornilladores", slug: "destornilladores" },
            { name: "Llaves", slug: "llaves" },
            { name: "Alicates", slug: "alicates" },
        ],
    },
    {
        name: "Herramientas Eléctricas",
        slug: "herramientas-electricas",
        icon: <Wrench className="h-5 w-5" />,
        color: "category-gradient-2",
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
        color: "category-gradient-3",
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
        color: "category-gradient-4",
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
        color: "category-gradient-5",
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
        color: "category-gradient-6",
        subcategories: [
            { name: "Cascos", slug: "cascos" },
            { name: "Guantes", slug: "guantes" },
            { name: "Gafas protectoras", slug: "gafas-protectoras" },
        ],
    },
];
