import ClientOnly from './components/ClinetOnly'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientOnly>
        <Navbar />
        {children}
    </ClientOnly>
  )
}
