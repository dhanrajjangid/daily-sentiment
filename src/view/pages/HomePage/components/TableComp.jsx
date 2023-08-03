import { Box, Avatar } from "@mui/material";
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
  createData("Cupcake", 305, 3.7, 67, 4.3),
];

export default function TableComp() {
  return (
    <Box className="table-component">
      <table id="customers">
        <tr>
          <th></th>
          <th></th>
          <th>Today</th>
          <th>1 Day Ago</th>
          <th>2 Day Ago</th>
          <th>Last Week</th>
          <th>Last Month</th>
          <th>Last Six Month</th>
          <th>Last Year</th>
        </tr>
        {rows.map((item) => {
          return (
            <tr className="table-data-row">
              <td>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 35, height: 35 }}
                />
              </td>
              <td>AAPL</td>
              <td>
                <span style={{ color: "#00A939" }}>
                  192 <br />
                  <span style={{ fontSize: "0.6rem" }}>1.25 (2.3%)</span>
                </span>
              </td>
              <td>
                <span style={{ color: "#DC1B1B" }}>
                  192 <br />
                  <span style={{ fontSize: "0.6rem" }}>1.25 (2.3%)</span>
                </span>
              </td>
              <td>
                <span style={{ color: "#00A939" }}>
                  192 <br />
                  <span style={{ fontSize: "0.6rem" }}>1.25 (2.3%)</span>
                </span>
              </td>
              <td>
                <span style={{ color: "#DC1B1B" }}>
                  192 <br />
                  <span style={{ fontSize: "0.6rem" }}>1.25 (2.3%)</span>
                </span>
              </td>
              <td>
                <span style={{ color: "#00A939" }}>
                  192 <br />
                  <span style={{ fontSize: "0.6rem" }}>1.25 (2.3%)</span>
                </span>
              </td>
              <td>
                <span style={{ color: "#DC1B1B" }}>
                  192 <br />
                  <span style={{ fontSize: "0.6rem" }}>1.25 (2.3%)</span>
                </span>
              </td>
              <td>
                <span style={{ color: "#00A939" }}>
                  192 <br />
                  <span style={{ fontSize: "0.6rem" }}>1.25 (2.3%)</span>
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </Box>
  );
}
