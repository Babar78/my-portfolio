import React, { useState } from "react";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";

function CustomToggleButton({ setToggle }) {
  const [isWebDev, setWebDev] = useState(false);

  const handleCheckboxChange = () => {
    setWebDev(!isWebDev);
    setToggle(isWebDev ? "webDev" : "graphicsDesign");
  };
  return (
    <>
      <label className="categorySwitcher shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-slate-600 p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={isWebDev}
          onChange={handleCheckboxChange}
        />
        <span
          className={`projectsCategoryToggleButtonOption flex items-center space-x-[6px] rounded py-2 md:px-[18px] px-2 text-sm font-medium ${
            !isWebDev ? "text-white bg-slate-500" : "text-body-color"
          }`}
        >
          <TbDeviceDesktopCode className="mr-[6px]" />
          Web Development
        </span>
        <span
          className={`projectsCategoryToggleButtonOption flex items-center space-x-[6px] rounded py-2 md:px-[18px] px-2 text-sm font-medium ${
            isWebDev ? "text-white bg-slate-500" : "text-body-color"
          }`}
        >
          <SiMaterialdesignicons className="mr-[6px]" />
          Graphics Designing
        </span>
      </label>
    </>
  );
}

export default CustomToggleButton;
