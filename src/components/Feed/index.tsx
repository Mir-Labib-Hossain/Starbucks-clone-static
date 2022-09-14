import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import CardItem from "../CardItem";

const Feed: React.FC = () => {
  const Row = styled("div")({
    // display: "flex",
    // flexWrap: "wrap",
  });
  return (
    <Box flex={8} display="flex" justifyContent="space-evenly" flexWrap="wrap">
      <Row>
        <CardItem img="/src/assets/images/c1.jpeg" />
        <CardItem img="/src/assets/images/c2.jpeg" />
        <CardItem img="/src/assets/images/c3.jpeg" />
        <CardItem img="/src/assets/images/c4.jpeg" />
      </Row>
    
      <Row>
        <CardItem img="/src/assets/images/c7.jpeg" />
        <CardItem img="/src/assets/images/c8.jpeg" />
        <CardItem img="/src/assets/images/c9.jpeg" />
        <CardItem img="/src/assets/images/c6.jpeg" />
      </Row>  <Row>
        <CardItem img="/src/assets/images/c4.jpeg" />
        <CardItem img="/src/assets/images/c5.jpeg" />
        <CardItem img="/src/assets/images/c6.jpeg" />
        <CardItem img="/src/assets/images/c7.jpeg" />
      </Row>
    </Box>
  );
};

export default Feed;
