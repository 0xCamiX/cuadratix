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

export default function ActivitiesPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2 lg:max-w-full">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3 lg:p-2">
            <h1 className="text-4xl font-bold">Actividades</h1>
            <p className="text-md">
              El esquema encargado del control de acceso, localización de los
              eventos y actividades, el registro de los miembros de la
              universidad que asistirán a los eventos.
            </p>
          </div>
          <div className="w-full lg:w-2/3 lg:p-4">
            <Card>
              <CardHeader>
                <CardTitle>Crear actividades</CardTitle>
                <CardDescription>Representación de una actividad para un evento</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="">
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Nombre de la actividad</Label>
                      <Input id="name" placeholder="Nombre de la actividad" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="location">Localización</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                          <SelectContent position="popper">
                            <SelectItem value="aula-maxima">Aula Maxima</SelectItem>
                            <SelectItem value="auditorio-1">Auditorio 1</SelectItem>
                            <SelectItem value="auditorio-2">Auditorio 2</SelectItem>
                            <SelectItem value="auditorio-3">Auditorio 3</SelectItem>
                          </SelectContent>
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="location">Tipo de actividad</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                          <SelectContent position="popper">
                            <SelectItem value="aula-maxima">Conferencia</SelectItem>
                            <SelectItem value="auditorio-1">Taller</SelectItem>
                          </SelectContent>
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea
                        id="description"
                        placeholder="Actividad PMA Week"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Inicio de la actividad</Label>
                      <DatePicker />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Fin de la actividad</Label>
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
