import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography, Paper } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { NoEncryption } from "@mui/icons-material";

export default function TopCircleChart(props) {
  const donutChart = {
    labels: ["1 star", "2 star"],
    datasets: [
      {
        data: [10, 50],
        // backgroundColor: ["#808080", "#808080", "#808080", "#808080"],
        backgroundColor: [props.item.circleColour, "#808080"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    padding: "0px",
    responsive: true,
    maintainAspectRatio: true,
    defaultFontSize: "14px",
    cutout: 42,
    title: {
      display: true,
      // text: "Total Feedback",
      fontSize: 30,
    },

    plugins: {
      legend: false,
      datalabels: false,
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div
      className="doughnut-chart-top"
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      <Doughnut data={donutChart} options={options} />

      <Box
        sx={{
          position: "absolute",

          height: "115px",
          width: "115px",
          top: "0%",
          left: "0%",
          borderRadius: "50%",

          zIndex: -1,
          backgroundColor: props.item.bgColor,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            pt: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>SENTIMENT</Typography>
          <hr
            style={{
              width: "60%",
              margin: 0,
              height: "0.1rem",
              border: 0,
              backgroundColor: "#E21111",
            }}
          />

          <Typography variant="h5">26</Typography>
          <Typography sx={{ fontSize: "0.7rem" }}>Bearish</Typography>
        </Box>
      </Box>
    </div>
  );
}
