import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-2xl font-bold tracking-tight lg:text-3xl">
            Bienvenido a Cuadratix, plataforma de gestión de eventos
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Creación de eventos, gestión de asistentes, control de accesos y
            actividades.
          </p>
          <hr />
          {/* Servicios */}
          <div className="grid gap-10 sm:grid-cols-2">
            <Link href={"/events"} passHref>
              <div className="group relative h-48 bg-gradient-to-t from-green-300 via-blue-500 to-purple-600">
                <div className="absolute bottom-0 left-0 p-4">
                  <h1 className="text-md font-bold text-white">
                    Creación de eventos
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={"/admin"} passHref>
              <div className="group relative h-48 bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">
                <div className="absolute bottom-0 left-0 p-4">
                  <h1 className="text-md font-bold text-white">
                    Administración de eventos
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
