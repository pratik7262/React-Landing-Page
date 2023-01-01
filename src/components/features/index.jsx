import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { alignCenter, center } from "../../styles/commonStyles";

const GridItem = ({ url, title, summery }) => {
  return (
    <Grid item xs={12} padding='0 24px' mt='50px' flex={1} flexDirection="column" sx={center} lg={4}>
      <img
        src={`/images/features/${url}`}
        height="55px"
        width="55px"
        alt="img"
      />
      <Typography variant="h3" margin="40px 0" fontWeight={700}>
        {title}
      </Typography>
      <Typography fontFamily="work sans " variant="h3">
        {summery}
      </Typography>
    </Grid>
  );
};

const Features = () => {
  return (
    <Box component='section' height={{ xs: "", lg: "683px" }} sx={center}>
      <Container height="100%">
        <Grid
          container
          direction={{ xs: "column", lg: "row" }}
          sx={{ height: "100%", width: "100%",...alignCenter}}
        >
          <GridItem
            url="productValues1.svg"
            title="THE BEST LUXURY HOTELS"
            summery="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few"
          />
          <GridItem
            url="productValues2.svg"
            title="NEW EXPERIENCES"
            summery="Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike."
          />
          <GridItem
            url="productValues3.svg"
            title="EXCLUSIVE RATES"
            summery="By registering, you will access specially negotiated rates that you will not find anywhere else."
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
