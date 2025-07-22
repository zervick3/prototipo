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
import { useSearch } from "@/components/Search"
import ProductMainContent from "./ProductMainContent"



export default function ProductCatalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all")
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { searchValue } = useSearch()
  // Filtrar productos por nombre


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

  // Depuración: ver qué valores llegan
  console.log('selectedCategory:', selectedCategory, 'selectedSubcategory:', selectedSubcategory);

  // Nueva función para manejar selección desde Sidebar
  const handleSidebarSelect = (slug: string, type: "category" | "subcategory", parentCategory?: string) => {
    if (type === "category") {
      setSelectedCategory(slug)
      setSelectedSubcategory("all")
    } else {
      setSelectedSubcategory(slug)
      if (parentCategory) {
        setSelectedCategory(parentCategory)
      }
    }
    setIsSheetOpen(false)
  }

  // Filtrar productos según selección
  const filteredProducts = sortedProducts.filter(product => {
    // Filtro por búsqueda
    if (!product.name.toLowerCase().includes(searchValue.toLowerCase())) return false;

    // Si hay sub-subcategoría seleccionada
    if (selectedSubcategory !== "all" && selectedCategory === "all") {
      // Si la subcategoría seleccionada es una rama principal (Chema o Z Aditivo)
      if (
        selectedSubcategory === "chema" ||
        selectedSubcategory === "z-aditivo"
      ) {
        // Mostrar todos los productos de esa categoría
        return product.category === selectedSubcategory;
      }
      // Para sub-subcategorías, filtro normal
      return product.subcategory === selectedSubcategory;
    }

    // Si hay categoría seleccionada
    if (selectedCategory !== "all") {
      if (selectedCategory === "aditivos") {
        return (
          product.category === "aditivos" ||
          product.category === "chema" ||
          product.category === "z-aditivo"
        );
      }
      if (selectedCategory === "chema" || selectedCategory === "z-aditivo") {
        return product.category === selectedCategory;
      }
      return product.category === selectedCategory;
    }

    return true;
  });

  // Obtener subcategorías únicas de los productos relevantes para la categoría seleccionada
  const subcategories = Array.from(
    new Set(
      products
        .filter(product =>
          selectedCategory === "all"
            ? true
            : product.category === selectedCategory ||
              (selectedCategory === "aditivos" &&
                (product.category === "chema" || product.category === "z-aditivo"))
        )
        .map(product => product.subcategory)
    )
  );

  return (
    <div className="w-full px-2 py-6 mx-auto max-w-screen-lg">
      {/* Botón hamburguesa SOLO en móvil */}
      <div className="flex md:hidden mb-4">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="p-3">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent aria-describedby={undefined} side="left" className="w-[80vw] sm:w-[300px]">
            <SheetTitle className="sr-only">Menú de categorías</SheetTitle>
            <Sidebar
              onSelectCategory={slug => handleSidebarSelect(slug, "category")}
              onSelectSubcategory={(slug, parentCategory) => handleSidebarSelect(slug, "subcategory", parentCategory)}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Layout principal */}
      <div className="md:flex md:space-x-6">
        {/* Sidebar solo en desktop */}
        <div className="hidden md:block w-[240px] sm:w-[300px]">
          <Sidebar
            onSelectCategory={slug => handleSidebarSelect(slug, "category")}
            onSelectSubcategory={(slug, parentCategory) => handleSidebarSelect(slug, "subcategory", parentCategory)}
          />
        </div>

        {/* Contenido principal */}
        <div className="flex-1">
          <ProductMainContent
            filteredProducts={filteredProducts}
            viewMode={viewMode}
            setViewMode={setViewMode}
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedSubcategory={selectedSubcategory}
            setSelectedSubcategory={setSelectedSubcategory}
            subcategories={subcategories}
          />
        </div>
      </div>
    </div>
  )
}