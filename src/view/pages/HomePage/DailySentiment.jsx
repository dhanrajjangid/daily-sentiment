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
import React, { useEffect } from "react";
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
import axios from "axios";
import MiniCardsBearish from "./components/MiniCardsBearish";

const DailySentiment = () => {
  // const latestListing = async (params) => {
  //   axios
  //     .get("http://127.0.0.1:5000/daily-hot-list")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //     });
  // };

  // useEffect(() => {
  //   latestListing();
  // }, []);

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 0,
          px: window.innerWidth < 480 ? 1 : 0,
        }}
      >
        {/* <Typography variant="h6">DAILY SENTIMENT</Typography> */}
      </Grid>
      {/* first row */}
      <Box sx={{ flexGrow: 1, mb: 1 }}>
        <Grid container spacing={0.5}>
          <Grid item md={2.8} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: 190 }}>
              <Typography>DAILY SENTIMENT HEAT MAP</Typography>

              <HeatMap />
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper
              className="paper-back"
              sx={{
                px: 1,
                py: 1,
                height: 190,
              }}
            >
              <SearchCard />
            </Paper>
          </Grid>

          {/* daily commulative chart */}
          <Grid item md={3.1} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: 190 }}>
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

          {/* top buzzing chart */}
          <Grid item md={3.1} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: 190 }}>
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

      {/* second row */}
      <Box sx={{ flexGrow: 1, mb: 1 }}>
        <Grid container spacing={1}>
          {/* first item - column */}
          <Grid
            container
            item
            md={2.8}
            xs={12}
            spacing={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item md={12} xs={12} sx={{ height: "40%" }}>
              <MiniCards />
            </Grid>
            <Grid item md={12} xs={12} sx={{ height: "40%" }}>
              <MiniCardsBearish />
            </Grid>
          </Grid>

          {/* second item - column */}
          <Grid item md={3} xs={12}>
            <Paper className="paper-back" sx={{ p: 0, height: 155 }}>
              <HorizontalChart />
            </Paper>
          </Grid>
          {/* third item - column */}

          <Grid container item md={6.2} xs={12} sx={{}}>
            <Box
              className="sentiment-circle"
              sx={{
                height: 135,
                width: "100%",
                border: "2px solid #101F2C",
                display: "flex",
                p: 1,
                overflowX: "scroll",
                borderRadius: "0.6rem",
              }}
            >
              <Grid
                item
                md={4}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <SentimentCard />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* third row */}

      <Box sx={{ flexGrow: 1, mb: 1 }}>
        <Grid container item spacing={0.5}>
          {/* first item */}
          <Grid item md={5.8} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: 220 }}>
              <Typography sx={{ fontSize: "0.8rem" }}>
                TOP MENTIOINS STOCK - WALLSTREET BET
              </Typography>

              <TopTable />
            </Paper>
          </Grid>
          {/* second item */}

          <Grid item md={6.2} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: 220 }}>
              <TableComp />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DailySentiment;
