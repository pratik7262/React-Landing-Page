import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { center, alignCenter } from "../../styles/commonStyles";
import { Btn, Highlighter } from "../common";

const GridItem = ({ num, img, text }) => {
  return (
    <Grid
      xs={12}
      padding="0 24px"
      lg={4}
      sx={{ ...center, mt: { xs: "30px", lg: "" }, flexDirection: "column" }}
      item
      height="300px"
    >
      <Typography
        variant="h2"
        fontWeight={700}
        sx={{ color: "primary.main", ...alignCenter }}
      >
        {num}.
      </Typography>
      <img
        src={`/images/workPage/${img}`}
        height="55px"
        style={{ margin: "32px 0" }}
        width="55px"
        alt="img"
      />
      <Typography fontFamily="work sans " textAlign="center" variant="h3">
        {text}
      </Typography>
    </Grid>
  );
};

const WorkPage = () => {
  return (
    <Box
      height={{ xs: "", lg: "752px" }}
      sx={{
        ...center,
        mt: { xs: "100px", lg: "" },
        mb: { xs: "50px", lg: "" },
      }}
      component="section"
    >
      <Container
        sx={{ padding: "0 24px", ...alignCenter, flexDirection: "column" }}
      >
        <Box
          sx={{ ...alignCenter, flexDirection: "column" }}
          mb="112px"
          width="100%"
        >
          <Typography variant="h2" textAlign="center" fontWeight={700}>
            HOW IT WORKS
          </Typography>
          <Highlighter position="relative" />
        </Box>
        <Grid
          container
          direction={{ xs: "column", lg: "row" }}
          sx={{ height: "100%", width: "100%", ...alignCenter }}
        >
          <GridItem
            num="1"
            img="productHowItWorks1.svg"
            text="Appointment every Wednesday 9am."
          />
          <GridItem
            num="2"
            img="productHowItWorks2.svg"
            text="First come, first served. Our offers are in limited quantities, so be quick."
          />
          <GridItem
            num="3"
            img="productHowItWorks3.svg"
            text="New offers every week. New experiences, new surprises. Your Sundays will no longer be alike."
          />
        </Grid>
        <Btn sx={{ mt: "64px" }} text="GET STARTED" />
      </Container>
    </Box>
  );
};

export default WorkPage;
