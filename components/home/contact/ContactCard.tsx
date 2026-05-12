import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

const ContactCard = ({ icon: Icon, label, value }: ContactInfo) => {
  return (
    <Card>
      <CardContent>
        <div className="flex gap-4 items-center justify-start">
          <Icon />
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">{label}</p>
            <p className="font-bold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
