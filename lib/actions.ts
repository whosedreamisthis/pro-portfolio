"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";
import { z } from "zod";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: z.infer<typeof contactSchema>) => {
  console.log("data", data);
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "whosedreamisthis@gmail.com",
    subject: data.subject,
    html: `
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Message:</strong> ${data.message}</p>
`,
  });
};
