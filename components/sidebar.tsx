"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Hammer, Wrench, Ruler, Paintbrush, Lightbulb, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"

interface Category {
  name: string
  slug: string
  icon: React.ReactNode
  color: string
  subcategories?: { name: string; slug: string }[]
}

export default function Sidebar() {
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const categories: Category[] = [
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
  ]

  // Abrir la primera categoría por defecto
  useEffect(() => {
    if (categories.length > 0 && openCategories.length === 0) {
      setOpenCategories([categories[0].slug])
    }
  }, [])

  const toggleCategory = (slug: string) => {
    setOpenCategories((prev) => (prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]))
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
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                className="space-y-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCategory(category.slug)}
                onHoverEnd={() => setHoveredCategory(null)}
              >
                <motion.div
                  className={`rounded-lg overflow-hidden ${hoveredCategory === category.slug ? "ring-2 ring-primary/50" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-2 font-medium text-white",
                      category.color,
                      openCategories.includes(category.slug) ? "opacity-100" : "opacity-90",
                    )}
                    onClick={() => toggleCategory(category.slug)}
                  >
                    <div className="bg-white/20 p-1 rounded-md">{category.icon}</div>
                    {category.name}
                    {category.subcategories &&
                      (openCategories.includes(category.slug) ? (
                        <ChevronDown className="ml-auto h-4 w-4" />
                      ) : (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      ))}
                  </Button>
                </motion.div>

                <AnimatePresence>
                  {category.subcategories && openCategories.includes(category.slug) && (
                    <motion.div
                      className="ml-6 space-y-1 pt-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.subcategories.map((subcategory, subIndex) => (
                        <motion.div
                          key={subcategory.slug}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <Button variant="ghost" asChild className="w-full justify-start pl-6 font-normal">
                            <Link href={`/categoria/${category.slug}/${subcategory.slug}`}>{subcategory.name}</Link>
                          </Button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
