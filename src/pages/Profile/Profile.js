import React,{useContext, useEffect, useState} from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import Header from "../../components/Header/Header";
import { Box, Container, Grid,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PinnedNFT from "../../components/PinnedNFT/PinnedNFT";
import { UserContext } from "../../context/User/UserContext";
import { chain, useAccount } from "wagmi";
import { useMutation,useQuery, useQueryClient } from "react-query";
import { getUserNFT } from "../../api/ApiCall/moralis/getUserNFT";
import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
import {WOLFPUPS_NFT_address} from "../../config/index";
import { useContractRead,useContract,useProvider } from "wagmi";
import {getUserNFTByTokenURI} from "../../api/ApiCall/getNftByTokenURI";
import {addorUpdateNftCollection} from "../../api/ApiCall/nftCollection/addorUpdateNftCollection"

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
  const provider = useProvider()
  const queryClient=useQueryClient();
  const {address,isConnected}=useAccount()
  const classes = useStyle();
  const [{userData,userUpdateData,updatePic,token}, ] = useContext(UserContext);
  const [NFTBalance,SetNFTBalance]=useState(0)
  const [tokenIdList,setTokenIdList]=useState([]);
  const contract=  useContract({
    address: WOLFPUPS_NFT_address,
    abi: WOLFPUPS_NFT_ABI,
    signerOrProvider: provider,

  })
  const Balance=async ()=>{
    const balanceOf= await contract.balanceOf("0x8fFAeBAcbc3bA0869098Fc0D20cA292dC1e94a73");
    return balanceOf
  }

 const  ArraysOfTokenId= async(balance)=>{
  var TokenIdList=[];
  for(let i=0;i<Number(balance)-260;i++){
    const tokenId = await contract.tokenOfOwnerByIndex("0x8fFAeBAcbc3bA0869098Fc0D20cA292dC1e94a73",i);
    TokenIdList.push(tokenId?.toString());
  }
  return TokenIdList;

 }


const MetaData= async (TokenIdList)=>{
  console.log({TokenIdList});
  await Promise.all(TokenIdList?.map(async(tokenId)=>{
    const tokenUri=await contract.tokenURI(tokenId);
    const metadata=await getUserNFTByTokenURI(tokenUri);
    await addorUpdateNftCollection({token:token,value:{tokenAddress:WOLFPUPS_NFT_address,tokenId:tokenId,tokenOwner:"0x8fFAeBAcbc3bA0869098Fc0D20cA292dC1e94a73",metadata:metadata}})

  }));
}

const metadataFunc=async()=>{
  const balance = await Balance();
  SetNFTBalance(balance.toString());
  const arr =await ArraysOfTokenId?.(balance);
  setTokenIdList([...arr])
  await MetaData?.([...arr]);
  await queryClient.invalidateQueries("getMyNftCollection")
}

 useEffect( ()=>{
if(address && isConnected && chain.mainnet){
  metadataFunc();
}

 },[]);

  return (
    <>
      <Header />
      { (!address ) && 
      <EditProfile />
      }
      { ( isConnected  && address) ?(
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
                <h6>@{userData?.userName ?? "demo"}</h6>
                { !!NFTBalance &&
                <h6>Total NFTs Owned{" "}{NFTBalance ?? " "}</h6>
                }
                <p>
                { (userUpdateData?.bio ||userData?.bio) ??
                 " NFTs are the future and I primarily use them for their utility, as well as investment."
                }
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <PinnedNFT/>
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
     )}
    </>
  );
};

export default Profile;