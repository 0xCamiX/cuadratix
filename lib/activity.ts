import { IActivity } from "@/models/mongoose/Activity"

export async function getAllActivities() {
  const response = await fetch("http://localhost:3000/api/activities", {
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
    throw new Error("Error while fetching activities")
  }

  return response.json()
}

export async function getOneActivityById(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/activities/?id=${id}`,
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
    throw new Error("Error while fetching activities")
  }

  return response.json()
}

export async function getAllActivitiesByEvent(id: string) {
  const response = await fetch(
  `http://localhost:3000/api/activities/?event=${id}`,
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
    throw new Error("Error while fetching activities")
  }

  return response.json().then((data: IActivity[]) => {
    if (data === null) return  []
    return data
  })
}

export async function createActivity(body: any) {
  console.log(body)

  const response = await fetch("http://localhost:3000/api/activities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })

  if (!response.ok) {
    throw new Error("Error while creating activity")
  }

  return response.json()
}
