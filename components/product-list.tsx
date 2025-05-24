"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star, Tag, Zap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Product } from "@/lib/types"

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="space-y-6">
      {products.map((product, index) => (
        <motion.div
          key={`${product.code}-${index}`} {...product}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ x: 5 }}
        >
          <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-48 w-full sm:h-auto sm:w-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute left-2 top-2 flex flex-col gap-2">
                  {product.isNew && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <Badge className="bg-green-500 hover:bg-green-600">
                        <Zap className="mr-1 h-3 w-3" /> Nuevo
                      </Badge>
                    </motion.div>
                  )}
                </div>
                {product.discount > 0 && (
                  <motion.div
                    className="absolute right-2 top-2"
                    initial={{ rotate: -10, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <Badge className="bg-red-500 hover:bg-red-600 px-2 py-1 text-sm font-bold">
                      -{product.discount}%
                    </Badge>
                  </motion.div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="outline" className="bg-background/80">
                    <Tag className="mr-1 h-3 w-3" /> {product.code}
                  </Badge>

                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                      />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <Link href={`/producto/${product.id}`} className="group">
                  <h3 className="text-lg font-medium group-hover:text-primary group-hover:underline transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <p className="mt-1 text-sm text-muted-foreground">{product.description.split(".")[0]}.</p>

                <Accordion type="single" collapsible className="mt-2 w-full">
                  <AccordionItem value="specs" className="border-b-0">
                    <AccordionTrigger className="py-2 text-sm font-medium">Ficha técnica</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                        {Object.entries(product.technicalSpecs)
                          .slice(0, 6)
                          .map(([key, value]) => (
                            <div key={key} className="flex items-start gap-1">
                              <span className="font-medium">{key}:</span> {value}
                            </div>
                          ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="text-xl font-bold"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                          {/* PRecio del preducto */}
                     {/* ${product.price.toFixed(2)} */} 
                    </motion.span>
                    {product.discount > 0 && (
                      <motion.span
                        className="text-sm text-muted-foreground line-through"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {/* Precio original con descuento */}
                       {/* ${(product.price / (1 - product.discount / 100)).toFixed(2)}*/}
                      </motion.span>
                    )}
                  </div>

                  <Link href={`/producto/${product.id}`}>
                    <Button className="shine-effect gap-1 bg-primaryy text-white hover:bg-primaryy/90 hover:text-terciaryy transition-colors">
                      Ver detalles
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
