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
      <CardHeader className="p-2">
        <CardTitle className="font-bold px-2">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mx-2">
          {project.description}
        </CardDescription>
        <CardContent className="m-0 p-0 my-2">
          <div className="flex gap-1 flex-row my-4 mx-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                className=" rounded-lg px-2 py-3 text-xs bg-secondary-400 text-center "
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center mx-auto gap-2">
            <Button className="mx-2 rounded-md px-6  sm:px-9 ">
              Live Demo
            </Button>
            <Button
              variant="outline"
              className="mx-2 rounded-md px-6 sm:px-9   border-brand-400 border"
            >
              Source Code
            </Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
