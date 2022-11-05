import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const useStyle = makeStyles({
    wrap5: {
        width: "100%",
        padding: "2rem 0",
        "& h3": {
          fontSize: "1.9rem",
          fontWeight:"bold",
        },
        "& button": {
          fontSize: "1rem",
        },
      },
      bag5: {
        display: "flex",
        justifyContent: "center",
        "& Button": {
          background: "#000 !important",
          borderRadius: "15px",
          padding: "0.6rem 1.4rem",
          fontSize: "13px",

        },
        "& Button:hover": {
          background: "#000",
          transform: "translatey(-10px)",
          transition: "0.5s ease-in-out",
        },
        "& p": {
          color: "#000",
          fontSize: "1rem",
          fontWeight: "bolder",
          padding: "1rem",
        },
      },
      bag6:{
          // width:"100% !important"
      }
  });
const Swap = () => {

      const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid container>
            <Grid item lg={12}>
              <Box >
              <Typography variant="h3">My Wallets</Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className={classes.bag5}>
                {/* <Button variant="contained" >
                  Connect Wallet
                </Button> */}
                <ConnectButton label="Connect Wallet" />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} sm={12}>
              <Box className={classes.bag6}>
                <SwapWidget />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Swap;