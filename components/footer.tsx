import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">FerreMax Pro</h3>
            <p className="text-sm text-muted-foreground">
              Ofrecemos las mejores herramientas y productos de ferretería para profesionales y aficionados al
              bricolaje.
            </p>
            <div className="mt-4 flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Política de Envíos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Av. Principal 123, Ciudad Industrial, 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@ferremaxpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FerreMax Pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
