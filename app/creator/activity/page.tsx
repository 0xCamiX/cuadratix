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

export default function ActivityForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crear actividades</CardTitle>
        <CardDescription>
          Representación de una actividad para un evento
        </CardDescription>
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
              <Textarea id="description" placeholder="Actividad PMA Week" />
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
        <Button variant="default">Crear actividad</Button>
        <Button variant="ghost">Cancelar</Button>
      </CardFooter>
    </Card>
  )
}
