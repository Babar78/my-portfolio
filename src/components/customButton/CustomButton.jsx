import React from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";


function CustomButton({ label, icon, downloadPdf, pdfFile }) {

  const pdfUrl = `${process.env.PUBLIC_URL}/Resume_Muhammad_Babar.pdf`;

  return downloadPdf ? (
    <a
      href={pdfUrl}
      download="Resume_Muhammad_Babar.pdf"
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
