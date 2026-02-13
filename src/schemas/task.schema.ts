import { z } from "zod";

export const createTaskSchema = z.object({
    body: z.object({
        title: z.string({ error: "Title is required" }).min(1),
        description: z.string().optional(),
        assignedTo: z.string().optional(),
    }),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>["body"];

export const updateTaskSchema = z.object({
    body: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        status: z.enum(["OPEN", "CLOSED"]).optional(),
        assignedTo: z.string().optional(),
    }),
});

export type UpdateTaskInput = z.infer<typeof updateTaskSchema>["body"];
