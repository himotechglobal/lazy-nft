import {
  Box,
  Container,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

import React, { useState } from "react";
//   import Header from "../Header/Header";
import { makeStyles } from "@mui/styles";
//   import Data from "../ExploreData";
// import Data from "../../pages/Explore/ExploreData";
import Data1 from "../../pages/Explore/Polygon/PolygonData";
import Data2 from "../../pages/Explore/Solana/SolanaData";
import Data3 from "../../pages/Explore/Wax/WaxData";
import Data4 from "../../pages/Explore/Tezos/TezosData";
import NftBox from "../../pages/Explore/NftBox";
import Polygon from "../../pages/Explore/Polygon/Polygon";
import Solana from "../../pages/Explore/Solana/Solana";
import Tezos from "../../pages/Explore/Tezos/Tezos";
import { getAllNftCollection } from "../../api/ApiCall/nftCollection/getAllNftCollection";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useQuery } from "react-query";
const useStyle = makeStyles((theme) => ({
  wrap7: {
    "& h3": {
      fontSize: "1.7rem",
      fontWeight: "bold",
    },
  },
  bag15: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  bag8: {
    // position: "relative",
    margin: "0",
    height: "auto",
    position: "relative",
    "& h6": {
      // margin:"1rem 0 0 0",
      //   textAlign: "center",
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
      padding: "10px  ",
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
      "& i": {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
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
  hjk: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column !important",
      display: "flex",
    },
  },
}));
const ExploreNFT = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const Active = () => {
    setShow(!show);
    // setTimeout(() => {
    //   setShow(!show)
    // }, 1000);
  };
  const inActive = () => {
    setShow1(!show1);
  };
  const DisActive = () => {
    setShow2(!show2);
  };
  const unActive = () => {
    setShow3(!show3);
  };
  const DActive = () => {
    setShow4(!show4);
  };

  const { data, isLoading } = useQuery(
    "getAllNftCollection",
    getAllNftCollection,
    {
      onSuccess: (data) => {
        console.log(data?.responseResult);
      },
    }
  );

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap7}>
        <Container>
          {/* <Grid container className={classes.hjk}> */}
          <Grid item md={12}>
            <Box>
              <Box className={classes.bag15}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked onClick={Active} />}
                    label="Ethereum"
                  />
                </FormGroup>
                {/* <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked  onClick={inActive} />}
                        label="Polygon"
                      />
                    </FormGroup> */}
                {/* <FormGroup>
                      <FormControlLabel
                        control={<Checkbox  onClick={DisActive} />}
                        label="Solana"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox  onClick={unActive} />}
                        label="Wax"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox  onClick={DActive} />}
                        label="Tezos"
                      />
                    </FormGroup> */}
              </Box>
            </Box>
          </Grid>

          <Grid item lg={6}>
            <Box
              sx={{
                textAlign: "center",
                margin: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* <Box> */}
              <Typography variant="h3">Ethereum Feature Nfts</Typography>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disableRipple>
                    recently listed
                  </MenuItem>
                  {/* <MenuItem value={10}>recently listed</MenuItem> */}
                  <MenuItem disableRipple value={20}>
                    most viewd
                  </MenuItem>
                  <MenuItem disableRipple value={30}>
                    most liked
                  </MenuItem>
                </Select>
                {/* <FormHelperText>Without label</FormHelperText> */}
              </FormControl>
            </Box>
          </Grid>

          <Container>
            {data?.responseResult &&
              show &&
              data?.responseResult.map((nfts, i) => {
                return (
                  <Grid key={i} container justifyContent="center">
                    {nfts?.nfts.map((nft, index) => {
                      return (
                        <>
                          <Grid item key={index} md={4} sm={6}>
                            <NftBox data={nft} />
                          </Grid>
                        </>
                      );
                    })}
                  </Grid>
                );
              })}
          </Container>
          {/* <Container>
                <Grid container>
                  {Data1 &&
                    Data1.map((e) => {
                      return (
                        <>
                          <Grid item md={4} sm={6}>
                            <Polygon data1={e} dfg={show1} />
                          </Grid>
                        </>
                      );
                    })}
                </Grid>
              </Container> */}
          {/* <Container>
                <Grid container>
                  {Data2 &&
                    Data2.map((e) => {
                      return (
                        <>
                          <Grid item md={4} sm={6}>
                            <Solana data1={e} dfg={show2} />
                          </Grid>
                        </>
                      );
                    })}
                </Grid>
              </Container> */}
          {/* <Container>
                <Grid container>
                  {Data3 &&
                    Data3.map((e) => {
                      return (
                        <>
                          <Grid item md={4} sm={6}>
                            <Solana data1={e} dfg={show3} />
                          </Grid>
                        </>
                      );
                    })}
                </Grid>
              </Container> */}
          {/* <Container>
                <Grid container>
                  {Data4 &&
                    Data4.map((e) => {
                      return (
                        <>
                          <Grid item md={4} sm={6} >
                            <Tezos data1={e} dfg={show4} />
                          </Grid>
                        </>
                      );
                    })}
                </Grid>
              </Container> */}
          {/* </Grid> */}
        </Container>
      </Box>
    </>
  );
};

export default ExploreNFT;