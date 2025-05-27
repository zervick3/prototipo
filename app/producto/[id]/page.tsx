"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Star, Tag, Zap, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "@/lib/data"

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const product = products.find(p => p.id === params.id);
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="container flex flex-col items-center justify-center py-20">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <p className="mt-2 text-muted-foreground">El producto que buscas no existe o ha sido eliminado.</p>
        <Button className="mt-4 " onClick={() => router.push("/")}>
          Volver al catálogo
        </Button>
      </div>
    )
  }

  // Simular múltiples imágenes para el producto
  const productImages = product.images && product.images.length > 0
    ? product.images
    : [
      product.image,
      "/logoicono.ico",
      "/22.jpg",
    ];

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Button variant="ghost" className="mb-6 flex items-center  gap-1" onClick={() => router.push("/")}>
        <ChevronLeft className="h-4 w-4" />
        Volver al catálogo
      </Button>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Galería de imágenes */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              <Image
                src={productImages[activeImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="absolute left-3 top-3 flex flex-col gap-2">
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
                className="absolute right-3 top-3"
                initial={{ rotate: -10, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <Badge className="bg-red-500 hover:bg-red-600 px-2 py-1 text-sm font-bold">-{product.discount}%</Badge>
              </motion.div>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {productImages.map((img, index) => (
              <motion.button
                key={index}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ${activeImage === index ? "ring-2 ring-primaryy" : ""
                  }`}
                onClick={() => setActiveImage(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={img || "/placeholder.svg"} alt={`Vista ${index + 1}`} fill className="object-cover" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reseñas)</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

            <div className="mt-4 flex items-center gap-3">
              <motion.span
                className="text-3xl font-bold text-primaryy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/*  ${product.price.toFixed(2)}*/}
              </motion.span>
              {product.discount > 0 && (
                <motion.span
                  className="text-xl text-muted-foreground line-through"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {/*    ${(product.price / (1 - product.discount / 100)).toFixed(2)}*/}
                </motion.span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
              <Info className="h-3.5 w-3.5" />
              {product.inStock ? "En stock" : "Agotado"}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
              <Tag className="h-3.5 w-3.5" />
              {product.category
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Badge>
          </div>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="specs">Especificaciones</TabsTrigger>
              <TabsTrigger value="features">Características</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4 space-y-4">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="specs" className="mt-4">
              <div className="rounded-lg border p-4">
                <h3 className="mb-3 font-semibold">Ficha Técnica</h3>
                <div className="grid grid-cols-1 gap-y-2 text-sm md:grid-cols-2 md:gap-x-4">
                  {Object.entries(product.technicalSpecs).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-2 border-b pb-2">
                      <span className="font-medium">{key}:</span> {value}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <div className="rounded-lg border p-4">
                <h3 className="mb-3 font-semibold">Características Principales</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/" className="w-full">
              <Button className="w-full shine-effect  bg-primaryy text-white hover:bg-primaryy/90 hover:text-terciaryy transition-colors" size="lg">
                Ver productos similares
              </Button>
            </Link>
          </div>

          <div className="rounded-lg border border-primaryy bg-muted/40 p-4">
            <h3 className="mb-2 font-semibold">Información adicional</h3>
            <p className="text-sm text-muted-foreground">
              Este producto cuenta con {product.technicalSpecs.Garantía} de garantía del fabricante. Consulta nuestras
              políticas de devolución para más información.
            </p>
          </div>
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Productos relacionados</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card-3d-effect"
              >
                <Link href={`/producto/${relatedProduct.id}`}>
                  <div className="group rounded-lg border bg-card p-2 transition-all duration-300 hover:border-primaryy hover:shadow-md">
                    <div className="relative aspect-square overflow-hidden rounded-md bg-muted">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {relatedProduct.discount > 0 && (
                        <Badge className="absolute right-2 top-2 bg-red-500">-{relatedProduct.discount}%</Badge>
                      )}
                    </div>
                    <div className="p-2">
                      <h3 className="line-clamp-1 font-medium group-hover:text-primaryy">{relatedProduct.name}</h3>
                      <div className="mt-1 flex items-center justify-between">
                        {/* <span className="font-bold">${relatedProduct.price.toFixed(2)}</span>*/}
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < relatedProduct.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}
