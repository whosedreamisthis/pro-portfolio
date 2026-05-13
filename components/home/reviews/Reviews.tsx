"use client";

import React from "react";
import SectionHeader from "@/components/home/SectionHeader";
import { userReviewData } from "@/data/data";
import ReviewCard from "@/components/home/reviews/ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Reviews = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-brand-50/30  overflow-hidden pb-20 px-1 scroll-mt-[14vh]"
    >
      <SectionHeader
        title="Our Client Review"
        description="Check out our client reviews"
      />
      {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between items-center mx-5">*/}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        arrows={true}
        itemClass="px-4"
      >
        {userReviewData.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Carousel>
      {/*<Carousel*/}
      {/*  itemClass="carousel-item-padding-40-px"*/}
      {/*  responsive={responsive}*/}
      {/*>*/}

      {/*</Carousel>*/}
      {/*</div>*/}
    </section>
  );
};

export default Reviews;
