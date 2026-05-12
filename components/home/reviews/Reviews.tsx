import React from "react";
import SectionHeader from "@/components/home/SectionHeader";
import { userReviewData } from "@/data/data";
import ReviewCard from "@/components/home/reviews/ReviewCard";

const Reviews = () => {
  return (
    <section className="relative bg-brand-50/30  overflow-hidden">
      <SectionHeader
        title="Our Client Review"
        description="Check out our client reviews"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between items-center mx-20">
        {userReviewData.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
