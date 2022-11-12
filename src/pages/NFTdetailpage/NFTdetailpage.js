import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Data from "../Explore/ExploreData";
import { Link } from "react-router-dom";
import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
import {WOLFPUPS_NFT_address} from "../../config/index";
import { useQuery } from "react-query";
import {getUserNFTByTokenURI} from "../../api/ApiCall/getNftByTokenURI"
import { useContractRead,useContract,useProvider } from "wagmi";

const useStyle = makeStyles({
  wrap12: {
    padding: "6rem 0",
    width: "100%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bag15: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrap13: {
    padding: "2rem 0 1rem",
    "& h4": {
      fontWeight: "bold",
      fontSize: "25pt",
      display: "block",
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: "600",
      margin: "1rem 0 0 0",
    },
    "& a": {
      display: "block",
      margin: "19px 0",
      border: "2px solid #000",
      borderRadius: "33px",
      padding: "7px 25px",
      color: "#000",
      fontWeight: "bold",
    },
    "& a:hover": {
      backgroundColor: "#000",
      color: "#fff",
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
      fontSize: "1rem",
      fontWeight: "500",
      textAlign: "left",
      padding: "7px 26px ",
      margin: "0 0 4px 0",
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
  },
  bag12: {
    "& h3": {
      fontSize: "1.6rem",
      fontWeight: "bold",
    },
  },
});
const NFTdetailpage = () => {
  const provider = useProvider()
  const [show, setShow] = useState(false);
  const [tokenUri,setTokenUri]=useState("")
  const classes = useStyle();
  const {id:tokenId } = useParams();
  const contract=  useContract({
    address: WOLFPUPS_NFT_address,
    abi: WOLFPUPS_NFT_ABI,
    signerOrProvider: provider,

  })
  const tokenUriFunc=async (tokenId)=>{
    const token= await contract.tokenURI?.(tokenId);
    setTokenUri(token);
  }

useEffect(()=>{
    tokenUriFunc?.(tokenId)
  },[tokenId]) 

const {data}=useQuery(["getUserNFTByTokenURI",tokenUri],()=>getUserNFTByTokenURI(tokenUri),{
    onError:(data)=>{
      console.log({data});
     
    }
  })


  return (
    <>
      <Header />
        (
          <>
            <Box className={classes.wrap12}>
              <Container>
                <Grid container >
                  <Grid md={12}>
                    <Box className={classes.bag15}>
                      <img src={data?.image?`${ data?.image.replace("ipfs://","https://ipfs.io/ipfs/")}`:""}alt="" />
                      {/* <h1>{elz.title}</h1> */}
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
       
            <Box className={classes.wrap13}>
              <Container>
                <Grid>
                  <Grid md={12}>
                    <Box>
                      <Typography variant="h4">{data?.name}</Typography>
                      <p>{data?.description}</p>
                    </Box>
                  </Grid>
                  <Box>
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Box>
                        <a href={`https://opensea.io/assets/ethereum/${WOLFPUPS_NFT_address}/${tokenId}`} target="_blank">Veiw on OpenSea</a>
                        <a href={`https://etherscan.io/nft//${WOLFPUPS_NFT_address}/${tokenId}`} target="_blank">Veiw on EtherScan</a>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Container>
            </Box>
         
            </>
        )
      

      <Box>
        <Container>
          <Grid container>
            <Grid md={12}>
              <Box className={classes.bag12}>
                <Typography variant="h3">Similar NFTs 🎩</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className={classes.bag8}>
                <Box className={classes.bag9}>
                  <Box className={classes.bag7}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShow(!show)}
                    >
                      {" "}
                      {show ? (
                        <i class="bi bi-x-lg"></i>
                      ) : (
                        <i class="bi bi-three-dots"></i>
                      )}
                    </button>
                  </Box>

                  {show ? (
                    <Box className={classes.bag10}>
                      <p>RabbitHole</p>
                      <p>BizarroWorld</p>
                      <p>veiw on OpenSea</p>
                      <p>veiw on EtherScan</p>
                    </Box>
                  ) : null}
                </Box>
                <img
                  src="https://lh3.googleusercontent.com/n6S_T7MuOzH_Q0NeFy53hBSjDSxlIisbiKRErGZvyrMQsVj5JVjVCldc4urgydNRfKez41gnTxkSJHvDrx2wYEJ1T8C2dt9d7hEZ"
                  alt=""
                />
                <Box>
                  <h6>Flip Ape 692</h6>
                </Box>
              </Box>
            </Grid>
            {/* <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"></Avatar> */}
          </Grid>
        </Container>

        <Box className={classes.wrap13}>
              <Container>
                <Grid>
                  <Box>
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Box>
                        <Link to="/bizarro-world">BizarroWorld</Link>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Container>
            </Box>
      </Box>
      <Footer />
    </>
  );
};

export default NFTdetailpage;