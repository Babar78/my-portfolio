import React, { useState, useEffect } from "react";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";

import Carousel from "../../components/swiperJS/SwiperJS";

// import BasharatZaman from "../../assets/images/testimonials/BasharatZaman.jpeg";
import BasharatZaman from "../../assets/images/testimonials/boy-icon.png";
import Rameen from "../../assets/images/testimonials/girl-icon.png";
import Hamza from "../../assets/images/testimonials/boy-icon.png"

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";

const testimonials = [
  {
    id: 1,
    name: "Basharat Zaman",
    position: "VP Product: Bilty",
    image: BasharatZaman,
    description:
      "Babar effectively concluded the Frontend Developer Internship at Bilty, demonstrating exceptional proficiency in tasks assigned. Bilty extends gratitude for the his commendable efforts, acknowledging their significant contributions.",
  },
  {
    id: 2,
    name: "Rameen Awais",
    position: "Country Head: Total School Solutions",
    image: Rameen,
    description:
      "As a Senior Graphic Designer at Total School Solutions from Nov 2022 to Jun 2023, he consistently delivered high-quality and visually appealing designs.",
  },
  {
    id: 3,
    name: "Hamza Naseer",
    position: "",
    image: Hamza,
    description:
      "Very professional and quick work! He did exactly what we needed and transformed our vision into captivating visuals. Thrilled with our new logo design!",
  },
];

function TestimonialSection() {
  const slideItems = testimonials.map((testimonial) => ({
    id: testimonial.id,
    content: (
      <TestimonialCard
        name={testimonial.name}
        position={testimonial.position}
        description={testimonial.description}
        image={testimonial.image}
      />
    ),
  }));

  //   Use States to save how many items to show on screen w.r.t screen size

  const [slidesPerView, setSlidesPerView] = useState(3); // Default slides per view value
  const [spaceBetween, setSpaceBetween] = useState(30); // Default space between slides value

  useEffect(() => {
    // Function to update the offset based on screen width
    const updateVariables = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1440) {
        setSlidesPerView(2);
        setSpaceBetween(30);
      } else if (screenWidth > 1160) {
        setSlidesPerView(2);
        setSpaceBetween(20);
      } else {
        setSlidesPerView(1);
        setSpaceBetween(30);
      }
    };

    // Initial update
    updateVariables();
    // Add a resize event listener to update the offset on window resize
    window.addEventListener("resize", updateVariables);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateVariables);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <Element name="testimonials" id="Testimonials">
      <section className="testimonialSection">
        <div className="py-[50px]">
          <div className="content_container">
            <h1 className="fz-64 text-center text-[#b91813]">Testimonials</h1>
            <div className="h-[500px]">
              <Carousel
                slideItems={slideItems}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default TestimonialSection;
