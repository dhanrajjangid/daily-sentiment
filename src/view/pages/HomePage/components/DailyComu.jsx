import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

ChartJS.register(...registerables);

function DailyComu() {
  const series = [
    {
      name: "Bullish",
      data: [
        30, 50, 20, 40, 50, 30, 20, 110, 30, 50, 20, 40, 50, 30, 20, 110, 30,
        50, 20, 40, 50, 30, 20, 110, 30, 50, 20, 40, 50, 30, 20, 110, 30, 50,
      ],
    },
    {
      name: "Neutral",
      data: [
        40, 20, 15, 25, 20, 20, 18, 24, 40, 20, 15, 25, 20, 20, 18, 24, 40, 20,
        15, 25, 20, 20, 18, 24, 40, 20, 15, 25, 20, 20, 18, 24, 40, 20,
      ],
    },
    {
      name: "Bearish",
      data: [
        40, 30, 10, 50, 15, 35, 30, 40, 40, 30, 10, 50, 15, 35, 30, 40, 40, 30,
        10, 50, 15, 35, 30, 40, 40, 30, 10, 50, 15, 35, 30, 40, 40, 30,
      ],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 200,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },

    tooltip: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 1,
        dataLabels: {
          // total: {
          //   enabled: false,
          // },
        },
      },
    },
    xaxis: {
      categories: [
        "09:30",
        "09:40",
        "09:50",
        "10:00",
        "10:10",
        "10:20",
        "10:30",
        "10:40",
        "10:50",
        "11:00",
        "11:10",
        "11:20",
        "11:30",
        "11:40",
        "11:50",
        "12:00",
        "12:10",
        "12:20",
        "12:30",
        "12:40",
        "12:50",
        "01:00",
        "01:10",
        "01:20",
        "01:30",
        "01:40",
        "01:50",
        "02:00",
        "02:10",
        "02:20",
        "02:30",
        "02:40",
        "02:50",
        "03:00",
      ],
      tickAmount: 10,
      labels: {
        hideOverlappingLabels: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#039000", "#CFDFF2", "#EE0303"],
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    legend: {
      position: "top",
      offsetY: 10,
      offsetX: 30,
    },
  };

  // const options = {
  //   legend: { display: false },
  //   scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
  //   plugins: {
  //     datalabels: false,
  //   },
  // };

  return (
    <>
      <Box className="daily-commulative-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={180}
        />
      </Box>
    </>
  );
}

export default DailyComu;
