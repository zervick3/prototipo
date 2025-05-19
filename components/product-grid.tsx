"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star, Info, Tag, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { Product } from "@/lib/types"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
      {products.map((product, index) => (
        <motion.div
          key={`${product.code}-${index}`} {...product}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -5 }}
          className="card-3d-effect w-full max-w-xs mx-auto"
        >
          <Card className="w-full h-full overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden">
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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.1 }}
                >
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    <Tag className="mr-1 h-3 w-3" /> {product.code}
                  </Badge>
                </motion.div>
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

            <CardContent className="p-4">
              <div className="mb-2 flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                  />
                ))}
                <span className="ml-1 text-xs text-muted-foreground">({product.reviews})</span>
              </div>

              <Link href={`/producto/${product.id}`} className="group">
                <h3 className="line-clamp-2 font-medium group-hover:text-primary group-hover:underline transition-colors">
                  {product.name}
                </h3>
              </Link>

              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description.split(".")[0]}.</p>

              <div className="mt-3 flex flex-wrap gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" className="h-7 rounded-full">
                        <Info className="h-3.5 w-3.5 mr-1" /> Ficha técnica
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <div className="space-y-1 text-xs">
                        <h4 className="font-semibold">Especificaciones:</h4>
                        <ul className="list-disc pl-4 space-y-0.5">
                          {Object.entries(product.technicalSpecs)
                            .slice(0, 4)
                            .map(([key, value]) => (
                              <li key={key}>
                                <span className="font-medium">{key}:</span> {value}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <motion.span
                  className="text-xl font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ${product.price.toFixed(2)}
                </motion.span>
                {product.discount > 0 && (
                  <motion.span
                    className="text-sm text-muted-foreground line-through"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                  </motion.span>
                )}
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Link href={`/producto/${product.id}`} className="w-full">
                <Button className="w-full shine-effect">Ver detalles</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
