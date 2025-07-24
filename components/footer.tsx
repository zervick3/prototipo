import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, } from "lucide-react"
import { TikTokIcon } from "./TikTokIcon"
import Image from "next/image";

// Sección de marcas profesionales
function BrandSection() {
  // Lista de marcas (puedes agregar/quitar según tus necesidades)
  const brands = [
    { name: "Sika", img: "/marcas/sika.png" },
    { name: "Chema", img: "/marcas/chema.png" },
    { name: "Superboard", img: "/marcas/superboard.webp" },
    { name: "Volcan", img: "/marcas/volcan.png" },
    { name: "Total Tools", img: "/marcas/total.png" },
    { name: "Klar", img: "/marcas/klar.png" },
    { name: "Gyplac", img: "/marcas/gyplac.png" },
    {name:"Construtek", img:"/marcas/construtek.png"},
    {name:"Tupemesa", img:"/marcas/tupemesa.png"},
    {name:"Truper", img:"/marcas/truper.avif"},
    {name:"Dewalt", img:"/marcas/DeWalt.png"},
    {name:"Eternit", img:"/marcas/eternit-1.svg"},
    {name:"Wade", img:"/marcas/Weber_Logo_CMYK.jpg"},
    {name:"Norton", img:"/marcas/norton.svg"},
    {name:"Ecotec", img:"/marcas/ecotec.webp"},
    {name:"tuboplast", img:"/marcas/tuboplast.png"},
    {name:"America", img:"/marcas/America-1.png"},
    {name:"nicoll", img:"/marcas/nicoll.png"},
    
    // ...agrega más marcas aquí
  ];
  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-8 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-6 text-center tracking-wide uppercase">Trabajamos con las mejores marcas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 h-[90px] transition hover:shadow-lg border border-gray-100"
            >
              <Image
                src={brand.img}
                alt={brand.name}
                width={140}
                height={70}
                className="object-contain h-[70px] w-[140px] mx-auto"
                style={{ maxWidth: "140px", maxHeight: "70px" }}
                loading="lazy"
                quality={90}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <>
      <BrandSection />
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
    </>
  )
}
