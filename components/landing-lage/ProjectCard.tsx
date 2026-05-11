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

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full p-0 gap-4 w-[90%] mx-auto">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          fill
          className="object-cover"
          alt={project.title}
        />
      </div>
      <CardHeader className="">
        <CardTitle className="font-bold px-2">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mx-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="m-0 p-0">
        <div className="flex gap-1 flex-row mx-5.5 mb-3">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              className=" rounded-lg px-2 py-3 text-xs bg-secondary-400 text-center "
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center items-center  mb-1 mt-4 gap-3">
          <Button className="rounded-md px-6 dark:text-white dark:bg-brand-100">
            Live Demo
          </Button>
          <Button
            variant="outline"
            className="rounded-md px-6   border-brand-400 dark:border-brand-50 border "
          >
            Source Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
