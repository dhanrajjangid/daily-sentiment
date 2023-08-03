import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, Slider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MiniCards() {
  const marks = [
    {
      value: -100,
      label: "Bearish",
    },

    {
      value: 100,
      label: "Bullish",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <Grid container item sx={{ height: "50px" }}>
      <Grid
        item
        md={3.8}
        sx={{
          backgroundColor: "#006D33",
          borderRadius: "0.4rem 0 0 0.4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "1rem" }}> SPY</Typography>
        <Typography sx={{ fontSize: "0.6rem" }}> 452.68(0.55%)</Typography>
      </Grid>
      <Grid
        item
        md={8.2}
        sx={{
          backgroundColor: "#B7ECC8",
          borderRadius: "0 0.4rem 0.4rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="slider-cards"
          sx={{ width: "70%", display: "flex", alignItems: "flex-end" }}
        >
          <Slider
            aria-label="Always visible"
            defaultValue={80}
            min={-100}
            max={100}
            getAriaValueText={valuetext}
            marks={marks}
            valueLabelDisplay="on"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
