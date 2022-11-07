import React, { useState } from "react";
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
const useStyle = makeStyles({
  wrap12: {
    padding: "6rem 0 0",
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
    "& Button": {
      display: "block",
      margin: "19px 0",
      border: "2px solid #000",
      borderRadius: "33px",
      padding: "7px 25px",
      color: "#000",
      fontWeight: "bold",
    },
    "& Button:hover": {
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
  //     const [data, setData] = useState(itemData);
  //   const itemData = Data.filter((id) => Data.id == id);
  //     console.log("yrtfghj",itemData)
  const [show, setShow] = useState(false);
  const classes = useStyle();
  //   setData(itemData)

  const { id } = useParams();
  console.log("id", id);
  //   const itemData = Data.filter((itemData) => itemData.id == id);
  const itemData = Data.filter((itemData) => itemData.id == id);
  console.log("itemData", itemData);
  return (
    <>
      <Header />
      {itemData.map((elz) => {
        const { img, decs, title, name } = elz;
        console.log("elz", img);
        return (
          <>
            <Box className={classes.wrap12}>
              <Container>
                <Grid container >
                  <Grid md={12}>
                    <Box className={classes.bag15}>
                      <img src={elz.img} alt="" />
                      {/* <h1>{elz.title}</h1> */}
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </>
        );
      })}

      {itemData.map((elz) => {
        return (
          <>
            <Box className={classes.wrap13}>
              <Container>
                <Grid>
                  <Grid md={12}>
                    <Box>
                      <Typography variant="h4">{elz.name}</Typography>
                      <p>{elz.para}</p>
                    </Box>
                  </Grid>
                  <Box>
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Box>
                        <button>Veiw on OpenSea</button>
                        <button>Veiw on EtherScan</button>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Container>
            </Box>
          </>
        );
      })}

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
      </Box>
      <Footer />
    </>
  );
};

export default NFTdetailpage;