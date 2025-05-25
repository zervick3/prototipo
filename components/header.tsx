"use client"
import { useSearch } from "@/components/Search"
import { useState } from "react"
import Link from "next/link"
import { Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { motion } from "framer-motion"
import { products } from "@/lib/data"
export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { searchValue, setSearchValue } = useSearch()
  // Filtrar productos por nombre
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchValue.toLowerCase()) && searchValue.length > 0
  )





  return (
    <header className="sticky top-0 z-40 border-b border-primaryy bg-secondary shadow-md">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="relative h-10 w-auto max-w-[140px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo22.png"
              alt="Logo Metaldryll"
              width={140}
              height={40}
              className="object-contain"
              style={{ height: "40px", width: "auto" }}
            />
          </motion.div>
        </Link>

        {/* Buscador en desktop */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:px-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-primaryy" />
            <Input
              type="search"
              placeholder="Buscar productos..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              className="w-full rounded-full border border-primaryy bg-white pl-10  text-secondaryy shadow-sm focus:ring-2 focus:ring-primaryy"
            />
          </div>
        </div>

        {/* Botones derecha */}
        <div className="flex items-center gap-2">
          {/* Buscador mobile */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primaryy text-primaryy hover:bg-primaryy/10 md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>

          {/* Cuenta */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primaryy text-primaryy hover:bg-primaryy/10"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/*/ Buscador expandido en mobile */}
      {isSearchOpen && (
        <div className="border-t border-primaryy bg-white p-4 md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 h-5 w-5 text-primaryy" />
            <Input
              type="search"
              placeholder="Buscar productos..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              className="w-full rounded-full border border-primaryy pl-10 text-secondaryy shadow-sm focus:ring-primaryy focus:ring-primaryy"
            />


          </div>
        </div>
      )}
    </header>
  )
}
