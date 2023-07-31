import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

function createData(bgColor, height, fat, carbs, protein) {
  return { bgColor, height, fat, carbs, protein };
}
const heights = [
  createData("#B3BBB7", 270, 6.0, 24, 4.0),
  createData("#27D276", 160, 9.0, 37, 4.3),
  createData("#B70606", 160, 16.0, 24, 6.0),
  createData("#B3BBB7", 105, 3.7, 67, 4.3),
  createData("#B3BBB7", 105, 3.7, 67, 4.3),
  createData("#27D276", 140, 3.7, 67, 4.3),
  createData("#B70606", 140, 3.7, 67, 4.3),
  createData("#B70606", 140, 3.7, 67, 4.3),
];

// const heights = [270, 160, 160, 105, 105, 140, 140, 140];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FixedSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Masonry columns={3} spacing={0.5}>
        {heights.map((item, index) => {
          let heights = item.height;
          return (
            <Item
              key={index}
              sx={{ height: heights, backgroundColor: item.bgColor }}
            ></Item>
          );
        })}
      </Masonry>
    </Box>
  );
}
