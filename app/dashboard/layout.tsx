import * as React from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IEvent } from "@/models/mongoose/Event"

import { getAllEvents } from "@/lib/events"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// export const metadata: Metadata = {
//   title: "Creator app",
//   description:
//     "Advanced Creator for Cuadratix, the best way to create your own events",
// }

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default async function SettingsLayout({
  children,
}: SettingsLayoutProps) {

  const data: IEvent[] = await getAllEvents()

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2 lg:max-w-full">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full lg:w-1/3 lg:p-2">
              <h1 className="text-4xl font-bold tracking-tight">Cuadratix</h1>
              <p className="text-muted-foreground">
                Dashboard para la visualización y gestión de eventos de
                Cuadratix, análiticas, visualizaciones y más.
              </p>
              <Separator className="my-6" />
              <div className="flex flex-col">
                <aside className="lg:w-full">
                  <ScrollArea className="h-auto w-full rounded-md border">
                    <div className="p-4">
                      <h4 className="mb-4 text-sm font-medium leading-none">
                        <Badge className="">Eventos activos</Badge>
                      </h4>
                      {data.map((event) => (
                        <React.Fragment>
                          <div className="text-sm" key={event._id}>
                            <Link
                              href={`/dashboard/event/${event._id}`}
                              passHref
                            >
                              {event.name}
                            </Link>
                          </div>
                          <Separator className="my-2" />
                        </React.Fragment>
                      ))}
                    </div>
                  </ScrollArea>
                </aside>
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:p-4">{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}
