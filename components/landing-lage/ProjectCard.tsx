"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;

  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    <Card className="group relative overflow-hidden flex flex-col h-full p-0 gap-4 w-[90%] mx-auto shadow-md">
      <div className="relative w-full h-48">
        <Image src={image} fill className="object-cover" alt={title} />
      </div>
      <CardHeader className="flex-1">
        <CardTitle className="font-bold px-2">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mx-2 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="m-0 p-0">
        <div className="flex gap-1 flex-row mx-5.5 mb-3">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              className=" rounded-lg px-2 py-3 text-xs bg-secondary-400 text-center "
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center items-center  mb-5 mt-4 gap-3 w-full">
          {demoUrl && (
            <Button
              className="rounded-md px-6 dark:text-white dark:bg-brand-100 cursor-pointer w-[43%]"
              onClick={() => {
                window.open(demoUrl, "_blank");
              }}
            >
              Live Demo{" "}
            </Button>
          )}

          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-md px-6   border-brand-400 dark:border-brand-50 border cursor-pointer w-[43%]"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              Source Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
