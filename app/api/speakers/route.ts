import { NextRequest, NextResponse } from "next/server"
import Speaker from "@/models/mongoose/Speaker"

import db from "@/lib/db"

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")

  try {
    await db.connect()

    if (id && id !== "undefined") {
      const speaker = await Speaker.findById(id)

      await db.disconnect()

      return new NextResponse(JSON.stringify(speaker))
    }

    const events = await Speaker.find({})

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

    const deletedEvent = await Speaker.findByIdAndDelete(id)

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

    const newEvent = await Speaker.create(res)

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

    const updatedEvent = await Speaker.findByIdAndUpdate(id, res, {
      new: true,
    })

    if(isNew === "true") {
      const newEvent = await Speaker.insertMany([updatedEvent])

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
