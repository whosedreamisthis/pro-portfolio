import React from "react";
import SectionHeader from "@/components/home/SectionHeader";
import { contactInfo } from "@/data/data";
import ContactCard from "@/components/home/contact/ContactCard";
import ContactForm from "@/components/home/contact/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative  bg-brand-50/30  overflow-hidden px-5 pb-15 scroll-mt-[14vh]"
    >
      <SectionHeader
        title="Get In Touch"
        description="Have a project in mind or just want to say hi? I'd love to hear from you"
      />
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        className="flex flex-col sm:flex-row gap-4 w-full justify-center items-start"
      >
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Let&apos;s talk</h1>
          <p className="text-sm text-muted-foreground mb-3">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          {contactInfo.map((contact) => (
            <a key={contact.label} href={contact.href} target="_blank">
              <ContactCard {...contact} />
            </a>
          ))}
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
