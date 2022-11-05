import React from "react";
import EditProfile from "../../EditProfile/EditProfile";
import Header from "../../Header/Header";
import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PinnedNFT from "../../PinnedNFT/PinnedNFT";

const useStyle = makeStyles({
  wrap5: {
    padding: "2rem 0 ",
    "& div": {
      " & img": {
        margin: "1rem auto",
        width: "16%",
        borderRadius: "50%",
      },
      "& h6": {
        // margin:"1rem 0 0 0",
        textAlign: "center",
        fontWeight:"bold",
        fontSize:"1.1rem"
      },
      "& p": {
        // margin:"1rem 0 0 0",
        textAlign: "center",
      },
    },
  },
});
const Profile = () => {
  const classes = useStyle();
  return (
    <>
      <Header />
      <EditProfile />

      <Box className={classes.wrap5}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <div>
                <img
                  src="https://lh3.googleusercontent.com/rRuk-xtEg28mkFYfLAnClC-UNrCGc2mPqvA_72fcUFM-zy6XTNkuFs9uWG8klzkRCyQRkDdmc-5AAqG-9EY-D4R1W865MhJnA6TFGg"
                  alt=""
                />
                <h6>@dontask6</h6>
                <p>
                  NFTs are the future and I primarily use them for their
                  utility, as well as investment.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PinnedNFT/>
    </>
  );
};

export default Profile;