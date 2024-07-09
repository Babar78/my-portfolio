import React from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";


function CustomButton({ label, icon, downloadPdf, pdfFile }) {
  return downloadPdf ? (
    <a
      href={pdfFile}
      download="Resume-Muhammad-Babar"
      target="_blank"
      rel="noreferrer"
      className="btn bg-[#b91813] text-white transition ease-in delay-150 duration-75 hover:text-black inline-flex items-center p-4 text-base"
    >
      {icon === "download" ? (
        <FileDownloadRoundedIcon className="mr-2" />
      ) : (
        <></>
      )}
      <span>{label}</span>
    </a>
  ) : (
    <button className="btn bg-[#b91813] text-white transition ease-in delay-150 duration-75 hover:text-black inline-flex items-center p-4 text-base">
      {icon === "download" ? (
        <FileDownloadRoundedIcon className="mr-2" />
      ) : (
        <></>
      )}
      <span>{label}</span>
    </button>
  );
}

export default CustomButton;
