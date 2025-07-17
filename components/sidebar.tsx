"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"
import { categories } from "@/lib/datacategoria"

interface SidebarProps {
  onSelectCategory?: (slug: string) => void
  onSelectSubcategory?: (slug: string) => void
}

// Función recursiva para renderizar subcategorías de cualquier nivel
function RenderSubcategories({
  subcategories,
  level = 1,
  openSubcategories,
  toggle,
  onSelectSubcategory,
}: {
  subcategories: any[];
  level?: number;
  openSubcategories: string[];
  toggle: (slug: string, isSub: boolean) => void;
  onSelectSubcategory: (slug: string) => void;
}) {
  return (
    <div className={`ml-${level * 2} space-y-1`}>
      {subcategories.map((subcat) => (
        <div key={subcat.slug} className="space-y-1">
          <Button
            variant="ghost"
            className={cn(
              `w-full justify-start pl-${level * 2} font-normal text-black transition-colors`,
              openSubcategories.includes(subcat.slug)
                ? "bg-primaryy text-terciaryy"
                : "hover:bg-primaryy hover:text-terciaryy "
            )}
            onClick={() =>
              subcat.subcategories
                ? toggle(subcat.slug, true)
                : onSelectSubcategory(subcat.slug)
            }
          >
            {subcat.name}
            {subcat.subcategories ? (
              openSubcategories.includes(subcat.slug) ? (
                <ChevronDown className="ml-auto h-4 w-4 " />
              ) : (
                <ChevronRight className="ml-auto h-4 w-4" />
              )
            ) : null}
          </Button>
          <AnimatePresence>
            {subcat.subcategories &&
              openSubcategories.includes(subcat.slug) && (
                <motion.div
                  className="space-y-1 pt-1"
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
    <aside className="w-full md:w-64 md:shrink-0 border-r bg-gradient-to-b from-background to-muted/30">
      <ScrollArea className="h-full py-4">
        <div className="px-3 py-2">
          <motion.h2
            className="mb-4 px-4 text-lg font-semibold tracking-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Categorías
          </motion.h2>

          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.slug} className="space-y-1">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2 font-medium  text-white hover:text-white",
                    category.color,
                    openCategories.includes(category.slug) ? "opacity-100" : "opacity-90"
                  )}
                  onClick={() => {
                    onSelectCategory(category.slug)
                    toggle(category.slug)
                  }}
                >
                  <div className="bg-white/20 p-1 rounded-md">{category.icon}</div>
                  {category.name}
                  {openCategories.includes(category.slug) ? (
                    <ChevronDown className="ml-auto h-4 w-4" />
                  ) : (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  )}
                </Button>

                {openCategories.includes(category.slug) && (
                  <motion.div
                    className="ml-4 space-y-1"
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