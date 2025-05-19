"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { motion } from "framer-motion"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">

          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="relative h-10 w-10 overflow-hidden rounded-md bg-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Espacio para el logo */}
              <div className="flex h-full w-full items-center justify-center text-lg font-bold text-primary-foreground">
                M
              </div>
            </motion.div>
            <motion.span
              className="text-xl font-bold tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              METALDRYLL
            </motion.span>
          </Link>
        </div>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:px-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar productos..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="border-t p-4 md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar productos..." className="w-full bg-background pl-8" />
          </div>
        </div>
      )}

    </header>
  )
}
