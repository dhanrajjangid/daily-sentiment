import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HeatMap() {
  return (
    <Grid container spacing={0.5} sx={{ display: "flex" }}>
      {/* first column */}
      <Grid container item md={4} spacing={0.5}>
        <Grid item md={12}>
          <Item sx={{ height: 280, backgroundColor: "#B3BBB7" }}>1</Item>
        </Grid>
        <Grid container item md={12} spacing={0.5}>
          <Grid item md={6}>
            <Item sx={{ height: 100, backgroundColor: "#B70606" }}>2</Item>
          </Grid>
          <Grid item md={6}>
            <Item sx={{ height: 100, backgroundColor: "#27D276" }}>3</Item>
          </Grid>
        </Grid>
      </Grid>
      {/* second column */}
      <Grid container item md={4} spacing={0.5}>
        <Grid item md={12}>
          <Item sx={{ height: 130, backgroundColor: "#27D276" }}>4</Item>
        </Grid>
        <Grid item md={12}>
          <Item sx={{ height: 250, backgroundColor: "#B3BBB7" }}>5</Item>
        </Grid>
      </Grid>
      {/* third column */}
      <Grid container item md={4} spacing={0.5}>
        <Grid item md={12}>
          <Item sx={{ height: 130, backgroundColor: "#B70606" }}>6</Item>
        </Grid>
        <Grid container item md={12} spacing={0.5}>
          <Grid item md={6}>
            <Item sx={{ height: 100, backgroundColor: "#27D276" }}>7</Item>
          </Grid>
          <Grid item md={6}>
            <Item sx={{ height: 100, backgroundColor: "#B3BBB7" }}>8</Item>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Item sx={{ height: 130, backgroundColor: "#B70606" }}>9</Item>
        </Grid>
      </Grid>
    </Grid>
  );
}
