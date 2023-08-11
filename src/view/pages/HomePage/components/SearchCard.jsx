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

const SearchCard = (props) => {
  const topSearchData = props.searchData;
  const priceChange = props.searchData.price?.price_change?.toFixed(2);
  const percentChange = props.searchData.price?.price_change_percentage;

  console.log(topSearchData, 10101010);
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

          <Typography variant="h6">{topSearchData?.price?.Symbol}</Typography>

          <Typography sx={{ fontSize: "0.8rem" }}>
            {/* ${topSearchData?.price?.price} */}${props.price}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color:
                priceChange > 0
                  ? "#00DE4C"
                  : priceChange < 0
                  ? "#DE0000"
                  : "#FFE70F",
            }}
          >
            {`${priceChange} (${percentChange} )`}
          </Typography>
        </Grid>

        <Grid item md={6} xs={6} sm={6} sx={{ height: "60%" }}>
          <TopCircleChart item={dataObj} topSearchData={topSearchData} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchCard;
