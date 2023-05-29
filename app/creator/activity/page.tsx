import * as React from "react"
import { IEvent } from "@/models/mongoose/Event"

import { createActivity } from "@/lib/activity"
import { getAllEvents } from "@/lib/events"
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

async function create(formData: FormData) {
  "use server"

  const event = JSON.stringify({
    name: formData.get("name"),
    location: formData.get("location"),
    description: formData.get("description"),
    type: formData.get("type"),
    date: formData.get("date"),
    endDate: formData.get("endDate"),
    event: formData.get("event"),
  })

  try {
    await createActivity(event)
  } catch (error) {
    console.error(error)
  }
}

export default async function ActivityForm() {
  const events: [IEvent] = await getAllEvents()

  return (
    <Card>
      <form action={create}>
        <CardHeader>
          <CardTitle>Crear actividades</CardTitle>
          <CardDescription>
            Representación de una actividad para un evento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Nombre de la actividad</Label>
              <Input name="name" id="name" placeholder="Nombre de la actividad" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Localización</Label>
              <Select name="location">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    <SelectItem value="Aula Maxima">Aula Maxima</SelectItem>
                    <SelectItem value="Auditorio 1">Auditorio 1</SelectItem>
                    <SelectItem value="Auditorio 2">Auditorio 2</SelectItem>
                    <SelectItem value="Auditorio 3">Auditorio 3</SelectItem>
                    <SelectItem value="Auditorio 4">Auditorio 4</SelectItem>
                    <SelectItem value="Auditorio 5">Auditorio 5</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Tipo de actividad</Label>
              <Select name="type">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    <SelectItem value="Conferencia">Conferencia</SelectItem>
                    <SelectItem value="Taller">Taller</SelectItem>
                    <SelectItem value="Concurso">Concurso</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Descripción</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Actividad PMA Week"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Inicio de la actividad</Label>
              <Input type="date" name="date" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Fin de la actividad</Label>
              <Input type="date" name="endDate" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Eventos activos</Label>
              <Select name="event">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    {events.map((event) => (
                      <SelectItem value={event._id}>{event.name}</SelectItem>
                    ))}
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="default">Crear actividad</Button>
          <Button variant="ghost">Cancelar</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
