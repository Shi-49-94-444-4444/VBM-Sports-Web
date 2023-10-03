import { Footer } from './components'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ClientOnly>
        <Navbar />
        {children}
        <Footer />
      </ClientOnly>
    </>
  )
}
