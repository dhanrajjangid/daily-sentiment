import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Crop169Icon from "@mui/icons-material/Crop169";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const drawerWidth = 230;

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar
        className="app-bar"
        position="static"
        elevation={0}
        sx={{ height: "30px", borderRadius: 2 }}
      >
        <Toolbar sx={{ maxHeight: "100%", minHeight: "0!important" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["", "", "", ""].map((text, index) => {
            return (
              <ListItem
                key={text}
                disablePadding
                onClick={() =>
                  navigate(text === "Daily Sentiment" ? "/" : `${text}`)
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Crop169Icon /> : <Crop169Icon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {["", "", "", ""].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Crop169Icon /> : <Crop169Icon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
