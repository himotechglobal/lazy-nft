import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles"

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
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Typography variant="h2">All NFTs</Typography>
              <Box className={classes.bag11}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox onClick={() => setShow3(!show3)} />}
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
                      src="https://i.seadn.io/gae/unh12ZbfD9JszUXbyWG55N3f0nAR4QihGydoVy4aiFDqck7o5DGFROeIpiVdEO7Jy7uQtohw4rHHaNUApB4LDDBfoilHp6cs1itN?w=500&auto=format"
                      alt=""
                    />
                    <Box>
                      <h6>#3553</h6>
                      <p style={{textAlign:"center"}}>"sleepy"</p>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Box className={classes.bag8}>
                    <Box className={classes.bag9}>
                      <Box className={classes.bag7}>
                        <button
                          className="btn btn-primary"
                          onClick={() => setShow1(!show1)}
                        >
                          {" "}
                          {show1 ? (
                            <i class="bi bi-x-lg"></i>
                          ) : (
                            <i class="bi bi-three-dots"></i>
                          )}
                        </button>
                      </Box>

                      {show1 ? (
                        <Box className={classes.bag10}>
                          <p>RabbitHole</p>
                          <p>BizarroWorld</p>
                          <p>veiw on OpenSea</p>
                          <p>veiw on EtherScan</p>
                        </Box>
                      ) : null}
                    </Box>
                    <img
                      src="https://i.seadn.io/gae/unh12ZbfD9JszUXbyWG55N3f0nAR4QihGydoVy4aiFDqck7o5DGFROeIpiVdEO7Jy7uQtohw4rHHaNUApB4LDDBfoilHp6cs1itN?w=500&auto=format"
                      alt=""
                    />
                    <Box>
                      <h6>#3553</h6>
                      <p style={{textAlign:"center"}}>"sleepy"</p>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Box className={classes.bag8}>
                    <Box className={classes.bag9}>
                      <Box className={classes.bag7}>
                        <button
                          className="btn btn-primary"
                          onClick={() => setShow2(!show2)}
                        >
                          {" "}
                          {show2 ? (
                            <i class="bi bi-x-lg"></i>
                          ) : (
                            <i class="bi bi-three-dots"></i>
                          )}
                        </button>
                      </Box>

                      {show2 ? (
                        <Box className={classes.bag10}>
                          <p>RabbitHole</p>
                          <p>BizarroWorld</p>
                          <p>veiw on OpenSea</p>
                          <p>veiw on EtherScan</p>
                        </Box>
                      ) : null}
                    </Box>
                    <img
                      src="https://i.seadn.io/gae/unh12ZbfD9JszUXbyWG55N3f0nAR4QihGydoVy4aiFDqck7o5DGFROeIpiVdEO7Jy7uQtohw4rHHaNUApB4LDDBfoilHp6cs1itN?w=500&auto=format"
                      alt=""
                    />
                    <Box>
                      <h6>#3553</h6>
                      <p style={{textAlign:"center"}}>"sleepy"</p>
                    </Box>
                  </Box>
                </Grid>
              </>
            ) : null}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AllNFT;