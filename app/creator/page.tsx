import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function EventsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Creator App</CardTitle>
        <CardDescription>Sistema de creación de eventos, actividades y participantes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <p>1. Paso para la creación de cualquier entidad es seleccionar una.</p>
          <p>2. Ingrese la información correspondiente para cada entidad</p>
          <p>3. Haga click en el botón de crear</p>
        </div>
      </CardContent>
    </Card>
  )
}
