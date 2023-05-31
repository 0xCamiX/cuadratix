import * as React from "react"

// export const metadata: Metadata = {
//   title: "Creator app",
//   description:
//     "Advanced Creator for Cuadratix, the best way to create your own events",
// }

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default async function SettingsLayout({
  children,
}: SettingsLayoutProps) {

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {children}
      </section>
    </>
  )
}
