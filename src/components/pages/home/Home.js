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
import Explore from "../Explore/Explore";
import ExploreNFT from "../../ExploreNFT/ExploreNFT";
const useStyle = makeStyles({
  wrap14: {
    padding: "8rem 0 8rem",
    "& h6": {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "lighter",
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
      marginTop: "",
    },
    // '@media (maxwidth: 575.98px)' : {

    // },
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
});
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
                  The lazy way to show off your NFTs.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} lg={4} sm={12} flexWrap="wrap">
              <Box className={classes.bag20}>
                <img src="https://lazy.com/create-account.png" alt="" />
                <p>Create an account</p>
              </Box>
            </Grid>
            <Grid item md={4} lg={4} sm={12} flexWrap="wrap">
              <Box className={classes.bag20}>
                <img src="https://lazy.com/wallet.png" alt="" />
                <p>Connect your wallets</p>
              </Box>
            </Grid>
            <Grid item md={4} lg={4} sm={12} flexWrap="wrap">
              <Box className={classes.bag20}>
                <img src="https://lazy.com/share.png" alt="" />
                <p>
                  Add your unique lazy.com URL to your Instagram and social
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

// {/* <Box className={classes.wrap2}>
// {/* <Header /> */}
// <Container>
//   <Grid container spacing={2}>
//     <Grid item md={6}>
//       <Box>
//         <Typography variant="h3">My Wallets</Typography>
//       </Box>
//     </Grid>
//     <Grid item md={6}>
//       <Box className={classes.bag4}>
//         {/* <Button variant='text'>Add Wallet</Button> */}
//         <ConnectButton label="Add Wallet" />
//       </Box>
//     </Grid>
//     <Grid item md={12}>
//       <Box className={classes.bag3}>
//         <Typography variant="h3">No wallets found.</Typography>
//       </Box>
//     </Grid>
//     <Grid item md={10}>
//       <Box className={classes.bag12}>
//         <Typography variant="h3">Ethereum</Typography>
//         <p>0x205502a21c247e06f51278be492827fa67480ce7</p>
//       </Box>
//     </Grid>
//     <Grid item md={2}>
//       <Box className={classes.bag5}>
//         <Button variant="text">Remove</Button>
//       </Box>
//     </Grid>
//   </Grid>
// </Container>
// </Box>

// {/* <Box className={classes.wrap3}>
// <Container>
//   <Grid container spacing={2}>
//     <Grid item md={12}>
//       <Box>
//         <Typography variant="h2">My Profile</Typography>
//       </Box>
//     </Grid>

//     <Grid item md={12}>
//       <Box className={classes.bag5}>
//         <Button variant="contained" onClick={handleShow}>
//           Edit Profile
//         </Button>
//       </Box>
//     </Grid>
//     <Grid item md={12}>
//       <Box className={classes.bag5}>
//         <p>@rxctgfjk</p>
//       </Box>
//     </Grid>
//   </Grid>
// </Container>
// </Box> */}

// <EditProfile />
// <Swap />
// <Newsletter />
// <Share /> */}
