import React from "react";

function NavButton({ label, active }) {
  return (
    <button
      className={`text-white rounded-md py-2 xl:px-5 px-3 xl:w-fit w-full xl:text-center text-left
    ${
      active === "true"
        ? "bg-gray-700"
        : "border-none bg-transparent hover:bg-gray-700"
    }
    `}
    >
      {label}
    </button>
  );
}

export default NavButton;
