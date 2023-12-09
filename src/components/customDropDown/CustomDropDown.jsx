import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function CustomDropDown({setFilteredImages}) {
  const [category, setCategory] = React.useState("All Images");

  const handleChange = (event) => {
    setCategory(event.target.value);
    setFilteredImages(event.target.value);
  };

  return (
    <FormControl>
      <Select
        className="border-white bg-[#47556950] text-white w-[220px] pr-2"
        id="selectgraphicProjectCategory"
        value={category}
        onChange={handleChange}
        IconComponent={() => <ArrowDropDownIcon style={{ color: "white" }} />}
        style={{ border: "1px solid white", color: "white", height: "50px" }}
      >
        <MenuItem value="All Images">All Images</MenuItem>
        <MenuItem value="Logo Design">Logo Design</MenuItem>
        <MenuItem value="Social Media Post">Social Media Post</MenuItem>
        <MenuItem value="Merchandise">Merchandise</MenuItem>
        <MenuItem value="Brandwall">Brandwall</MenuItem>
        <MenuItem value="Letterhead">Letterhead</MenuItem>
        <MenuItem value="Event Ticket">Event Ticket</MenuItem>
        <MenuItem value="Appreciation Certificate">
          Appreciation Certificate
        </MenuItem>
        <MenuItem value="Broucher">Broucher</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CustomDropDown;
