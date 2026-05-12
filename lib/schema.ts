import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  message: z.string().min(10, "Message is too short"),
  subject: z.string().min(2, "Subject is too short"),
  email: z.email("Invalid email address"),
});
