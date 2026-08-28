import { Button } from "@/components/ui/button"
import {Eye, EyeClosed} from 'lucide-react'
import { Card, CardTitle } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Logo from "@/shared/components/Logo"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { AdminLoginDataSchema } from "../types/login-input"
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {

  const [showPass, setShowPass] = useState(false)
  const {control, handleSubmit, formState: {errors, isValid}} = useForm<AdminLoginDataSchema>({
    resolver: zodResolver(AdminLoginDataSchema),
    defaultValues: {email: "", password: ""},
    mode: "onSubmit"
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <section className="w-screen h-screen bg-background">
      <section className="w-[80%] h-screen flex items-center justify-between gap-x-20 mx-auto">
        <div className="flex-1">
          <h1 className="text-3xl text-primary font-extrabold">Selamat Datang Kembali</h1>
          <p className="text-slate-400 mt-2">Masuk ke dashboard administrasi untuk mengelola dan memantau seluruh aktivitas sistem.</p>
        </div>

        {/* login container */}
        <Card className="w-1/2 py-10 px-10">
          <div>
            <Logo />
            <CardTitle className="text-2xl font-semibold my-4">Login</CardTitle>
          </div>

          <form onSubmit={onSubmit} className="w-full flex flex-col gap-y-4">
              <Field>
                <div className="flex w-full items-center justify-between">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <h5 className="text-destructive text-xs">{errors.email?.message}</h5>
                </div>
                <Controller control={control} name="email" render={({field}) => (
                  <Input placeholder="Enter your email" autoComplete="off" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
                )}/>
              </Field>

              <Field>
                <div className="flex w-full items-center justify-between">
                  <FieldLabel htmlFor="email">Kata Sandi</FieldLabel>
                  <h5 className="text-destructive text-xs">{errors.password?.message}</h5>
                </div>
                <div className="flex items-center justify-between gap-x-2">
                  <Controller control={control} name="password" render={({field}) => (
                    <Input type={showPass ? 'text' : 'password'} placeholder="Enter your password" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
                  )}/>

                  <Button className="mt-2" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeClosed /> : <Eye />}
                  </Button>
                </div>
              </Field>

            <Button disabled={isValid ? false : true} type="submit" className='w-full py-4 mt-6' size='lg'>Login</Button>
          </form>
        </Card>
      </section>
    </section>
  )
}

export default LoginPage