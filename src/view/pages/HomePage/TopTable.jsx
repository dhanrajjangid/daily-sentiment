import { Box } from "@mui/material";
import * as React from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
];

export default function TopTable() {
  return (
    <Box className="top-table">
      <table style={{ maxHeight: "100%" }}>
        <tr>
          <th>Stock Name</th>
          <th>Today Price</th>
          <th>Total Mention</th>
          <th>Sentiment</th>
          <th>Sentiment Rank</th>
        </tr>
        {rows.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>12</td>
              <td>Accountant</td>
              <td>Accountant</td>
              <td>Accountant</td>
            </tr>
          );
        })}
      </table>
    </Box>
  );
}
