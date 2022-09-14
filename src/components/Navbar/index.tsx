import { EmojiFoodBeverage, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/system";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const LeftBox = styled(Box)({
  display: "flex",
});

const RightBox = styled(Box)({
  display: "flex",
  gap: "20px",
});

const SearchBox = styled(InputBase)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  margin: "0 10px",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  // [theme.breakpoints.up("sm")]: {
  //   display: "flex",
  // },
}));

const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer"
}));

const Navbar: React.FC = () => {
  // user dropdown
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <LeftBox>
          <EmojiFoodBeverage sx={{ display: { xs: "block", sm: "none" } }} />
          <Typography variant="h3" fontFamily="'Caveat', cursive;" sx={{ display: { xs: "none", sm: "block" } }}>
            Toffeee
          </Typography>
        </LeftBox>
        <SearchBox placeholder="Search . . ."></SearchBox>
        <RightBox>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={9} color="error">
              <Notifications />
            </Badge>
          </Icons>
          <UserBox onClick={handleClose}>
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg" />
            <Typography variant="subtitle1" sx={{ display: { xs: "none", sm: "block" } }}>
              Labib
            </Typography>
          </UserBox>
        </RightBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;
