import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, } from "lucide-react"
import { TikTokIcon } from "./TikTokIcon"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg text-terciaryy font-semibold">METALDRYLL</h3>
            <p className="text-sm text-muted-foreground">
              Tu ferretería especializada en sistemas de construcción en seco. Ofrecemos productos de calidad, asesoramiento técnico y los mejores precios del mercado. 
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=100055747674115" 
                 className="text-muted-foreground hover:text-foreground" 
                 target="_blank"
                 rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
               </a>
              <a href="https://www.instagram.com/metaldryll/"
                 className="text-muted-foreground hover:text-foreground" 
                 target="_blank"
                 rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@metaldryll"
                 className="text-muted-foreground hover:text-foreground" 
                 target="_blank"
                 rel="noopener noreferrer">
                <TikTokIcon className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </a>
            
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-terciaryy">Enlaces Rápidos</h3>
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
            <h3 className="mb-4 text-lg font-semibold text-terciaryy">Información</h3>
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
            <h3 className="mb-4 text-lg font-semibold text-terciaryy">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">19 Marzo Mz K Lote 10, Nuevo Chimbote</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Av. Buenos Aires 646, Chimbote</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+51 918 968 939</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+51 963 019 545</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+51 933 406 590</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground"> administracion@metaldryll.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground ">
          <p>&copy; {new Date().getFullYear()} METALDRYLL. Todos los derechos reservados.  Developer - <a href="https://ervic-linares.vercel.app/" target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-foreground">Ervic Linares   </a></p>
        </div>
      </div>
    </footer>
  )
}
