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

type ExperienceEducationCardProps = {
  title: string;
  type: string;
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
}: ExperienceEducationCardProps) => {
  return (
    <Card
      className={`absolute ${index % 2 === 0 ? "left-12" : "right-12"} top-0 w-[40%]`}
    >
      <CardHeader>
        <p className="bg-secondary-200/40 py-1 w-fit px-4 rounded-full text-sm">
          {period}
        </p>
        <CardTitle className="font-bold text-lg">{title}</CardTitle>
        <p className="text-xs text-muted-foreground">{company}</p>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-black dark:text-white">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="border-transparent">
        <div className="flex flex-wrap gap-2 ">
          {technologies.map((technology) => (
            <Badge key={technology} className="text-xs text-white ">
              {technology}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExperienceEducationCard;
