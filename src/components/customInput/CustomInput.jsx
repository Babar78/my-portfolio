import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

function CustomInput({ label, name, type, placeholder, value, onChange }) {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <label
        htmlFor="input-group-1"
        class="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>
      <div class="relative mb-6">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          {type === "email" ? (
            <EmailIcon
              className={`dark:text-gray-400 ${
                isFocused ? "text-[#b91813]" : ""
              }`}
            />
          ) : (
            <PersonIcon
              className={`dark:text-gray-400 ${
                isFocused ? "text-[#b91813]" : ""
              }`}
            />
          )}
        </div>
        <input
          type={type}
          id={`input-${name}`}
          name={name}
          value={value}
          class="bg-[#d9d9d91a] border-b-[1px] border-b-white text-white text-sm rounded-[5px] focus:border-b-[#b91813] focus:ring-0 focus:outline-none block w-full h-[50px] pl-12 p-2.5"
          placeholder={placeholder}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
      </div>
    </>
  );
}

export default CustomInput;
