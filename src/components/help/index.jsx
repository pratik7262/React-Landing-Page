import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { center } from "../../styles/commonStyles";

const Help = () => {
  return (
    <Box component="section" sx={center} height="223px" margin='50px 0'>
      <Container height="100%" sx={{...center,flexDirection:'column'}}>
        <Box
          flex="1"
          sx={{ ...center, border: "3px solid black", padding: "24px" }}
        >
          <Typography variant="h1" textAlign="center" fontWeight={700}>
            GOT ANY QUESTIONS? NEED HELP?
          </Typography>
        </Box>
        <Typography fontFamily="work sans " sx={{margin:'24px 0'}} variant="h3">
          We are here to help. Get in touch!
        </Typography>
        <img src="/images/producBuoy.svg" alt="img" height='60px' width='60px'/>
      </Container>
    </Box>
  );
};

export default Help;
