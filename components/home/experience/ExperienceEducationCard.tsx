import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  index: number;
};

const ExperienceEducationCard = ({
  title,
  company,
  period,
  description,
  technologies,
  index,
}: Props) => {
  // Mobile: Always right of line
  // Desktop: Alternate sides
  const sideClasses =
    index % 2 === 0
      ? "md:left-auto md:right-[calc(50%+2rem)]"
      : "md:left-[calc(50%+2rem)]";

  return (
    <Card
      className={`relative ml-12 md:ml-0 md:absolute md:w-[42%] shadow-md ${sideClasses} top-0`}
    >
      <CardHeader className="pb-2">
        <p className="bg-secondary-200/40 py-1 w-fit px-3 rounded-full text-[10px] font-medium uppercase tracking-wider">
          {period}
        </p>
        <CardTitle className="font-bold text-lg leading-tight">
          {title}
        </CardTitle>
        <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
          {company}
        </p>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[10px] px-2 py-0 bg-brand-100/20 dark:bg-brand-50/50"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExperienceEducationCard;
