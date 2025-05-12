"use client"

import { useState } from "react"
import { Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductGrid from "./product-grid"
import ProductList from "./product-list"
import Sidebar from "./sidebar" // Importamos el Sidebar
import { products } from "@/lib/data" // Asegúrate de que tus productos estén correctamente definidos en este archivo.

export default function ProductCatalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null) // Usamos null en lugar de cadena vacía

  // Función para ordenar productos
  const getSortedProducts = () => {
    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price)
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price)
      case "newest":
        return [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      case "featured":
      default:
        return products
    }
  }

  const sortedProducts = getSortedProducts()

  // Filtrar productos por subcategoría seleccionada
  const filteredProducts = sortedProducts.filter(product =>
    selectedSubcategory && selectedSubcategory !== "all"
      ? product.subcategory === selectedSubcategory
      : true
  )

  // Obtener las subcategorías únicas de los productos
  const subcategories = Array.from(new Set(products.map((product) => product.subcategory)))

  return (
    <div className="flex">
      {/* Sidebar para seleccionar subcategorías */}
      <Sidebar onSelectSubcategory={(slug) => setSelectedSubcategory(slug)} />

      <div className="flex-1 space-y-6">
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

            {/* Select para elegir subcategoría */}
            <Select value={selectedSubcategory ?? undefined} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por subcategoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem> {/* Usamos "all" en lugar de null */}
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
    </div>
  )
}