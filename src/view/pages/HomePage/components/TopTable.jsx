import { Box, Avatar, Button } from "@mui/material";
import * as React from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("AAPL", 159, 6.0, 24, 4.0),
  createData("AAPL", 237, 9.0, 37, 4.3),
  createData("AAPL", 262, 16.0, 24, 6.0),
  createData("AAPL", 305, 3.7, 67, 4.3),
  createData("AAPL", 305, 3.7, 67, 4.3),
  createData("AAPL", 305, 3.7, 67, 4.3),
  createData("AAPL", 305, 3.7, 67, 4.3),
];

export default function TopTable() {
  return (
    <Box className="top-table" sx={{ height: "90%" }}>
      <table style={{ height: "100%", width: "100%" }}>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Today Price</th>
            <th>Total Mention</th>
            <th>Sentiment</th>
            <th>Sentiment Rank</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => {
            return (
              <tr>
                <td>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 30, height: 30 }}
                    />
                    {item.name}
                  </Box>
                </td>
                <td>
                  192.98 <span style={{ color: "#EE0303" }}>(1.09%)</span>
                </td>
                <td>150</td>
                <td>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#EE0303", px: 1, py: 0 }}
                    size="small"
                  >
                    Bearish
                  </Button>
                </td>
                <td>1</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
