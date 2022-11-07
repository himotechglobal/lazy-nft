import {
  Box,
  Container,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { makeStyles } from "@mui/styles";
import ExploreNFT from "../../components/ExploreNFT/ExploreNFT";
const useStyle = makeStyles({
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
});
const Explore = () => {
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

  const classes = useStyle();
  return (
    <>
      <Header />
      <ExploreNFT/>
    </>
  );
};

export default Explore;

// <Box className={classes.wrap7}>
//         <Container>
//           <Grid container spacing={3}>
//             <Grid item md={12}>
//               <Box>
//                 <Box className={classes.bag15}>
//                   <FormGroup>
//                     <FormControlLabel
//                       control={<Checkbox defaultChecked onClick={Active} />}
//                       label="Ethereum"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <FormControlLabel
//                       control={<Checkbox defaultChecked onClick={inActive} />}
//                       label="Polygon"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <FormControlLabel
//                       control={<Checkbox defaultChecked onClick={DisActive} />}
//                       label="Solana"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <FormControlLabel
//                       control={<Checkbox defaultChecked onClick={unActive} />}
//                       label="Wax"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <FormControlLabel
//                       control={<Checkbox defaultChecked onClick={DActive} />}
//                       label="Tezos"
//                     />
//                   </FormGroup>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* <Grid item lg={12}>
//         <Box>
//           <Typography variant="h3">{title}</Typography>
//         </Box>
//       </Grid> */}
//             <Container>
//               <Grid container>
//                 {Data &&
//                   Data.map((e,index) => {
//                     return (
//                       <>
//                         <Grid item md={4}>
//                           <NftBox data={e} dfg={show}/>
//                         </Grid>
//                       </>
//                     );
//                   })}
//               </Grid>
//             </Container>
//             <Container>
//               <Grid container>
//                 {Data1 &&
//                   Data1.map((e) => {
//                     return (
//                       <>
//                         <Grid item md={4}>
//                           <Polygon data1={e} dfg={show1} />
//                         </Grid>
//                       </>
//                     );
//                   })}
//               </Grid>
//             </Container>
//             <Container>
//               <Grid container>
//                 {Data2 &&
//                   Data2.map((e) => {
//                     return (
//                       <>
//                         <Grid item md={4}>
//                           <Solana data1={e} dfg={show2} />
//                         </Grid>
//                       </>
//                     );
//                   })}
//               </Grid>
//             </Container>
//             <Container>
//               <Grid container>
//                 {Data3 &&
//                   Data3.map((e) => {
//                     return (
//                       <>
//                         <Grid item md={4}>
//                           <Solana data1={e} dfg={show3} />
//                         </Grid>
//                       </>
//                     );
//                   })}
//               </Grid>
//             </Container>
//             <Container>
//               <Grid container>
//                 {Data4 &&
//                   Data4.map((e) => {
//                     return (
//                       <>
//                         <Grid item md={4}>
//                           <Tezos data1={e} dfg={show4} />
//                         </Grid>
//                       </>
//                     );
//                   })}
//               </Grid>
//             </Container>
//           </Grid>
//         </Container>
//       </Box>