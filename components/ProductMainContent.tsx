import { Product } from "@/lib/types"
import ProductGrid from "./product-grid"
import ProductList from "./product-list"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"

interface Props {
    filteredProducts: Product[]
    viewMode: "grid" | "list"
    setViewMode: (mode: "grid" | "list") => void
    sortBy: string
    setSortBy: (value: string) => void
    selectedSubcategory: string
    setSelectedSubcategory: (value: string) => void
    subcategories: string[]
}

export default function ProductMainContent({
    filteredProducts,
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
    selectedSubcategory,
    setSelectedSubcategory,
    subcategories,
}: Props) {
    return (
        <div className="flex-1 space-y-6 px-2 py-6 mx-auto max-w-screen-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Catálogo de Productos</h1>
                <div className="flex items-center gap-2">
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Ordenar por" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">Destacados</SelectItem>
                            <SelectItem value="newest">Más recientes</SelectItem>
                            <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                            <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filtrar por subcategoría" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas</SelectItem>
                            {subcategories.map((subcategory) => (
                                <SelectItem key={subcategory} value={subcategory}>
                                    {subcategory}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="flex items-center rounded-md border">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`rounded-r-none ${viewMode === "grid" ? "bg-muted" : ""}`}
                            onClick={() => setViewMode("grid")}
                        >
                            <Grid className="h-4 w-4" />
                            <span className="sr-only">Vista de cuadrícula</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`rounded-l-none ${viewMode === "list" ? "bg-muted" : ""}`}
                            onClick={() => setViewMode("list")}
                        >
                            <List className="h-4 w-4" />
                            <span className="sr-only">Vista de lista</span>
                        </Button>
                    </div>
                </div>
            </div>
            {/* Mostrar productos filtrados */}
            {viewMode === "grid" ? (
                <ProductGrid products={filteredProducts} />
            ) : (
                <ProductList products={filteredProducts} />
            )}
        </div>
    )
}