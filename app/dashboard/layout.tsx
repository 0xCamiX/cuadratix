interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {children}
      </section>
    </>
  )
}
