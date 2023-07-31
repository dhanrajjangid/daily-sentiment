import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MiniCards() {
  return (
    <Card
      item
      sx={{
        display: "flex",
        height: 70,
        borderRadius: "10px ",
        color: "white",
      }}
    >
      <Grid
        container
        item
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#006C32",
        }}
      >
        <Box
          sx={{
            flex: "1 0 auto",
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography>SPY</Typography>
          <Typography sx={{ fontSize: "0.6rem" }}>452.68(0.55%)</Typography>
        </Box>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#B6EDC8",
          px: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            height: "10px",
            width: "140px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "green",
              height: "10px",
              width: "10px",
              left: "50%",
            }}
          ></Box>
        </Box>
      </Box>
    </Card>
  );
}
