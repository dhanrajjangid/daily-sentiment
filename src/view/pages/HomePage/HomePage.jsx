import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import "./Styles/index.css";
import HeatMap from "./HeatMap";
import SearchCard from "./SearchCard";
import DailyComu from "./DailyComu";
import MiniCards from "./MiniCards";
import TableComp from "./TableComp";
import TopTable from "./TopTable";
import BuzzingChart from "./BuzzingChart";

const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {/* first row */}
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={5}>
            <Paper className="paper-back" sx={{ p: 2, height: 450 }}>
              <Typography>Daily Sentiment Heat Map</Typography>

              <Grid item>
                <HeatMap />
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={2}>
            <Paper className="paper-back" sx={{ p: 2, height: 450 }}>
              <SearchCard />
            </Paper>
          </Grid>
          <Grid item md={5}>
            <Paper className="paper-back" sx={{ p: 2, height: 450 }}>
              <Grid
                item
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>DAILY CUMULATIVE 5 MIN</Typography>
                <Grid item>
                  <DailyComu />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* second row */}
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Grid container item spacing={2}>
          <Grid container item spacing={0.5} md={5}>
            <Grid
              item
              md={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item md={5}>
                <MiniCards />
              </Grid>
              <Grid item md={5}>
                <MiniCards />
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Paper className="paper-back" sx={{ p: 2, height: 300 }}>
                <Grid>
                  <DailyComu />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          {/* second item */}

          {/* third item */}
          <Grid item md={7} xs={12}>
            <Paper className="paper-back" sx={{ p: 2, height: 375 }}>
              <TableComp />
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* third row */}
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Paper className="paper-back" sx={{ p: 2, height: 450 }}>
              <Typography>TOP MENTIOINS STOCK - WALLSTREET BET</Typography>

              <Grid item>
                <TopTable />
              </Grid>
            </Paper>
          </Grid>

          <Grid item md={6}>
            <Paper className="paper-back" sx={{ p: 2, height: 450 }}>
              <Grid
                item
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>TOP BUZZING STOCKS</Typography>
                <Grid item>
                  <BuzzingChart />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
