import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>["body"];