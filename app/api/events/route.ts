import { NextRequest, NextResponse } from "next/server"
import Event from "@/models/Event"

import db from "@/lib/db"

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")

  try {
    await db.connect()

    if (id && id !== "undefined") {
      const event = await Event.findById(id)

      await db.disconnect()

      return new NextResponse(JSON.stringify(event))
    }

    const events = await Event.find({})

    await db.disconnect()

    return new NextResponse(JSON.stringify(events))

  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Error" }))
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

export async function POST(request: NextRequest) {
  const res = await request.json()

  if (!res) return new NextResponse(JSON.stringify({ message: "Invalid data" }))

  try {
    await db.connect()

    const newEvent = await Event.create(res)

    await db.disconnect()

    return new NextResponse(JSON.stringify(newEvent))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Error" }))
  }
}

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  const isNew = request.nextUrl.searchParams.get("new")

  if (!id) return new NextResponse(JSON.stringify({ message: "Invalid id" }))

  const res = await request.json()

  if (!res) return new NextResponse(JSON.stringify({ message: "Invalid data" }))

  try {
    await db.connect()

    const updatedEvent = await Event.findByIdAndUpdate(id, res, {
      new: true,
    })

    if(isNew === "true") {
      const newEvent = await Event.insertMany([updatedEvent])

      await db.disconnect()

      return new NextResponse(JSON.stringify(newEvent))
    }

    await db.disconnect()

    return new NextResponse(JSON.stringify(updatedEvent))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Error" }))
  }
}
