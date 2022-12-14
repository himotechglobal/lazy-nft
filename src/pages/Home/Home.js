import React, { useState } from "react";
import Header from "../../components/Header/Header";
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
import ExploreNFT from "../../components/ExploreNFT/ExploreNFT";
const useStyle = makeStyles((theme)=>({
  wrap14: {
    padding: "7rem 0 8rem",
    "& h6": {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "lighter",
      [theme.breakpoints.down("sm")]: {
       fontSize:"1rem",
      },
    },
  },
  bag20: {
    padding: "7rem 0 2rem",
  
    
    "& img": {
      margin: "0 auto",
      width: "15%",
    },
    "& p": {
      textAlign: "center",
      marginTop: "8px",
      fontWeight:"500"
    },
    [theme.breakpoints.down("sm")]: {
      padding:"2rem 0 !important"
    },
   
}

//   '@media (maxwidth: 575.98px)' : {
//     fghj:{
//       flexDirection: "column"
//     }
//   },    
// '@media (maxwidth: 767.98px)' : {

//   },
// '@media (maxwidth: 991.98px)' : {

//   },
// '@media (maxwidth: 1199.98px)' : {
//   },
}));
const Home = () => {
  const classes = useStyle();
  return (
    <>
      <Header />
      <Box className={classes.wrap14}>
        <Container>
          <Grid container spacing={3} className={classes.fghj}>
            <Grid item lg={12} sm={12} md={12}>
              <Box>
                <Typography variant="h6">
                  Every pup deserves a name and a story. Show off and share yours.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} lg={4} sm={12} flexWrap="wrap">
              <Box className={classes.bag20}>
                {/* <img src="https://lazy.com/create-account.png" alt="" /> */}
                <img src="http://cdn.onlinewebfonts.com/svg/img_303225.png" alt="" />
                <p>Create an account</p>
              </Box>
            </Grid>
            <Grid item md={4} lg={4} sm={12} flexWrap="wrap">
              <Box className={classes.bag20}>
                {/* <img src="https://lazy.com/wallet.png" alt="" /> */}
                <img src="https://cdn-icons-png.flaticon.com/512/76/76238.png" alt="" />
                <p>Connect your wallets</p>
              </Box>
            </Grid>
            <Grid item md={4} lg={4} sm={12} flexWrap="wrap">
              <Box className={classes.bag20}>
                {/* <img src="https://lazy.com/share.png" alt="" /> */}
                <img src="https://static.vecteezy.com/system/resources/previews/006/229/455/original/social-people-network-networking-connect-connecting-referral-program-icon-social-media-connection-free-vector.jpg" alt="" />
                <p>
                  Add your unique Wolf Pup Registry to your Instagram and social
                  media bios. Tell your friends!
                </p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ExploreNFT />
    </>
  );
};

export default Home;

