import type { ReactNode } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row">

        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
