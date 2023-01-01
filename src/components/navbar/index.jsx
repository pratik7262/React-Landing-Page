import { Box, Typography } from "@mui/material";
import React from "react";
import { spaceBetween } from "../../styles/commonStyles";

const Typo = ({ text,col}) => {
  return (
    <Typography
      variant="h3"
      component="a"
      href="#"
      fontSize={20}
      fontWeight='bold'
      sx={{ textDecoration: "none", color: col }}
    >
      {text}
    </Typography>
  );
};

const Navbar = () => {
  return (
    <Box
      height={70}
      sx={{
        backgroundColor: "black.main",
        ...spaceBetween,
        color: "white",
        p: "24px",
      }}
      width="100%"
    >
      <Box height={70} width={130}></Box>
      <Box>
        <Typography variant="h3" textAlign='center' fontWeight={700}>
          ONEPIRATE
        </Typography>
      </Box>
      <Box width="130px" sx={spaceBetween}>
       <Typo text={'Sign In'} col='white'/>
        <Typo text={'Sign Up' } col='primary.main'/>
      </Box>
    </Box>
  );
};

export default Navbar;
