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

export default function EventForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Añadir Participante</CardTitle>
        <CardDescription>
          Representación de un participante en una actividad.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="identification">Identificación C.C</Label>
              <Input id="identification" placeholder="1234567892" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nombre del participante</Label>
              <Input id="name" placeholder="Nombre de la actividad" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="photo">URL de la foto</Label>
              <Input id="photo" placeholder="google.photo/1.png" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descripción (labor)</Label>
              <Input
                id="description"
                placeholder="Descripción del labor del participante"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Tipo del participante</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    <SelectItem value="Conferencista">Conferencista</SelectItem>
                    <SelectItem value="Tallerista">Tallerista</SelectItem>
                    <SelectItem value="Jurado">Jurado</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Evento</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    <SelectItem value="evento1">Evento test</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Actividad</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    <SelectItem value="actividadtest">Actividad Test</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="default">Añadir participante</Button>
        <Button variant="ghost">Cancelar</Button>
      </CardFooter>
    </Card>
  )
}
