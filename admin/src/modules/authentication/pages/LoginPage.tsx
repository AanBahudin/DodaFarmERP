import { Button } from "@/components/ui/button"
import {Eye, EyeClosed} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Logo from "@/shared/components/Logo"
import { useState } from "react"

const LoginPage = () => {

  const [showPass, setShowPass] = useState(false)

  return (
    <section className="w-screen h-screen bg-background">
      <section className="w-[80%] h-screen flex items-center justify-between gap-x-20 mx-auto">
        <div className="flex-1">
          <h1 className="text-3xl text-primary font-extrabold">Selamat Datang Kembali</h1>
          <p className="text-slate-400 mt-2">Masuk ke dashboard administrasi untuk mengelola dan memantau seluruh aktivitas sistem.</p>
        </div>

        {/* login container */}
        <Card className="w-1/2 py-10 px-10">
          <CardHeader>
            <Logo />
            <CardTitle className="text-2xl font-semibold my-4">Login</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-y-4">
              <Field>
                <FieldLabel htmlFor="input-field-username">Email</FieldLabel>
                <Input
                  id="input-field-username"
                  type="email"
                  placeholder="Enter your username"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="input-field-username">Password</FieldLabel>
                <div className="flex items-center justify-between gap-x-2">
                  <Input
                    id="input-field-username"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Enter your password"
                  />

                  <Button className="mt-2" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeClosed /> : <Eye />}
                  </Button>
                </div>
              </Field>

            <Button className='w-full py-4' size='lg'>Login</Button>
          </CardContent>
        </Card>
      </section>
    </section>
  )
}

export default LoginPage