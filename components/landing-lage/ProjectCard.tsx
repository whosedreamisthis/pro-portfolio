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

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {project.description}
        </CardDescription>
        <CardContent className="m-0 p-0 my-2">
          <div className="flex gap-3 flex-row">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                className=" rounded-lg px-2 py-3 text-xs bg-secondary-400 text-center "
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Button>Live Demo</Button>
            <Button>Source Code</Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
