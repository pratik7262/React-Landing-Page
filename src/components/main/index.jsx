import { Box, Container, Typography } from "@mui/material";
import { center } from "../../styles/commonStyles";
import React from "react";
import { Btn, Highlighter } from "../common";

const Main = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('images/cover5.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: { xs: "", md: "-250px" },
        backgroundSize: { xs: "100% 525px", md: "100%" },
        height: { xs: "525px", md: "596px" },
        ...center,
      }}
    >
      <Container
        sx={{
          ...center,
          padding: "0 24px",
          margin: "24px 29px 112px 29px",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" fontWeight={700} sx={{ color: "white" }} textAlign="center">
          UPGRADE YOUR SUNDAYS
        </Typography>
        <Highlighter/>
        <Typography
          variant="h3"
          sx={{ margin: "80px 0 32px 0",color: "white" }}
          textAlign="center"
        >
          Enjoy secret offers up to -70% off the best luxury hotels every
          Sunday.
        </Typography>
        <Btn text='REGISTER' />
        <Typography
          sx={{ color: "white" }}
          variant="body1"
          mt="24px"
          component="p"
        >
          Discover The Experiance
        </Typography>
      </Container>
    </Box>
  );
};

export default Main;
