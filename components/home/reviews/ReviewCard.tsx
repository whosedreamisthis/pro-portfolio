import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { StarIcon, Quote } from "lucide-react";

type ReviewCardProps = {
  id: number;
  name: string;
  userImage: string;
  review: string;
  profession: string;
};

const ReviewCard = ({
  name,
  profession,
  userImage,
  review,
}: ReviewCardProps) => {
  return (
    <Card className="flex-1 relative">
      <Quote className="absolute top-2 right-2 text-muted-foreground" />
      <CardHeader>
        <CardTitle className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} className="h-4 w-4 text-yellow-500" />
          ))}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-4 text-black dark:text-white">
          {review}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 justify-start items-center">
          <Image
            src={userImage}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{profession}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
