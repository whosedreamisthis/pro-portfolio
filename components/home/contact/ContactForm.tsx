"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schema";
import { z } from "zod";
import { sendEmail } from "@/lib/actions";
import { toast } from "sonner";
import { Send } from "lucide-react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    await sendEmail(data);
    reset();
    toast.success("Your email has been sent. I will get back to you shortly.", {
      style: {
        color: "green",
      },
      action: {
        label: "Go Home",
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg px-6 py-8 w-full"
    >
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium">Name</Label>
            <Input
              {...register("name")}
              placeholder="John Smith"
              className="bg-gray-300/40 rounded-sm"
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium">Email</Label>
            <Input
              {...register("email")}
              placeholder="john@example.com"
              className="bg-gray-300/40 rounded-sm"
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">Subject</Label>
          <Input
            {...register("subject")}
            className="bg-gray-300/40 rounded-sm"
            placeholder="Project inquiry"
          />
          {errors.subject && (
            <span className="text-xs text-red-500">
              {errors.subject.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">Message</Label>
          <Textarea
            {...register("message")}
            className="bg-gray-300/40 rounded-sm min-h-30"
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <span className="text-xs text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="cursor-pointer flex justify-center items-center gap-4 py-4 w-full rounded-sm"
          >
            <Send />
            <p>Send</p>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
