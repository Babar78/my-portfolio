import React from "react";
import { useSpring, animated } from "react-spring";

function ServicesCard({title, description, image, ctaText}) {
  const [show, setShown] = React.useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      id="servicesCard"
      className="md:w-[400px] w-[350px] md:h-[500px] h-[450px] bg-gradient-to-tl from-[#222222] to-black to-78% rounded-tr-[50px] rounded-bl-[50px] flex flex-col"
    >
      <div>
        <img src={image} alt="" className="w-100 h-100" />
      </div>
      <div className="border border-[1px] border-[#B91813] grow rounded-bl-[50px] border-t-0 relative">
        <h2 className="text-center -mt-5">{title}</h2>
        <p className="fz-16 px-[35px] py-[20px]">
          {description}
        </p>
        <button className="btn fz-16 text-[#b91813] absolute right-[35px] bottom-[35px] underline hover:text-white">
          {ctaText}
        </button>
      </div>
    </animated.div>
  );
}

export default ServicesCard;
