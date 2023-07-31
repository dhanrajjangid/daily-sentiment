import React from "react";
import CircleChart from "./CircleChart";
import { Grid } from "@mui/material";

const SentimentCard = () => {
  return (
    <>
      <Grid item md={2.3} sx={{ display: "flex", gap: "1rem" }}>
        <CircleChart />
      </Grid>
      <Grid item md={2.3} sx={{ display: "flex", gap: "1rem" }}>
        <CircleChart />
      </Grid>
      <Grid item md={2.3} sx={{ display: "flex", gap: "1rem" }}>
        <CircleChart />
      </Grid>
      <Grid item md={2.3} sx={{ display: "flex", gap: "1rem" }}>
        <CircleChart />
      </Grid>
      <Grid item md={2.3} sx={{ display: "flex", gap: "1rem" }}>
        <CircleChart />
      </Grid>
    </>
  );
};

export default SentimentCard;
