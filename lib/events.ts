export async function getAllEvents() {
  const response = await fetch('http://localhost:3000/api/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: {
      revalidate: 2
    },
    cache: 'no-store'
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
      revalidate: 2
    },
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error('Error while fetching events')
  }

  return response.json()
}

export async function newActivityById(id: string) {
  return new Response("Hello World!")
}
