import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

function createData(bgColor, height, fat, image, protein) {
  return { bgColor, height, fat, image, protein };
}
const heights = [
  createData(
    "#B3BBB7",
    270,
    6.0,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.0
  ),
  createData(
    "#27D276",
    160,
    9.0,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png",
    4.3
  ),
  createData(
    "#B70606",
    160,
    16.0,
    "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    6.0
  ),
  createData(
    "#B3BBB7",
    105,
    3.7,
    "https://www.freepnglogos.com/uploads/tesla-logo-png-27.png",
    4.3
  ),
  createData(
    "#B3BBB7",
    105,
    3.7,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.3
  ),
  createData(
    "#27D276",
    140,
    3.7,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.3
  ),
  createData(
    "#B70606",
    140,
    3.7,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.3
  ),
  createData(
    "#B70606",
    140,
    3.7,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.3
  ),
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
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px" }}
                    src={item.image}
                    alt=""
                  />
                </Box>
              </Box>
            </Item>
          );
        })}
      </Masonry>
    </Box>
  );
}
