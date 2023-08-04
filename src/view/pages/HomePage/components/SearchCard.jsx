import {
  Grid,
  InputBase,
  CircularProgress,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import React from "react";
import TopCircleChart from "./TopCircleChart";

const SearchCard = () => {
  const dataObj =
    // { circleColour: "#00DE4C", bgColor: "#004B19" };
    { circleColour: "#DE0000", bgColor: "#4B0000" };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
      }}
    >
      {/* first column */}

      <Grid item md={10} xs={10} sm={0}>
        <InputBase
          fullWidth
          sx={{ backgroundColor: "white", borderRadius: "3px", px: 1 }}
          placeholder="Search"
        />
      </Grid>
      <Grid container item sx={{ display: "flex" }} md={12} sm={12}>
        <Grid
          item
          sx={{ textAlign: "center", height: "40%" }}
          md={6}
          xs={6}
          sm={6}
        >
          <img
            style={{ maxWidth: "80%", maxHeight: "80%" }}
            src="https://www.freepnglogos.com/uploads/tesla-logo-png-27.png"
            alt=""
          />

          <Typography variant="h6">TSLA</Typography>

          <Typography sx={{ fontSize: "0.8rem" }}>$265.12</Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>1.22(0.55%)</Typography>
        </Grid>

        <Grid item md={6} xs={6} sm={6} sx={{ height: "60%" }}>
          <TopCircleChart item={dataObj} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchCard;
