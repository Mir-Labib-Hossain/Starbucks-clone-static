import { AddLink } from "@mui/icons-material";
import { Avatar, Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { theme } from "../../styles/theme";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: theme.palette.background.default,
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
console.log(theme.palette.background.default);

const BasicModal: React.FC<any> = ({ open, handleClose }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} >
          <Box display="flex" alignItems="center" gap="10px" mb={2}>
            <Avatar alt="Remy Sharp" src="/src/assets/images/avatar1.jpg" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Mir Labib Hossain
            </Typography>
          </Box>
          <TextField id="demo-helper-text-misaligned-no-helper" label="Img URL" placeholder="https://abc.jpg" sx={{ width: "100%" }} />

          <Typography id="modal-modal-description" mb={2} mt={2} textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam veniam provident corporis quisquam ut atque, vero sequi neque quas tempora iusto animi explicabo adipisci odio repellat soluta dolorum totam?
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" endIcon={<AddLink />}>
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
