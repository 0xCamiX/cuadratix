import { ISpeaker } from "@/models/mongoose/Speaker"

export async function getAllSpeakers() {
  const response = await fetch("http://localhost:3000/api/speakers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 2,
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Error while fetching speakers")
  }

  return response.json()
}

export async function getOneSpeakerById(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/speakers/?id=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 2,
      },
      cache: "no-store",
    }
  )

  if (!response.ok) {
    throw new Error("Error while fetching speakers")
  }

  return response.json()
}

export async function createSpeaker(body: any) {
  console.log(body)

  const response = await fetch("http://localhost:3000/api/speakers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })

  if (!response.ok) {
    throw new Error("Error while creating speaker")
  }

  return response.json()
}
