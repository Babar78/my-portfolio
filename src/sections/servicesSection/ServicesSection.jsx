import React, { useState, useEffect } from "react";
import ServicesCard from "../../components/servicesCard/ServicesCard";
import Carousel from "../../components/swiperJS/SwiperJS";

import serviceImage1 from "../../assets/images/services/webDev.png";
import serviceImage2 from "../../assets/images/services/ui.png";
import serviceImage3 from "../../assets/images/services/graphicDesign.png";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Passionate about crafting dynamic, user-friendly websites tailored to your unique business needs. Specializing in responsive design and seamless online experiences from front-end to back-end. Let's make a lasting impression together.",
    image: serviceImage1,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Mastering UI/UX design for captivating digital experiences that prioritize user satisfaction. Let's bring your vision to life and stand out in the digital landscape.",
    image: serviceImage2,
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Graphics design expert, creating captivating visuals that leave a lasting impression. Elevate your brand with my impactful solutions.",
    image: serviceImage3,
  },
];

function ServicesSection() {
  // Rendering The Data inside Service Card Component

  const slideItems = services.map((service) => ({
    id: service.id,
    content: (
      <ServicesCard
        title={service.title}
        description={service.description}
        image={service.image}
        ctaText="Get Service"
      />
    ),
  }));

  //  States to save how many items to show on screen w.r.t screen size

  const [slidesPerView, setSlidesPerView] = useState(3); // Default slides per view value
  const [spaceBetween, setSpaceBetween] = useState(30); // Default space between slides value

  useEffect(() => {
    // Function to update the offset based on screen width
    const updateVariables = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1440) {
        setSlidesPerView(3);
        setSpaceBetween(30);
      } else if (screenWidth > 1290) {
        setSlidesPerView(3);
        setSpaceBetween(20);
      } else if (screenWidth > 890) {
        setSlidesPerView(2);
        setSpaceBetween(20);
      } else {
        setSlidesPerView(1);
        setSpaceBetween(20);
      }
    };

    // Initial update
    updateVariables();
    // A resize event listener to update the offset on window resize
    window.addEventListener("resize", updateVariables);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateVariables);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <Element name="services" id="Services">
      <section className="servicesSection">
        <div className="main_container md:py-[100px] py-[50px]">
          <div className="content_container">
            <h1 className="fz-64 text-[#b91813] text-center">Services</h1>
            <Carousel
              slideItems={slideItems}
              slidesPerView={slidesPerView}
              spaceBetween={spaceBetween}
            />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default ServicesSection;
