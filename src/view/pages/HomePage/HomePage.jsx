import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./Styles/index.css";
import "./Styles/homePage.css";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import DailySentiment from "./DailySentiment";
import SP500 from "../SP500/SP500";

export default function Home() {
  const [value, setValue] = useState("0");
  const [inputClass, setInputClass] = useState("selected-search");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (value !== "0") {
      setInputClass("unselected-search");
    } else if (value === "0") {
      setInputClass("selected-search");
    }
  }, [value]);
  const handleSearchClick = () => {
    setValue("0");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box className="home-box">
      <TabContext value={value}>
        <Box className="header-tabs">
          <input
            className={`header-search ${inputClass}`}
            type="text"
            placeholder="Search here..."
            onChange={handleSearchValue}
            onClick={handleSearchClick}
            value={searchValue}
            style={{
              height: "40px",
              backgroundColor: "#2B3C4C",
              borderRadius: "20px",
              padding: "0 20px",
              border: "none",
              outline: "none",
              color: "white",
            }}
          />
          <TabList
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ backgroundColor: "white", borderRadius: " 20px 0 0 20px" }}
              label="S&P500"
              value="1"
            />
            <Tab sx={{ backgroundColor: "white" }} label="TOP10" value="2" />
            <Tab
              sx={{ backgroundColor: "white", borderRadius: "0 20px 20px 0" }}
              label="ETF"
              value="3"
            />
          </TabList>
        </Box>
        <Box className="home-tabpanel">
          <TabPanel value="0">
            <DailySentiment />
          </TabPanel>
          <TabPanel value="1">
            <SP500 />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
