import { Footer, ModalFeaturing, ModalUnauthorize } from './components'
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
      <ModalFeaturing />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
