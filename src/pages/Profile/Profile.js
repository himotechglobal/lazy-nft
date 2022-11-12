import React,{useContext, useEffect, useState} from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import Header from "../../components/Header/Header";
import { Box, Container, Grid,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PinnedNFT from "../../components/PinnedNFT/PinnedNFT";
import { UserContext } from "../../context/User/UserContext";
import { useAccount } from "wagmi";
import { useMutation,useQuery } from "react-query";
import { getUserNFT } from "../../api/ApiCall/moralis/getUserNFT";
import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
import {WOLFPUPS_NFT_address} from "../../config/index";
import { useContractRead,useContract,useProvider } from "wagmi";
import {getUserNFTByTokenURI} from "../../api/ApiCall/getNftByTokenURI"

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
const Profile =  () => {
  const provider = useProvider()
  const {address,isConnected}=useAccount()
  const classes = useStyle();
  const [{userData,userUpdateData,updatePic}, ] = useContext(UserContext);
  const [NFTBalance,SetNFTBalance]=useState(0)
  const [getMetaData,setMetaData]=useState([])
  const [tokenIdList,setTokenIdList]=useState([])
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
  let TokenIdList=[]
  for(let i=0;i<Number(balance)-272;i++){
    const tokenId = await contract.tokenOfOwnerByIndex("0x8fFAeBAcbc3bA0869098Fc0D20cA292dC1e94a73",i);
    TokenIdList.push(tokenId?.toString());
  }
  return TokenIdList;

 }


const MetaData= async (TokenIdList)=>{
  const data=await Promise.all(TokenIdList.map(async(tokenId)=>{
    const tokenUri=await contract.tokenURI(tokenId);
    const metaData=await getUserNFTByTokenURI(tokenUri);
    return metaData;
  }));
  
  return data;
}

const metadataFunc=async()=>{
  if(address && isConnected){
  const balance = await Balance();
  var arr =await ArraysOfTokenId(balance);
  SetNFTBalance(balance?.toString());
  setTokenIdList([...arr])
  const meta =await MetaData([...arr]);
  setMetaData(meta);
  }
  
}

 useEffect( ()=>{

  metadataFunc();


 },[]);

  return (
    <>
      <Header />
      { (getMetaData && !address ) && 
      <EditProfile />
      }
      { ( isConnected && getMetaData  && address) ?(
        <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid container spacing={2}>
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
      <PinnedNFT data={getMetaData}/>
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