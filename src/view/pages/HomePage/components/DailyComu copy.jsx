import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

function DailyComu() {
  const data = {
    labels: [
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
    datasets: [
      {
        label: "Bullish",
        backgroundColor: "#039000",
        stack: "2",
        data: [
          30, 50, 20, 40, 50, 30, 20, 110, 30, 50, 20, 40, 50, 30, 20, 110, 30,
          50, 20, 40, 50, 30, 20, 110, 30, 50, 20, 40, 50, 30, 20, 110, 30, 50,
          20, 40, 50, 30, 20, 110,
        ],
      },
      {
        label: "Neutral",
        backgroundColor: "#CFDFF2",
        stack: "2",
        data: [
          40, 20, 15, 25, 20, 20, 18, 24, 40, 20, 15, 25, 20, 20, 18, 24, 40,
          20, 15, 25, 20, 20, 18, 24, 40, 20, 15, 25, 20, 20, 18, 24, 40, 20,
          15, 25, 20, 20, 18, 24, 40,
        ],
      },
      {
        label: "Bearish",
        backgroundColor: "#EE0303",
        stack: "2",
        data: [
          40, 30, 10, 50, 15, 35, 30, 40, 40, 30, 10, 50, 15, 35, 30, 40, 40,
          30, 10, 50, 15, 35, 30, 40, 40, 30, 10, 50, 15, 35, 30, 40, 40, 30,
          10, 50, 15, 35, 30, 40, 40, 30, 10,
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
