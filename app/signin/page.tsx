import Link from "next/link"

import UserAuthForm from "@/app/signin/components/user-auth-form"

export default function SigninPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center h-[70vh] space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Crear cuenta
        </h1>
        <p className="text-sm text-muted-foreground">
          Ingrese su correo electrónico para crear una cuenta
        </p>
      </div>
      <UserAuthForm />
    </div>
  )
}
