import React from "react";
import ReactApexChart from "react-apexcharts";

export default function HorizontalChart() {
  const series = [
    {
      name: "Bullish",
      data: [0.4, 0.65, 0, 0, 3.8],
    },
    {
      name: "Bearish",
      data: [0, 0, -1.18, -4.4, 0],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 100,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#00DE4C", "#EE0303"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
      colors: ["#fff"],
    },

    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "0.6rem",
        },
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%";
        },
      },
    },
    title: {
      // text: "Chart Title",
    },
    xaxis: {
      categories: ["TSLA", "AMZN", "NVDA", "MSFT", "AAPL"],
      //   title: {
      //     text: "Percent",
      //   },
      labels: {
        formatter: function (val) {
          return Math.abs(Math.round(val));
        },
      },
    },
    legend: {
      position: "top",
      offsetY: 2,
      offsetX: 130,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={140}
      />
    </div>
  );
}
