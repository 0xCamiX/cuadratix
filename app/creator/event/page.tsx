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
import { createEvent } from "@/lib/events"

async function create(formData: FormData) {
  "use server"

  const event = JSON.stringify({
    "name": formData.get("name"),
    "location": formData.get("location"),
    "description": formData.get("description"),
    "date": formData.get("date"),
    "endDate": formData.get("endDate"),
  })

  try {
    await createEvent(event)

  } catch (error) {
    console.error(error)
  }
}

export default async function EventsPage() {
  return (
    <Card>
      <form action={create} >
        <CardHeader>
          <CardTitle>Crear evento</CardTitle>
          <CardDescription>Representación de un evento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Nombre del evento</Label>
              <Input name="name" placeholder="Nombre del evento" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Localización</Label>
              <Select name="location">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                  <SelectContent position="popper">
                    <SelectItem value="UNIAJC SUR">UNIAJC SUR</SelectItem>
                    <SelectItem value="UNIJAC NORTE">UNIAJC NORTE</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Descripción</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Evento Semana Universitaria"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Inicio del evento</Label>
              <Input type="date" name="date"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Fin del evento</Label>
              <Input type="date" name="endDate"/>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="default" type="submit">Crear evento</Button>
          <Button variant="ghost">Cancelar</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
