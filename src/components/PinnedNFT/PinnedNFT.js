import React, { useState,useContext, useEffect } from "react";
import { Container, Grid, Box, Typography, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fontWeight } from "@mui/system";
import AllNFT from "../AllNFT/AllNFT";
import NftBox from "../../pages/Explore/NftBox";
import {getAllPinnedNft} from "../../api/ApiCall/pinnedNft/getAllPinnedNft"
import { useQueries, useQuery } from "react-query";
import { UserContext } from "../../context/User/UserContext";


const useStyle = makeStyles({
  wrap5: {
    padding: "2rem 0 ",

    "& h2": {
      fontSize: "2rem",
      fontWeight: "bold"
    },
  },
  bag8: {
    // position: "relative",
    margin: "0",
    height: "auto",
    position: "relative",
    "& h6": {
      // margin:"1rem 0 0 0",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
    " & img": {
      margin: "1rem auto",
      width: "100%",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
    },
    "& p": {
      fontSize: "1rem", fontWeight: "500", textAlign: "left", padding: "7px 26px ", margin: "0 0 4px 0"
    },
  },
  bag7: {
    position: "relative ",
    zIndex: "1",
    textAlign: "end",
    left: "0",
    right: "0",
    // top:"6.5rem",
    "& button": {
      background: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "50%",
      margin: "10px",
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
  bag9: {
    // position: "relative !important",
    position: "absolute !important",
    zIndex: "1",
    // top:"14.6rem",
    textAlign: "center",
    left: "0",
    right: "0",
  },
  bag10: {
    width: "93%",
    background: "#fff",
    margin: "0 auto",
    borderRadius: "6px",
    padding: "11px",
  },
});
const PinnedNFT = () => {
  const classes = useStyle();
  const [{token}, ] = useContext(UserContext);
  const {data,isLoading}=useQuery(
    ["getAllPinnedNft",token],
    ()=>getAllPinnedNft(token),{
      staleTime:2000,
    }
  )
// const useCustomeQuery=async()=>{
//   return useQuery(
//     ["getMyNftByTokenAddressAndTokenId",token,query.tokenAddress,query.tokenId],
//    () => getMyNftByTokenAddressAndTokenId(token,query.tokenAddress,query.tokenId),
// )
// }

// // console.log(pinnedNft[0]?.tokenId);
//   const getAllPinnedNfts=async()=>{
//     // getMyNftByTokenAddressAndTokenId
//     const data=await Promise.all(pinnedNft?.map(async({tokenAddress,tokenId})=>{
//       const nft=await getMyNftByTokenAddressAndTokenId(token,tokenAddress,tokenId)
//       return {...nft?.responseResult?.nfts};
//     }))
//     return data
//   }
  // const temp=async()=>{
  //   const lol=await getAllPinnedNftsByTokenIdAndAddress?.();
  //   setPinnedNftData([...lol])
  // }
  // useEffect(()=>{
    
  // },[pinnedNft])


  return (
    <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={12}>
              <Typography variant="h2">Pinned NFTs</Typography>
            </Grid>
            {isLoading  ? (
             <Container>
                <Grid>
                  <Grid>
                  <Box sx={{ textAlign: 'center' }}>
              <CircularProgress />
              </Box>
                  </Grid>
                </Grid>
             </Container>
            ):(
              data?.responseResult && data?.responseResult?.map((nft, index) => {
                return (
                  <Grid key={index} item md={4} sm={6}>
                    <NftBox  data={nft} />
                  </Grid>
                )
              })
              
              )
            }
            { !data?.responseResult && <Container>
              <Grid container md={12} justifyContent="center">
              <Typography variant="h5">No Pinned NFTs Added Yet</Typography>
              </Grid>
              </Container>
               }
          </Grid>
        </Container>
      </Box>

      <AllNFT />
    </>
  );
};

export default PinnedNFT;