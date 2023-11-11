import React from "react";

function CustomTextArea({ label, name, placeholder, value, onChange }) {
  return (
    <>
      <label
        for="input-group-1"
        class="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>
      <div class="relative mb-6">
        <textarea
          id="input-group-1"
          name={name}
          value={value}
          class="bg-[#d9d9d91a] border-b-[1px] border-b-white text-white text-sm rounded-[5px] focus:border-b-[#b91813] focus:ring-0 focus:outline-none block w-full h-[150px] p-2.5"
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
}

export default CustomTextArea;
