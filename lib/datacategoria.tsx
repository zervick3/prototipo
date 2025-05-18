// dataCategoria.ts
import type { Category, Subcategory } from "./types";
import { Hammer, Wrench, Ruler, Paintbrush, Lightbulb, Shield } from "lucide-react"; // Asegúrate de importar los íconos necesarios

export const categories: Category[] = [
    {
        name: "Drywall",
        slug: "Drywall",
        icon: <Hammer className="h-5 w-5" />,
        color: "category-gradient-6",
        subcategories: [
            { name: "Placas de Yesos", slug: "placas" },
            { name: "Parantes", slug: "Parante" },
            { name: "Rieles", slug: "riel" },
            { name: "Omega", slug: "omega" },
            { name: "Esquineros", slug: "esquinero" },
            { name: "Superboard", slug: "superboard" },
            { name: "Masillas", slug: "masillas" },
            { name: "Cintas", slug: "cintas" },
        ],
    },
    {
        name: "Cielo Raso",
        slug: "Cielo Raso",
        icon: <Hammer className="h-5 w-5" />,
        color: "category-gradient-3",
        subcategories: [
            { name: "Principales", slug: "principales" },
            { name: "Secundarios", slug: "secundarios" },
            { name: "Terciaria", slug: "terciaria" },
            { name: "Angulo perimetral", slug: "angulo" },
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
