import React,{useContext, useEffect, useState} from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import Header from "../../components/Header/Header";
import { Box, Container, Grid,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PinnedNFT from "../../components/PinnedNFT/PinnedNFT";
import { UserContext } from "../../context/User/UserContext";
import { useNetwork, useSwitchNetwork, useAccount } from "wagmi";
import {useQuery, useQueryClient } from "react-query";
import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
import {WOLFPUPS_NFT_address, WOLFPUPS_NFT_address_BSC} from "../../config/index";
import {useContract,useProvider } from "wagmi";
import {getUserNFTByTokenURI} from "../../api/ApiCall/getNftByTokenURI";
import {addorUpdateNftCollection} from "../../api/ApiCall/nftCollection/addorUpdateNftCollection";
import {getAllNftByUserName} from "../../api/ApiCall/nftCollection/getAllNftByUserName"
import { useParams } from "react-router-dom";
import { actionTypes } from "../../context/User/UserReducer";
import { viewWallet } from "../../api/ApiCall/viewWallet";

const useStyle = makeStyles((theme)=>({
  wrap5: {
    padding: "2rem 0 ",
    [theme.breakpoints.down("sm")]: {

     },
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
  wer:{
    [theme.breakpoints.down("md")]: {
      justifyContent:"center"
    },
  }
}));
const Profile =  () => {
  const {userName}=useParams()
  // console.log(userName);
  const { chain } = useNetwork()
  const { chains, switchNetwork } =useSwitchNetwork()
  const provider = useProvider()
  const queryClient=useQueryClient();
  const {address,isConnected}=useAccount()
  const classes = useStyle();
  const [{userData,userUpdateData,updatePic,token},] = useContext(UserContext);

 

 const {data:dataByUserName}=useQuery(
  ["getAllNftByUserName",userName],
  ()=>getAllNftByUserName(userName),{

  },
  
)

const {
  data,
  isLoading: walletLoading,
} = useQuery(["viewWallet"], viewWallet, {
  onSuccess: (data) => {
    try {
      if (data?.success === true) {
        // console.log(data?.responseResult);
        // dispatch({ type: actionTypes.SET_WALLET, value: data?.responseResult[0]?.wallets });
        // toast.success(JSON.stringify("You wallets fetched Successfully"));
      } else {
        // toast.error(JSON.stringify(data));
      }
    } catch (error) {
      // toast.error(JSON.stringify(error));
    }
  },
});

useEffect(()=>{
  if(!token || token){
    queryClient?.invalidateQueries("getAllNftByUserName")
    queryClient?.invalidateQueries("viewWallet")
  }
},[])

// console.log(dataByUserName);

  return (
    <>
      <Header />
      {!!token ?(
        (data?.responseResult[0]?.address) ?(
        <>
      <Box className={classes.wrap5}>
        <Container >
          <Grid container spacing={2} className={classes.wer}>
            <Grid item md={12}>
              <div>
                <img
                  src={ updatePic?.profilePic ?? userData?.profilePic}
                  alt=""
                />
                <h6>@{userData?.userName ?? null}</h6>
                { !!dataByUserName?.responseResult &&
                <h6>Total NFTs Owned{" "}{dataByUserName?.responseResult.length ?? 0}</h6>
                }
                <p>
                { (userUpdateData?.bio ||userData?.bio)
                }
                </p>
                {/* <p >
                <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
                Twitter
                </p> */}
                <Box sx={{"display":"flex","justifyContent":"center","gap":"2rem",flex:"wrap"}}>
                {(userData?.twitterName || userUpdateData?.twitterName) && <a href={`https://twitter.com/${userUpdateData?.twitterName??userData?.twitterName}`} target="_blank" style={{color:"#000"}}>
                <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
                Twitter
                </a>
               }
               {
                (userData?.facebookName || userUpdateData?.facebookName) &&
                <a href={`https://www.facebook.com/${userUpdateData?.facebookName??userData?.facebookName}`} target="_blank"  style={{color:"#000"}}>
                <i class="bi bi-facebook" style={{marginRight:"8px",color:"gray"}}></i>
                Facebook
                </a>
               }
               {
                (userData?.personalURL || userUpdateData?.personalURL) &&
                <a  href={`https://${userUpdateData?.personalURL??userData?.personalURL}`} target="_blank" style={{color:"#000"}}>
                <i class="bi bi-globe" style={{marginRight:"8px",color:"gray"}}></i>
                Personal URL
                </a>
               }
               
               </Box>
             {  token && 
                 <EditProfile userName={``} />
                   }
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <PinnedNFT userName={userName}/>
      </>
     ):(
        <Container>
          <Grid container>
          <Grid   item md={12}  sx={{marginTop:5}}>
            <Box alignItems="center" className={classes.bag5}>
            <Typography  variant='h6' textAlign="center">This user has not added any wallets.</Typography>
            </Box>
            </Grid>
          </Grid>
        </Container>
     )
    ):(
      dataByUserName?.responseResult[0] ? (
        <>
        <Box className={classes.wrap5}>
        <Container >
          <Grid container spacing={2} className={classes.wer}>
            <Grid item md={12}>
              <div>
                <img
                  src={ dataByUserName?.responseResult[0]?.metadata?.["image"]?`${dataByUserName?.responseResult[0]?.metadata?.["image"].replace("ipfs://","https://ipfs.io/ipfs/")}`:null }
                  alt=""
                />
                <h6>@{dataByUserName?.responseResult[0].userId["userName"]}</h6>
                { !!dataByUserName?.responseResult &&
                <h6>Total NFTs Owned{" "}{dataByUserName?.responseResult.length ?? 0}</h6>
                }
                <p>
                { (dataByUserName?.responseResult[0].userId["bio"]) ??
                 " NFTs are the future and I primarily use them for their utility, as well as investment."
                }
                </p>
             
              </div>
                <Box sx={{"display":"flex","justifyContent":"center","gap":"2rem",flex:"wrap"}}>
               {dataByUserName?.responseResult[0].userId["twitterName"] && <a href={`https://twitter.com/${dataByUserName?.responseResult[0].userId["twitterName"]}`} target="_blank"  style={{color:"#000"}}>
                <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
                Twitter
                </a>
               }
               {
                dataByUserName?.responseResult[0].userId["facebookName"] &&
                <a href={`https://www.facebook.com/${dataByUserName?.responseResult[0].userId["facebookName"]}`} target="_blank"   style={{color:"#000"}}>
                <i class="bi bi-facebook" style={{marginRight:"8px",color:"gray"}}></i>
                Facebook
                </a>
               }
               {
                dataByUserName?.responseResult[0].userId["personalURL"] &&
                <a  href={`https://${dataByUserName?.responseResult[0].userId["personalURL"]}`} target="_blank"  style={{color:"#000"}}>
                <i class="bi bi-globe" style={{marginRight:"8px",color:"gray"}}></i>
                Personal URL
                </a>
               }
               </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <PinnedNFT  userName={userName}/>
      </>
      ):(
        <Container>
        <Grid container>
        <Grid   item md={12}  sx={{marginTop:5}}>
          <Box alignItems="center" className={classes.bag5} sx={{height:"600px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Typography  variant='h6' textAlign="center">No User Found.</Typography>
          </Box>
          </Grid>
        </Grid>
      </Container>
      )
      )
      }
    </>
  );

};

export default Profile;


