import { NextRequest, NextResponse } from "next/server"
import Activity from "@/models/mongoose/Activity"

import db from "@/lib/db"

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  const event = request.nextUrl.searchParams.get("event")

  try {
    await db.connect()

    if (event && event !== "undefined") {
      const activity = await Activity.find({ event })

      await db.disconnect()

      return new NextResponse(JSON.stringify(activity))

    }

    if (id && id !== "undefined") {
      const activity = await Activity.findById(id)

      await db.disconnect()

      return new NextResponse(JSON.stringify(activity))
    }

    const events = await Activity.find({})

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

    const deletedEvent = await Activity.findByIdAndDelete(id)

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

    const newEvent = await Activity.create(res)

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

    const updatedEvent = await Activity.findByIdAndUpdate(id, res, {
      new: true,
    })

    if(isNew === "true") {
      const newEvent = await Activity.insertMany([updatedEvent])

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
