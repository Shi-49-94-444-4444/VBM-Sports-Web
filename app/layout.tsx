import GlobalState from '@/contexts'
import './globals.css'
import { ClientOnly, Footer, Navbar } from '@/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Badminton',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="Badminton"/>
        <link rel="icon" href="/images/Vector.png" />
      </head>
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <ClientOnly>
            {children}
          </ClientOnly>
          <Footer />
        </GlobalState>
      </body>
    </html>
  )
}
