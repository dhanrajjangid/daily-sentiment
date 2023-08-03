import * as React from "react";
import Box from "@mui/material/Box";
import { styled, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

function createData(bgColor, height, fat, image, protein) {
  return { bgColor, height, fat, image, protein };
}
const heights = [
  createData(
    "#B3BBB7",
    80,
    6.0,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.0
  ),
  createData(
    "#27D276",
    80,
    9.0,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png",
    4.3
  ),
  createData(
    "#B70606",
    80,
    16.0,
    "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    6.0
  ),
  createData(
    "#B3BBB7",
    80,
    3.7,
    "https://www.freepnglogos.com/uploads/tesla-logo-png-27.png",
    4.3
  ),
  createData(
    "#B3BBB7",
    80,
    3.7,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.3
  ),
  createData(
    "#27D276",
    80,
    3.7,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.3
  ),
  createData(
    "#B70606",
    80,
    3.7,
    "https://img.freepik.com/free-icon/microsoft_318-566086.jpg",
    4.3
  ),
  createData(
    "#B70606",
    80,
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
      <Masonry columns={4} spacing={0.5}>
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
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "15px", width: "15px" }}
                    src={item.image}
                    alt=""
                  />
                </Box>
                <Typography sx={{ fontSize: "0.8rem" }}>MSFT</Typography>
                <Typography sx={{ fontSize: "0.8rem" }}>20</Typography>
              </Box>
            </Item>
          );
        })}
      </Masonry>
    </Box>
  );
}
