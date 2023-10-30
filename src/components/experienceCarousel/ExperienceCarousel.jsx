import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

function ExperienceCarousel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0); // Start from the first slide
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  // Autoplay configuration
  const [autoplayInterval, setAutoplayInterval] = useState(3000); // Adjust the autoplay interval as needed

  useEffect(() => {
    // Start autoplay when the component mounts
    const autoplayTimer = setInterval(() => {
      // Calculate the next slide index, wrapping around to the first slide if needed
      const nextSlide = (goToSlide + 1) % cards.length;
      setGoToSlide(nextSlide);
    }, autoplayInterval);

    // Clear the autoplay timer when the component unmounts
    return () => {
      clearInterval(autoplayTimer);
    };
  }, [cards, goToSlide, autoplayInterval]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}

export default ExperienceCarousel;
