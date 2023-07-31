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
];

export default function TableComp() {
  return (
    <Box className="table-component">
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
        </tr>
        {rows.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>12</td>
              <td>Accountant</td>
            </tr>
          );
        })}
      </table>
    </Box>
  );
}
