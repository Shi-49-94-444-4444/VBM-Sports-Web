import { Footer, ModalUnauthorize } from './components'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ModalUnauthorize />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
