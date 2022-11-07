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
import { useConnectModal,useChainModal } from "@rainbow-me/rainbowkit";

// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import EditProfile from "../../components/EditProfile/EditProfile";
import Swap from "../../components/Swap/Swap";
import Newsletter from "../../components/Newsletter/Newsletter";
import Share from "../../components/Share/Share";
import { useAccount,useDisconnect,useNetwork } from "wagmi";
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
    marginBottom: "1rem",
    flexDirection: "column",
  },
  // Wrap2 Complete
  bag5: {
    display: "flex",
    justifyContent: "center",
    "& Button": {
      background: "#fff",
      color: "#111",
      border: "2px solid black",
      fontWeight:'bold'
    },
    "& Button:hover": {
      background: "#111",
      transform: "translatey(-3px)",
      transition: "0.5s ease-in-out",
      color: "#fff",
    },
  },
});
const Wallet = () => {
  const {openConnectModal}=useConnectModal();
  const {openChainModal}=useChainModal();
  const {isConnected,address}=useAccount()
  const { chain, chains } = useNetwork()
  const {disconnectAsync}=useDisconnect();

  const handleRemoveWallet=async()=>{
    await disconnectAsync()
  }
  const classes = useStyle();
  return (
    <>
      <Header />
      <Box className={classes.wrap2}>
        <Container>
          <Grid container spacing={2} sx={{justifyContent:{lg:"auto",xs:"space-between",alignItems:"center"}}}>
            <Grid item md={6} sm={6}>
              <Box>
                <Typography variant="h3" sx={{justifyContent:{lg:"auto",xs:"space-between",alignItems:"center",}}}>My Wallets</Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={6}>
              <Box className={classes.bag4}>
              { (isConnected && address) ?(
                <Button onClick={openChainModal} size="large" variant="contained"  sx={{borderRadius: 50,textTransform: 'none',}} >Add Wallet</Button>
              ):(
                <Button onClick={openConnectModal} size="large" variant="contained"  sx={{borderRadius: 50,textTransform: 'none',}} >Add Wallet</Button>
              )
              }
              </Box>
            </Grid>
          </Grid>
          {
            (isConnected && address) ?(
          <Grid container  spacing={3} sx={{marginTop:5, boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",borderRadius:"15px"}}>
          <Grid item md={10} >
              <Box className={classes.bag12}>
                <Typography variant="h6" sx={{fontWeight:'bold',wordBreak: "break-all"}}>{chain.name}</Typography>
                <Typography sx={{wordBreak: "break-all"}}>{address}</Typography>
              </Box>
            </Grid>
            <Grid item md={2}>
            <Box className={classes.bag5}>
            <Button onClick={handleRemoveWallet} size="large"  sx={{borderRadius: 50,textTransform: 'none',}} variant="submit">Remove</Button>
            </Box>
            </Grid>
          </Grid>):(
            <Grid item md={12}  sx={{marginTop:5,}}>
            <Box className={classes.bag5}>
            <Typography  component={'div'} variant='h6'>No Wallets Added Yets {" "}</Typography>
            </Box>
            </Grid>
          )}
        </Container>
      </Box>

      <EditProfile />
      <Swap />
      <Newsletter />
      <Share />
    </>
  );
};

export default Wallet;
