import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

function DailyComu() {
  const data = {
    labels: [
      "08:45",
      "08:55",
      "09:05",
      "09:15",
      "09:25",
      "09:35",
      "09:45",
      "09:55",
      "10:05",
      "10:15",
      "10:25",
      "10:35",
      "10:45",
      "10:55",
      "11:05",
      "11:15",
      "11:25",
      "11:35",
      "11:45",
      "11:55",
      "12:05",
      "12:15",
      "12:25",
      "12:35",
      "12:45",
      "12:55",
      "01:05",
      "01:15",
      "01:25",
      "01:35",
      "01:45",
      "01:55",
      "02:05",
      "02:15",
      "02:25",
      "02:35",
      "02:45",
      "02:55",
      "03:05",
      "03:15",
    ],
    datasets: [
      {
        label: "Bullish",
        backgroundColor: "#039000",
        stack: "2",
        data: [
          30, 50, 20, 40, 50, 30, 20, 110, 30, 50, 20, 40, 50, 30, 20, 110, 30,
          50, 20, 40, 50, 30, 20, 110, 30, 50, 20, 40, 50, 30, 20, 110, 30, 50,
          20, 40, 50, 30, 20, 110, 30, 50, 20, 110, 30, 50,
        ],
      },
      {
        label: "Neutral",
        backgroundColor: "#CFDFF2",
        stack: "2",
        data: [
          40, 20, 15, 25, 20, 20, 18, 24, 40, 20, 15, 25, 20, 20, 18, 24, 40,
          20, 15, 25, 20, 20, 18, 24, 40, 20, 15, 25, 20, 20, 18, 24, 40, 20,
          15, 25, 20, 20, 18, 24, 40, 20, 18, 24, 40, 20,
        ],
      },
      {
        label: "Bearish",
        backgroundColor: "#EE0303",
        stack: "2",
        data: [
          40, 30, 10, 50, 15, 35, 30, 40, 40, 30, 10, 50, 15, 35, 30, 40, 40,
          30, 10, 50, 15, 35, 30, 40, 40, 30, 10, 50, 15, 35, 30, 40, 40, 30,
          10, 50, 15, 35, 30, 40, 40, 30, 10, 50, 15, 35, 30, 40,
        ],
      },
    ],
  };

  const options = {
    legend: { display: false },
    scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
    plugins: {
      datalabels: false,
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}

export default DailyComu;
