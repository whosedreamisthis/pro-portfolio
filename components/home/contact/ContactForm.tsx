"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <form className="bg-white rounded-lg px-6 py-8 w-full">
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium">Name</Label>
            <Input
              placeholder="John Smith"
              className="bg-gray-300/40 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium">Email</Label>
            <Input
              placeholder="john@example.com"
              className="bg-gray-300/40 rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">Subject</Label>
          <Input
            className="bg-gray-300/40 rounded-sm"
            placeholder="Project inquiry"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">Message</Label>
          <Textarea
            className="bg-gray-300/40 rounded-sm min-h-30"
            placeholder="Tell me about your project..."
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
