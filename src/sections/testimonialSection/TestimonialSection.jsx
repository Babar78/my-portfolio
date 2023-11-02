import React, {useState, useEffect} from "react";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";

import Carousel from "../../components/swiperJS/SwiperJS";

import testimonialPic1 from "../../assets/images/testimonials/ahmed.png";
import testimonialPic2 from "../../assets/images/testimonials/anas.png";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Usman",
    position: "CEO & Founder: Takhleeq Studio",
    image: testimonialPic1,
    description:
      "Stellar website development services! Their expertise and attention to detail exceeded expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "Anas",
    position: "CEO: Dev Junction",
    image: testimonialPic2,
    description:
      "An exceptional graphic designing experience! They transformed our vision into captivating visuals. Thrilled with our new logo design!",
  },
  {
    id: 3,
    name: "Anas",
    position: "CEO: Dev Junction",
    image: testimonialPic2,
    description:
      "An exceptional graphic designing experience! They transformed our vision into captivating visuals. Thrilled with our new logo design!",
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
    <section className="testimonialSection">
      <div className="main_container py-[100px]">
        <div className="content_container">
          <h1 className="fz-64 text-center text-[#b91813]">Testimonials</h1>
          <div className="h-full sm:py-[100px] py-[75px]">
          <p className="fz-24 text-[#A6A6A6] lg:text-left text-center">What Clients Say:</p>
          <Carousel
            slideItems={slideItems}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
