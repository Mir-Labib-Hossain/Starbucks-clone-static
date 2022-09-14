import styled from "@emotion/styled";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../styles/theme";
import ConvList from "../ConvList";
import Steper from "../Steper";
const Rightbar: React.FC = () => {
  const RightBarContainer = styled(Box)(({ theme: any }) => ({
    backgroundColor: theme.palette.primary.light,
    flex: 2,
    overflow: "scroll",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  }));
  return (
    <RightBarContainer>
      <Box position="fixed" p={2}>
        <Typography variant="h6" fontWeight={100}>
          Our Community
        </Typography>

        <AvatarGroup total={8}>
          <Avatar alt="Remy Sharp" src="/src/assets/images/avatar1.jpg" />
          <Avatar alt="Travis Howard" src="/src/assets/images/avatar2.jpg" />
          <Avatar alt="Agnes Walker" src="/src/assets/images/avatar4.jpg" />
          <Avatar alt="Trevor Henderson" src="/src/assets/images/avatar3.jpg" />
        </AvatarGroup>
        <Steper />
        <ConvList/>
      </Box>
    </RightBarContainer>
  );
};
export default Rightbar;
