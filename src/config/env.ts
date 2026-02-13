import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
    PORT: z.string().default("5000"),
    MONGO_URI: z.url({ message: "MONGO_URI must be a valid URL" }),
    notificationType: z.enum(["EMAIL", "SMS"]).default("EMAIL"),
});

const env = envSchema.parse(process.env);

export default env;