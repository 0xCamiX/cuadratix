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
  )
}
