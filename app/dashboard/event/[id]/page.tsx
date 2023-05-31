import { IActivity } from "@/models/mongoose/Activity"
import { IEvent } from "@/models/mongoose/Event"

import { getAllActivitiesByEvent } from "@/lib/activity"
import { getOneEventById } from "@/lib/events"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default async function EventPage({
  params,
}: {
  params: { id: string }
}) {
  const data: IEvent = await getOneEventById(params.id)
  const activities: IActivity[] = await getAllActivitiesByEvent(params.id)

  return (
    <Card className="h-[80vh] w-full">
      <CardHeader>
        <h2 className="text-2xl font-bold">Evento: {data?.name}</h2>
        <p className="text-muted-foreground">
          {data?.description} - {data?.location}
        </p>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl tracking-tighter">Actividades</h3>
        {/* show activities */}

        <div className="my-4 grid gap-4 sm:grid-cols-2">
          {activities.map((activity) => (
            <div className="group relative h-20">
              <li key={activity?._id}>{activity?.name}</li>
              <p className="text-muted-foreground">
                {`${activity?.description} Fecha Inicio: ${activity?.date} Lugar: ${activity?.location}`}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
