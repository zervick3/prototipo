"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"
import { categories } from "@/lib/datacategoria"
import React from "react"

interface SidebarProps {
  onSelectCategory?: (slug: string) => void
  onSelectSubcategory?: (slug: string, parentCategory?: string) => void
}

// Función recursiva para renderizar subcategorías de cualquier nivel
function RenderSubcategories({
  subcategories,
  level = 1,
  openSubcategories,
  toggle,
  onSelectSubcategory,
  parentCategory
}: {
  subcategories: any[];
  level?: number;
  openSubcategories: string[];
  toggle: (slug: string, isSub: boolean) => void;
  onSelectSubcategory: (slug: string, parentCategory?: string) => void;
  parentCategory?: string;
}) {
  // Ordenar subcategorías alfabéticamente
  const sortedSubcategories = [...subcategories].sort((a, b) => 
    a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
  );

  return (
    <div className={`ml-${level * 2} space-y-2`}>
      {sortedSubcategories.map((subcat, index) => (
        <div key={subcat.slug} className="space-y-1">
          <Button
            variant="ghost"
            className={cn(
              `w-full justify-start pl-${level * 2} font-normal transition-all duration-200 whitespace-normal break-words text-left rounded-md`,
              level === 1 
                ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-l-2 border-transparent hover:border-blue-300" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800 text-sm",
              openSubcategories.includes(subcat.slug)
                ? level === 1 
                  ? "bg-blue-100 text-blue-800 border-l-2 border-blue-500 font-medium" 
                  : "bg-gray-100 text-gray-800 font-medium"
                : ""
            )}
            onClick={() =>
              subcat.subcategories
                ? toggle(subcat.slug, true)
                : (console.log('Sidebar seleccionó subcategoría:', subcat.slug), onSelectSubcategory(subcat.slug, parentCategory))
            }
          >
            <div className="flex items-center w-full">
              <span className="flex-1">{subcat.name}</span>
              {subcat.subcategories ? (
                openSubcategories.includes(subcat.slug) ? (
                  <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="ml-2 h-4 w-4 text-gray-500" />
                )
              ) : null}
            </div>
          </Button>
          
          {/* Separador visual entre subcategorías del mismo nivel */}
          {index < sortedSubcategories.length - 1 && (
            <div className={`ml-${level * 2} h-px bg-gray-200 mx-2`} />
          )}
          
          <AnimatePresence>
            {subcat.subcategories &&
              openSubcategories.includes(subcat.slug) && (
                <motion.div
                  className="space-y-1 pt-2 border-l-2 border-gray-200 ml-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RenderSubcategories
                    subcategories={subcat.subcategories}
                    level={level + 1}
                    openSubcategories={openSubcategories}
                    toggle={toggle}
                    onSelectSubcategory={onSelectSubcategory}
                    parentCategory={parentCategory}
                  />
                </motion.div>
              )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function Sidebar({ onSelectCategory = () => {}, onSelectSubcategory = () => {} }: SidebarProps) {
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [openSubcategories, setOpenSubcategories] = useState<string[]>([])

  useEffect(() => {
    if (categories.length > 0 && openCategories.length === 0) {
      setOpenCategories([categories[0].slug])
    }
  }, [])

  const toggle = (slug: string, isSub: boolean = false) => {
    const setter = isSub ? setOpenSubcategories : setOpenCategories
    const state = isSub ? openSubcategories : openCategories

    setter(state.includes(slug) ? state.filter((s) => s !== slug) : [...state, slug])
  }

  return (
    <aside className="w-full md:w-80 md:shrink-0 border-r border-gray-200 bg-gradient-to-b from-white to-gray-50/30 shadow-sm max-h-screen overflow-y-auto">
      <ScrollArea className="h-[70vh] md:h-full py-6">
        <div className="px-4 py-2">
          <motion.h2
            className="mb-6 px-2 text-xl font-bold tracking-tight text-gray-800 border-b border-gray-200 pb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Categorías
          </motion.h2>

          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.slug} className="space-y-2">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 font-semibold text-white hover:text-white transition-all duration-200 rounded-lg shadow-sm",
                    category.color,
                    openCategories.includes(category.slug) ? "opacity-100 shadow-md" : "opacity-90 hover:opacity-100"
                  )}
                  onClick={() => {
                    onSelectCategory(category.slug)
                    toggle(category.slug)
                  }}
                >
                  <div className="bg-white/20 p-1.5 rounded-md">
                    {category.icon}
                  </div>
                  <span className="flex-1 text-left">{category.name}</span>
                  {openCategories.includes(category.slug) ? (
                    <ChevronDown className="h-4 w-4 text-white/80" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-white/80" />
                  )}
                </Button>

                {openCategories.includes(category.slug) && (
                  <motion.div
                    className="ml-4 space-y-2 border-l-2 border-gray-300 pl-4 bg-gray-50/50 rounded-r-lg py-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.subcategories && (
                      <RenderSubcategories
                        subcategories={category.subcategories}
                        openSubcategories={openSubcategories}
                        toggle={toggle}
                        onSelectSubcategory={onSelectSubcategory}
                        parentCategory={category.slug}
                      />
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}