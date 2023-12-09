import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function CustomModal({ openModal, websiteLink, handleClose }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} // Use the handleClose prop directly
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="customModal">
          <h6 className="font-bold">Private Project Repository!</h6>
          <p className="text-[12px] my-5">
            The Project's repository is private and cannot be shared publicly
            due to the company's
            <span className="text-[#b91813]"> Rules and Regulations.</span>
          </p>
          <div className="flex justify-end">
            <a
              href={websiteLink}
              target="_blank"
              className="text-[#b91813] text-[14px] bg-white p-2 rounded-md border border-[#b91813]"
            >
              Go to Live Website
            </a>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
