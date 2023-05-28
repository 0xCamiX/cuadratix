import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/app/creator/components/sidebar-nav"

export const metadata: Metadata = {
  title: "Creator app",
  description:
    "Advanced Creator for Cuadratix, the best way to create your own events",
}

const sidebarNavItems = [
  {
    title: "Evento",
    href: "/creator/event",
  },
  {
    title: "Actividad",
    href: "/creator/activity",
  },
  {
    title: "Participante",
    href: "/creator/participant",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2 lg:max-w-full">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full lg:w-1/3 lg:p-2">
              <h1 className="text-4xl font-bold tracking-tight">Cuadratix</h1>
              <p className="text-muted-foreground">
                Creator app es un gestor de creación de eventos, actividades y
                participantes. Controlar los eventos nunca fue tan fácil. Made
                with ❤️ by{" Juan Camilo G. "}
              </p>
              <Separator className="my-6" />
              <div className="flex flex-col">
                <aside className="lg:w-full">
                  <SidebarNav items={sidebarNavItems} />
                </aside>
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:p-4">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
