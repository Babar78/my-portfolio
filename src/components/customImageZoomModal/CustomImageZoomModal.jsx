import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function CustomImageZoomModal({ openModal, ImageSource, handleClose }) {
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
        <Box sx={style} className="customImageModal">
          <img src={ImageSource} alt="zoomed" />
        </Box>
      </Modal>
    </div>
  );
}

export default CustomImageZoomModal;
