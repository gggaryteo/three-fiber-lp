// Modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import PopupForm from "./PopupForm";

import './FormModal.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: "75%",
  },
};

/*=============================================*/

const FormModal = ({ openModal, setOpenModal }) => {
  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModal}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="div">
            <div className="close-icon" onClick={handleClose}>
              ⓧ
            </div>
            <h2> GET STARTED </h2>
          </Typography>
          <Typography
            id="transition-modal-description"
            sx={{ mt: 2 }}
            component="div"
          >
            <PopupForm/>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default FormModal;
