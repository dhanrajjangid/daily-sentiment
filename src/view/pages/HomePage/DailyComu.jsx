import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

function DailyComu() {
  const data = {
    labels: ["08:45", "08:45", "08:45", "08:45", "08:45", "08:45", "08:45"],
    datasets: [
      {
        label: "Active",
        backgroundColor: "#039000",
        stack: "2",
        data: [30, 50, 20, 40, 50, 30, 20, 110],
      },
      {
        label: "Banned",
        backgroundColor: "#CFDFF2",
        stack: "2",
        data: [40, 20, 15, 25, 20, 20, 18, 24],
      },
      {
        label: "Regular",
        backgroundColor: "#EE0303",
        stack: "2",
        data: [40, 30, 10, 50, 15, 35, 30, 40],
      },
    ],
  };

  const options = {
    legend: { display: false },
    scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}

export default DailyComu;
