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
  Divider,
} from "@mui/material";
import React from "react";
import "./Styles/index.css";
import HeatMap from "./components/HeatMap";
import SearchCard from "./components/SearchCard";
import DailyComu from "./components/DailyComu";
import MiniCards from "./components/MiniCards";
import TableComp from "./components/TableComp";
import TopTable from "./components/TopTable";
import BuzzingChart from "./components/BuzzingChart";
import SentimentCard from "./components/SentimentCard";
import HorizontalChart from "./components/HorizontalChart";

const Home = () => {
  console.log(window.innerWidth, "width");
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box className="home-box" sx={{ mt: 4 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 2,
          px: window.innerWidth < 480 ? 1 : 0,
        }}
      >
        <Typography variant="h4">DAILY SENTIMENT</Typography>
        <Grid item md={2.7} sm={10}>
          <hr
            style={{
              width: "100%",
              backgroundColor: "#7E007B",
              border: "none",
              height: "0.2rem",
            }}
          />
        </Grid>
      </Grid>
      {/* first row */}
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Paper className="paper-back" sx={{ p: 2, height: 450 }}>
              <Typography>Daily Sentiment Heat Map</Typography>

              <Grid item>
                <HeatMap />
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={2} xs={12}>
            <Paper
              className="paper-back"
              sx={{
                px: 1,
                py: 2,
                height: window.innerWidth < 480 ? 520 : 450,
              }}
            >
              <SearchCard />
            </Paper>
          </Grid>
          <Grid item md={5} xs={12}>
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
          <Grid container item spacing={0.5} md={5} xs={12}>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item md={5} xs={12} sx={{ overflow: "auto" }}>
                <MiniCards />
              </Grid>
              <Grid item md={5} xs={12}>
                <MiniCards />
              </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
              <Paper className="paper-back" sx={{ p: 2, height: 300 }}>
                <Grid>
                  <HorizontalChart />
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
        <Grid container>
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              px: 2,
              py: 2,
              height: 280,
              overflow: "auto",
            }}
          >
            {/* <Typography sx={{ marginBottom: "1rem" }}>SENTIMENT</Typography> */}

            <Grid item sx={{ display: "flex", gap: "1rem" }}>
              <SentimentCard />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* fourth row */}
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Paper className="paper-back" sx={{ p: 3, height: 450 }}>
              <Typography>TOP MENTIOINS STOCK - WALLSTREET BET</Typography>

              <Grid item sx={{ height: "100%" }}>
                <TopTable />
              </Grid>
            </Paper>
          </Grid>

          <Grid item md={6} xs={12}>
            <Paper className="paper-back" sx={{ p: 3, height: 450 }}>
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
                <Grid item sx={{ height: "90%" }}>
                  <BuzzingChart />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
