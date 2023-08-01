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

      <Grid item md={12} xs={12} sm={8}>
        <InputBase
          fullWidth
          sx={{ backgroundColor: "white", borderRadius: "5px", px: 1 }}
          placeholder="Search"
        />
      </Grid>
      <Grid container item sx={{ display: "flex" }} md={12} sm={12}>
        <Grid item sx={{ textAlign: "center" }} md={12} xs={12} sm={6}>
          <img
            style={{ maxWidth: "60%", maxHeight: "60%" }}
            src="https://www.freepnglogos.com/uploads/tesla-logo-png-27.png"
            alt=""
          />
          <Typography>TSLA</Typography>
          <Typography>$265.12</Typography>
        </Grid>

        <Grid item md={12} xs={12} sm={6}>
          <TopCircleChart item={dataObj} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchCard;
