import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default async function DashboardPage() {
  return (
    <>
      <Card className="h-[80vh] w-full">
        <CardHeader>
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Seleciona un evento para comenzar, puedes gestionar la creación de
            actividades y finalización para los eventos que tengas activos.
          </p>
        </CardContent>
      </Card>
    </>
  )
}
