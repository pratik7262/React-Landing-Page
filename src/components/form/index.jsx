import { Button, Container, Grid, InputBase, Typography } from "@mui/material";
import React from "react";
import { center } from "../../styles/commonStyles";

const Form = () => {
  return (
    <Container height="407px" sx={{ mb: "50px" }}>
      <Grid container>
        <Grid
          sx={{
            bgcolor: "#ffc071",
            padding: "64px 24px",
            flexDirection: "column",
            ...center,
          }}
          xs={12}
          lg={6}
          item
        >
          <Typography variant="h1" fontWeight={700}>
            RECEIVE OFFERS
          </Typography>
          <Typography fontFamily="work sans " textAlign="center" variant="h3">
            Taste the holidays close to home.
          </Typography>
          <InputBase
            placeholder="Your email"
            sx={{
              height: "55px",
              width: { xs: "300px", lg: "400px" },
              bgcolor: "white",
              color: "black",
              p: "15px",
              margin: "24px 0 16px 0",
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "black.main",
              height: "56px",
              width: { xs: "300px", lg: "400px" },
              "&:hover": { bgcolor: "black.main" },
              fontSize: "24px",
            }}
          >
            KEEP ME UPDATED
          </Button>
        </Grid>
        <Grid
          sx={{ bgcolor: "blue", display: { xs: "none", lg: "flex" } }}
          item
          lg={6}
        >
          <img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="img" height="100%" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
