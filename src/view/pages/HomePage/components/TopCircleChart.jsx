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
    cutout: 25,
    title: {
      display: true,
      text: "Total Feedback",
      fontSize: 30,
    },

    plugins: {
      legend: false,
      datalabels: false,
    },
  };

  const newText = () => {
    return (
      <>
        <p>newText</p>
      </>
    );
  };

  const drawInnerText = (chart) => {
    let ctx = chart.ctx;
    ctx.restore();
    const fontSize = (chart.height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.color = "white";

    ctx.textBaseline = "middle";
    const dataArrValues = chart.config._config.data.datasets[0].data;
    let text = "TSLA";
    let textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
    let textY = chart.height / 2;
    ctx.fillText(text, textX, textY);
    ctx.fillStyle = "#fff";
    ctx.save();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: props.item.bgColor,
          p: 1,
          borderRadius: "0.2rem",
          padding: "0.4rem 0.4rem",
        }}
      >
        <div className="doughnut-chart" style={{ marginBottom: "0.5rem" }}>
          <Doughnut
            data={donutChart}
            options={options}
            plugins={[
              {
                beforeDraw: function (chart) {
                  drawInnerText(chart);
                },
              },
            ]}
          />
        </div>

        {/* <Typography sx={{ fontSize: "0.8rem" }}>SENTIMENT</Typography> */}

        <Typography>16</Typography>
        <Typography sx={{ fontSize: "0.9rem" }}>452.68</Typography>
      </Box>
    </>
  );
}
