import React from "react";
import CircleChart from "./CircleChart";
import { Grid } from "@mui/material";

// const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function createData(circleColour, bgColor, fat, carbs, protein) {
  return { circleColour, bgColor, fat, carbs, protein };
}
const dataArr = [
  createData("#00DE4C", "#004B19", 6.0, 24, 4.0),
  createData("#DE0000", "#4B0000", 9.0, 37, 4.3),
  createData("#FFE70F", "#c2af00", 16.0, 24, 6.0),
  createData("#DE0000", "#4B0000", 3.7, 67, 4.3),
  createData("#00DE4C", "#004B19", 3.7, 67, 4.3),
  createData("#FFE70F", "#c2af00", 3.7, 67, 4.3),
  createData("#00DE4C", "#004B19", 3.7, 67, 4.3),
  createData("#DE0000", "#4B0000", 3.7, 67, 4.3),
  createData("#FFE70F", "#c2af00", 3.7, 67, 4.3),
  createData("#DE0000", "#4B0000", 3.7, 67, 4.3),

  createData("#00DE4C", "#004B19", 3.7, 67, 4.3),
];

const SentimentCard = () => {
  return (
    <>
      <Grid
        className="circle-grid"
        container
        spacing={1}
        wrap="nowrap"
        sx={{ display: "flex", overflowX: "auto" }}
      >
        {dataArr.map((item) => {
          console.log(item, "item");
          return (
            <Grid item md={4}>
              <CircleChart item={item} />
            </Grid>
          );
        })}

        {/* </Grid>
      <Grid item md={2}>
        <CircleChart />
      </Grid>
      <Grid item md={2}>
        <CircleChart />
      </Grid>
      <Grid item md={2}>
        <CircleChart />
      </Grid>
      <Grid item md={2}>
        <CircleChart /> */}
      </Grid>
    </>
  );
};

export default SentimentCard;
