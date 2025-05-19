"use client"

import { useState } from "react"
import { Menu, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductGrid from "./product-grid"
import ProductList from "./product-list"
import Sidebar from "./sidebar"
import { products } from "@/lib/data"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function ProductCatalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all")
  const [isSheetOpen, setIsSheetOpen] = useState(false)

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
    <div className=" flex space-y-6 px-2 py-6 w-full">
      {/* Sidebar para pantallas grandes */}
      <div className="hidden md:block w-[240px] sm:w-[300px]">
        <Sidebar onSelectSubcategory={(slug) => setSelectedSubcategory(slug)} />
      </div>

      {/* Sidebar para pantallas móviles */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden p-3">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[80vw] sm:w-[300px]">
          <SheetTitle className="sr-only">Menú de categorías</SheetTitle>
          <Sidebar onSelectSubcategory={(slug) => { setSelectedSubcategory(slug); setIsSheetOpen(false); }} />
        </SheetContent>
      </Sheet>

      {/* Contenido principal */}
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
    </div>
  )
}