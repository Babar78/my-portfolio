import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function TakeToTopButton({dashboardActive, setDashboardActive}) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Change the active button to "Dashboard"
    setDashboardActive(!dashboardActive);
  };

  return (
    <button
      className="w-[65px] h-[65px] bg-[#b91813] text-white flex justify-center items-center flex-col fixed right-10 bottom-10 z-10 takeToTopButton"
      onClick={handleScrollToTop}
      style={{ cursor: "pointer" }}
    >
      <KeyboardDoubleArrowUpIcon
        sx={{
          fontSize: "2rem",
        }}
        className="topIcon"
      />
      <p className="text-center fz-16">Top</p>
    </button>
  );
}

export default TakeToTopButton;
