import {z} from 'zod'

export const AdminLoginDataSchema = z.object({
    email: z
        .email()
        .trim(),
    password: z
        .string()
        .min(8, {error: "Password terlalu singkat"})
        .max(15, {error: "Password terlalu panjang"})
})

export type AdminLoginDataSchema = z.infer<typeof AdminLoginDataSchema>