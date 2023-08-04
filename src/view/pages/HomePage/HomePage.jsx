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
import SearchIcon from "@mui/icons-material/Search";

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
          <Box className="search-bar-header" sx={{ position: "relative" }}>
            <input
              className={`header-search ${inputClass}`}
              type="text"
              placeholder="Search here..."
              onChange={handleSearchValue}
              onClick={handleSearchClick}
              value={searchValue}
              style={{
                fontSize: "1rem",
                height: "40px",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: " 0px 20px 0px 50px ",
                border: "none",
                outline: "none",
                color: "white",
              }}
            />
            <SearchIcon sx={{ position: "absolute", left: "5%", top: "20%" }} />
          </Box>
          <TabList
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className="tab-pills" label="S&P500" value="1" />
            <Tab className="tab-pills" label="DJIA" value="2" />
            <Tab className="tab-pills" label="NASDAQ" value="3" />
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
