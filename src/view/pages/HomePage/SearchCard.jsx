import {
  Grid,
  InputBase,
  CircularProgress,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import React from "react";

const SearchCard = () => {
  return (
    <Grid container spacing={0.5} sx={{ display: "flex" }}>
      {/* first column */}
      <Grid container item spacing={2}>
        <Grid item fullWidth>
          <InputBase
            sx={{ backgroundColor: "white", borderRadius: "5px", px: 1 }}
            placeholder="Search"
          />
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "60%", maxHeight: "60%" }}
            src="https://www.freepnglogos.com/uploads/tesla-logo-png-27.png"
            alt=""
          />
          <Typography>TSLA</Typography>
          <Typography>$265.12</Typography>
        </Grid>

        {/* <Grid item md={12} sx={{ display: "inline-block" }}>
          <Box
            class="outer_circle"
            sx={{
              displau: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography>Sentiment</Typography>
            <Typography variant="h6">26.00%</Typography>
            <Typography>Bearish</Typography>
          </Box>
        </Grid> */}
        <Grid item md={12}></Grid>
      </Grid>
    </Grid>
  );
};

export default SearchCard;
