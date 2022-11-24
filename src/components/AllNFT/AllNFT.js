import React, { useState,useContext } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  CircularProgress
} from "@mui/material";
import { makeStyles } from "@mui/styles"
import { data } from "autoprefixer";
import NftBox from "../../pages/Explore/NftBox";
import {getMyNftCollection} from "../../api/ApiCall/nftCollection/getMyNftCollection"
import { useQuery } from "react-query";
import { UserContext } from "../../context/User/UserContext";

const useStyle = makeStyles({
  wrap5: {
    padding: "2rem 0 ",

    "& h2": {
      fontSize: "2rem",
      fontWeight: "bold",
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
      fontSize: "1rem", fontWeight: "500", textAlign: "left", padding: "7px 26px ",margin:"0 0 4px 0"
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
  bag11: {
    width: "13%",
    margin: "0 auto",
  },
});
const AllNFT = () => {
  const [show, setShow] = useState(false);
  const [show3, setShow3] = useState(true);
  const [{token}, ] = useContext(UserContext);
  const [nfts,setNfts]=useState([])
  const {isLoading}=useQuery(
    ["getMyNftCollection",token],
    ()=>getMyNftCollection(token),
    {
      onSuccess:(data)=>{
        if(data?.success===true){
          setNfts(data?.responseResult);
        }
      }
    }
  )
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={12}>
              <Typography variant="h2">All NFTs</Typography>
              <Box className={classes.bag11}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked onClick={() => setShow3(!show3)} />}
                    label="Ethereum"
                  />
                </FormGroup>
              </Box>
            </Grid>
            {show3 ? (
              <>
                <Grid item md={12}>
                  <Typography variant="h5">Ethereum NFTs</Typography>
                </Grid>
                { nfts.length>0 ?  (nfts.map((nft,index)=>{return (
                  
                   <Grid key={index} item md={4} sm={6} >
                        <NftBox data={nft}/>
                   </Grid>
                )})):(
                  <Container>
                <Grid>
                  <Grid>
                  <Box sx={{ textAlign: 'center' }}>
              <CircularProgress />
              </Box>
                  </Grid>
                </Grid>
             </Container>
                )
                }
              </>
            ) : null}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AllNFT;