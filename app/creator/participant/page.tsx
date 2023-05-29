import * as React from "react"
import { IActivity } from "@/models/mongoose/Activity"
import { IEvent } from "@/models/mongoose/Event"

import { getAllActivities } from "@/lib/activity"
import { getAllEvents } from "@/lib/events"
import { createSpeaker } from "@/lib/speaker"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
    identification: formData.get("identification"),
    name: formData.get("name"),
    type: formData.get("type"),
    description: formData.get("description"),
    photo: formData.get("photo"),
    event: formData.get("event"),
    activity: formData.get("activity"),
  })

  try {
    await createSpeaker(event)
  } catch (error) {
    console.error(error)
  }
}

export default async function EventForm() {
  const events: [IEvent] = await getAllEvents()
  const activities: [IActivity] = await getAllActivities()

  return (
    <Card>
      <form action={create}>
        <CardHeader>
          <CardTitle>Añadir Participante</CardTitle>
          <CardDescription>
            Representación de un participante en una actividad.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Identificación C.C</Label>
              <Input
                name="identification"
                id="identification"
                placeholder="1234567892"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Nombre del participante</Label>
              <Input
                name="name"
                id="name"
                placeholder="Nombre de la actividad"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Tipo del participante</Label>
              <Select name="type">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    <SelectItem value="Organizador">Organizador</SelectItem>
                    <SelectItem value="Conferencista">Conferencista</SelectItem>
                    <SelectItem value="Tallerista">Tallerista</SelectItem>
                    <SelectItem value="Jurado">Jurado</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Descripción (labor)</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Descripción de la labor del participante"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>URL de la foto</Label>
              <Input name="photo" id="photo" placeholder="google.photo/1.png" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Evento</Label>
              <Select name="event">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    {events.map((event) => (
                      <SelectItem value={event._id}>{event.name}</SelectItem>
                    ))}{" "}
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Actividad</Label>
              <Select name="activity">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    {activities.map((activity) => (
                      <SelectItem value={activity._id}>
                        {activity.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="default">Añadir participante</Button>
          <Button variant="ghost">Cancelar</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
