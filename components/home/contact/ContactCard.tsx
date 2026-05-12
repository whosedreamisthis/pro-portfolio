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
    <Card className="hover:scale-105 transition-transform duration-300 dark:bg-slate-900/70">
      <CardContent>
        <div className="flex gap-4 items-center justify-start">
          <div className="bg-brand-50/40 h-8 w-8 rounded-md flex items-center justify-center">
            <Icon size={14} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">{label}</p>
            <p className="font-semibold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
