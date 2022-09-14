import { Add } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import React from "react";
import BasicModal from "../BasicModal/BesicModal";
const AddBtn: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <BasicModal open={open} handleClose={handleClose} />
      <Tooltip title="Add" arrow sx={{ position: "fixed", bottom: "20px", left: { xs: "calc(50% - 25px)", md: "20px" } }}>
        <Fab onClick={handleOpen} color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
    </>
  );
};
export default AddBtn;
