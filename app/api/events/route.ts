import Event from "@/models/Event"
import db from "@/lib/db"

// export async function GET(request: Request) {
//   await db.connect() // Connect to the database

//   await Event.createCollection()

//   const speaker = {
//     identification: "123456789",
//     name: "John Doe",
//     description: "Lorem impsum dolor sit amet",
//     photo: "https://picsum.photos/200",
//     type: "Conferencista",
//   }

//   const activity = {
//     name: "actividad test",
//     type: "Conferencia",
//     description: "actividad test",
//     date: new Date(),
//     endDate: new Date(),
//     location: "Aula Maxima",
//     speakers: [speaker],
//   }

//   const event = {
//     name: "Evento Test",
//     location: "UNIAJC SUR",
//     description: "Evento Test",
//     date: new Date(),
//     endDate: new Date(),
//     activities: [activity],
//   }

//   await Event.create(event)

//   const events = await Event.find({})

//   return new Response(JSON.stringify(events)) // Return the events as a JSON string
// }

import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    await db.connect()

    const events = await Event.find({})

    await db.disconnect()

    return new Response(JSON.stringify(events))
  } catch (error) {
    console.log(error)
    return new Response("Error")
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")

  if (!id) return new NextResponse(JSON.stringify({ message: "Invalid id" }))

  try {
    await db.connect()

    const deletedEvent = await Event.findByIdAndDelete(id)

    await db.disconnect()

    return new NextResponse(JSON.stringify(deletedEvent))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Error" }))
  }
}
