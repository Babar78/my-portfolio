import React from "react";

function TestimonialCard({ name, position, image, description }) {
  return (
    <div className="bg-[#121213] rounded-tr-[50px] rounded-bl-[50px] w-[550px] h-[300px] p-10 relative testimonialCard">
      <div className="w-[85px] h-[85px] rounded-full absolute right-10 -top-10 userImage z-[100]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <h4 className="text-white">{name}</h4>
      <p className="m-0 p-0 fz-14 text-[#A6A6A6] position">{position}</p>
      <p className="mt-10">
        {description}
      </p>
    </div>
  );
}

export default TestimonialCard;
