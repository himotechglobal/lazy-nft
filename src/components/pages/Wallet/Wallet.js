import React, { useState } from "react";
import Header from "../../Header/Header";
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
import { ConnectButton } from "@rainbow-me/rainbowkit";

// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import EditProfile from "../../EditProfile/EditProfile";
import Swap from "../../Swap/Swap";
import Newsletter from "../../Newsletter/Newsletter";
import Share from "../../Share/Share";
const useStyle = makeStyles({
  wrap2: {
    width: "100%",
    padding: "2rem 0",
    "& h3": {
      fontSize: "1.6rem",
    },
    "& button": {
      fontSize: "1rem",
    },
  },
  bag4: {
    display: "flex",
    justifyContent: "end",
  },
  bag3: {
    "& h3": {
      fontSize: "20px",
      textAlign: "center",
    },
  },
  bag12: {
    display: "flex",
    // justifyContent: "space-between",
    marginTop: "1rem",
    flexDirection: "column",
  },
  // Wrap2 Complete
  bag5: {
    display: "flex",
    justifyContent: "center",
    "& Button": {
      background: "#000",
      borderRadius: "15px",
      padding: "0.6rem 1.4rem",
      fontSize: "13px",
      color: "#fff",
    },
    "& Button:hover": {
      background: "#000",
      transform: "translatey(-10px)",
      transition: "0.5s ease-in-out",
    },
  },
});
const Wallet = () => {
  const classes = useStyle();
  return (
    <>
      <Header />
      <Box className={classes.wrap2}>
        <Container>
          <Grid container spacing={2} sx={{justifyContent:{lg:"auto",xs:"space-between",alignItems:"center",}}}>
            <Grid item md={6} sm={6}>
              <Box>
                <Typography variant="h3" sx={{justifyContent:{lg:"auto",xs:"space-between",alignItems:"center",}}}>My Wallets</Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={6}>
              <Box className={classes.bag4}>
                {/* <Button variant='text'>Add Wallet</Button> */}
                <ConnectButton label="Add Wallet" />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className={classes.bag3}>
                <Typography variant="h3">No wallets found.</Typography>
              </Box>
            </Grid>
            <Grid item md={10}>
              <Box className={classes.bag12}>
                <Typography variant="h3">Ethereum</Typography>
                <p>0x205502a21c2</p>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className={classes.bag5}>
                <Button variant="text">Remove</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Box className={classes.wrap3}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Box>
                <Typography variant="h2">My Profile</Typography>
              </Box>
            </Grid>

            <Grid item md={12}>
              <Box className={classes.bag5}>
                <Button variant="contained" onClick={handleShow}>
                  Edit Profile
                </Button>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className={classes.bag5}>
                <p>@rxctgfjk</p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      <EditProfile />
      <Swap />
      <Newsletter />
      <Share />
    </>
  );
};

export default Wallet;
