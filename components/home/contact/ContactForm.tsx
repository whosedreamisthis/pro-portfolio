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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
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
  return (
    <form className="bg-white rounded-lg px-6 py-8 w-full">
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
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
