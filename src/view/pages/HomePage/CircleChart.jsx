import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography, Paper } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CircleChart() {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: "1.5rem",
          backgroundColor: "rgba(0, 75, 25,.9)",
          color: "white",
          border: "8px solid rgba(0, 222, 76,.4) ",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: "1rem",
          }}
        >
          <Typography variant="h5" component="div">
            TSLA
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>452.68(0.55%)</Typography>
          <Typography variant="h5" component="div">
            16
          </Typography>
        </Box>
      </Card>

      <Card
        sx={{
          width: "100%",
          borderRadius: "1.5rem",
          backgroundColor: "rgba(75, 0, 0,.9)",
          color: "white",
          border: "8px solid rgba(222, 0, 0,.4) ",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: "1rem",
          }}
        >
          <Typography variant="h5" component="div">
            TSLA
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>452.68(0.55%)</Typography>
          <Typography variant="h5" component="div">
            16
          </Typography>
        </Box>
      </Card>
    </>
  );
}
