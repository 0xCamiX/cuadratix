import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DatePicker } from "@/components/ui/datepicker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function EventsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2 lg:max-w-full">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3 lg:p-2">
            <h1 className="text-4xl font-bold">Eventos</h1>
            <p className="text-md">
              El esquema encargado del control de acceso, localización de los
              eventos y actividades, el registro de los miembros de la
              universidad que asistirán a los eventos.
            </p>
          </div>
          <div className="w-full lg:w-2/3 lg:p-4">
            <Card>
              <CardHeader>
                <CardTitle>Crear evento</CardTitle>
                <CardDescription>Representación de un evento</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="">
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Nombre del evento</Label>
                      <Input id="name" placeholder="Nombre del evento" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="location">Localización</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                          <SelectContent position="popper">
                            <SelectItem value="aula-maxima">UNIAJC SUR</SelectItem>
                            <SelectItem value="auditorio-1">UNIAJC NORTE</SelectItem>
                          </SelectContent>
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea
                        id="description"
                        placeholder="Evento Semana Universitaria"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Inicio del evento</Label>
                      <DatePicker />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Fin del evento</Label>
                      <DatePicker />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="default">Crear evento</Button>
                <Button variant="ghost">Cancelar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
