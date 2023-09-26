import { ClientOnly } from "@/components"
import '../globals.css'

export default function CustomerLayout({
    children, 
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <ClientOnly>
                {children}
            </ClientOnly>
        </section>
    )
}