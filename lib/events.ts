import { IEvent } from "@/models/mongoose/Event"

export async function getAllEvents() {
  const response = await fetch('http://localhost:3000/api/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: {
      revalidate: 1
    }
  })

  if (!response.ok) {
    throw new Error('Error while fetching events')
  }

  return response.json()
}

export async function getOneEventById(id: string) {
  const response = await fetch(`http://localhost:3000/api/events/?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: {
      revalidate: 1
    }
  })

  if (!response.ok) {
    throw new Error('Error while fetching events')
  }

  return response.json()
}

export async function createEvent(body: any) {
  const response = await fetch('http://localhost:3000/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })

  if (!response.ok) {
    throw new Error('Error while creating event')
  }

  return response.json()
}
