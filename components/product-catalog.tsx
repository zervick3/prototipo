"use client"

import { useState } from "react"
import { Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductGrid from "./product-grid"
import ProductList from "./product-list"
import { products } from "@/lib/data"

export default function ProductCatalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")

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

  return (
    <div className="space-y-6">
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

      {viewMode === "grid" ? <ProductGrid products={sortedProducts} /> : <ProductList products={sortedProducts} />}
    </div>
  )
}
