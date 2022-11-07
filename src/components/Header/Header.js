import React, { useState } from "react";
import Box from "@mui/material/Box";
import {Drawer, Avatar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
const drawerWidth = 300;
const sideBar = [
  { sidebarName: "Explore", path: "/explore" },
  { sidebarName: "My Settings", path: "/wallet" },
  { sidebarName: "My Portfolio", path: "/profile" },
  { sidebarName: "Hidden NFTs", path: "/hidden-nft" },
];

const Header = () => {
  const location = useLocation();
  const [isopen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(!open);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          color="transparent"
          component="div"
          position="relative"
          elevation={0}
        >
          <Toolbar>
            <Box component="div" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h4"
                component="div"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <Link to={`/`} style={{color:"#000"}}>Lazy</Link>
              </Typography>
            </Box>
            {localStorage.getItem("token") ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(false)}
              >
                <MenuIcon fontSize="large" sx={{ color: "#111" }} />
              </IconButton>
            ) : location.pathname === "/" ? (
              <Link to="/signup">
                <Button
                  size="large"
                  sx={{ borderRadius: 50, textTransform: "none",color:"#fff", background:"#000" }}
                  variant="contained"
                >
                  Get Started
                </Button>
              </Link>
            ) : (
              <Box component="div" sx={{ flexGrow: 1 }}></Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="right"
        open={isopen}
        onClose={toggleDrawer(true)}
      >
          <Box sx={{display: "flex", justifyContent: "end", marginTop: "17px" , padding:"0  10px 0"}}>
          <Avatar   onClick={toggleDrawer(true)} sx={{bgcolor:"none"}}>
            <CloseIcon/>
          </Avatar>
          </Box>
        <List>
          {sideBar.map((data, index) => (
            <ListItem key={index} >
              <ListItemButton>
                <Link to={data.path}>
                  <Typography component="div" sx={{ color: "#111", padding:"0" }}>
                    <ListItemText primary={data.sidebarName} />
                  </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem >
            <ListItemButton>
              <ListItemText
                onClick={() => {
                  console.log("test");
                }}
                primary={`Sign Out`}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;