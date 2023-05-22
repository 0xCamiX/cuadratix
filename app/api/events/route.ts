import Event from "@/models/Event"

import db from "@/lib/db"

export async function GET(request: Request) {
  await db.connect() // Connect to the database

  await Event.createCollection()

  const speaker = {
    identification: "123456789",
    name: "John Doe",
    description: "Lorem impsum dolor sit amet",
    photo: "https://picsum.photos/200",
    type: "Conferencista",
  }

  const activity = {
    name: "actividad test",
    type: "Conferencia",
    description: "actividad test",
    date: new Date(),
    endDate: new Date(),
    location: "Aula Maxima",
    speakers: [speaker],
  }

  const event = {
    name: "Evento Test",
    location: "UNIAJC SUR",
    description: "Evento Test",
    date: new Date(),
    endDate: new Date(),
    activities: [activity],
  }

  await Event.create(event)

  // const event = new Event(
  //   {
  //     "name": "Evento Test",
  //     "location": "UNIAJC SUR",
  //     "description": "Evento Test",
  //     "date": new Date(),
  //     "endDate": new Date(),
  //     "activities": [{
  //       "name": "actividad test",
  //       "type": "conferencia",
  //       "description": "actividad test",
  //       "date": new Date(),
  //       "endDate": new Date(),
  //       "location": "Aula Maxima",
  //       "speakers": [{
  //         "name": "Speaker Test",
  //         "description": "Speaker Test",
  //         "photo": "https://picsum.photos/200",
  //         "type": "Conferencista"
  //       }]
  //     }]
  //   }
  // )

  // await event.save();

  // Get all the events from the database

  const events = await Event.find({})

  return new Response(JSON.stringify(events)) // Return the events as a JSON string
}
