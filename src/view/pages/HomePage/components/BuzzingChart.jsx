import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

function BuzzingChart() {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 200,
      toolbar: {
        show: false,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "APPL",
        "TSLA",
        "MSFT",
        "META",
        "NETL",
        "AAPL",
        "TSLA",
        "META",
        "MSFT",
        "TSLA",
      ],
      labels: {
        style: {
          fontSize: "0.6rem",
        },
      },
    },
  };

  return (
    <>
      <Box>
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

export default BuzzingChart;
