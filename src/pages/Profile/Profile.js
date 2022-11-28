import React,{useContext, useEffect, useState} from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import Header from "../../components/Header/Header";
import { Box, Container, Grid,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PinnedNFT from "../../components/PinnedNFT/PinnedNFT";
import { UserContext } from "../../context/User/UserContext";
import { chain, useAccount } from "wagmi";
import {useQuery, useQueryClient } from "react-query";
import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
import {WOLFPUPS_NFT_address} from "../../config/index";
import {useContract,useProvider } from "wagmi";
import {getUserNFTByTokenURI} from "../../api/ApiCall/getNftByTokenURI";
import {addorUpdateNftCollection} from "../../api/ApiCall/nftCollection/addorUpdateNftCollection";
import {getAllNftByUserName} from "../../api/ApiCall/nftCollection/getAllNftByUserName"
import { useParams } from "react-router-dom";

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
    const balanceOf= await contract.balanceOf(address);
    return balanceOf
  }

 const  ArraysOfTokenId= async(balance)=>{
  var TokenIdList=[];
  for(let i=0;i<Number(balance)-0;i++){
    const tokenId = await contract.tokenOfOwnerByIndex(address,i);
    TokenIdList.push(tokenId?.toString());
  }
  return TokenIdList;

 }


const MetaData= async (TokenIdList)=>{
  // console.log({TokenIdList});
  await Promise.all(TokenIdList?.map(async(tokenId)=>{
    const tokenUri=await contract.tokenURI(tokenId);
    const metadata=await getUserNFTByTokenURI(tokenUri);
    await addorUpdateNftCollection({token:token,value:{tokenAddress:WOLFPUPS_NFT_address,tokenId:tokenId,tokenOwner:address,metadata:metadata}})

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

 const {data:dataByUserName,refetch}=useQuery(
  ["getAllNftByUserName",userName],
  ()=>getAllNftByUserName(userName),{
  }
)

useEffect(()=>{
  if(!token){
    refetch?.()
  }
},[userName])



  return (
    <>
      <Header />
      { (!address && token ) && 
      <EditProfile />
      }
      {!!token ?(
      (isConnected  && address) ?(
        <>
      <Box className={classes.wrap5}>
        <Container >
          <Grid container spacing={2} className={classes.wer}>
            <Grid item md={12}>
              <div>
                <img
                  src={ updatePic?.profilePic ?? userData?.profilePic ??"https://lh3.googleusercontent.com/rRuk-xtEg28mkFYfLAnClC-UNrCGc2mPqvA_72fcUFM-zy6XTNkuFs9uWG8klzkRCyQRkDdmc-5AAqG-9EY-D4R1W865MhJnA6TFGg"}
                  alt=""
                />
                <h6>@{userData?.userName ?? "demo"}</h6>
                { !!NFTBalance &&
                <h6>Total NFTs Owned{" "}{NFTBalance ?? 0}</h6>
                }
                <p>
                { (userUpdateData?.bio ||userData?.bio) ??
                 " NFTs are the future and I primarily use them for their utility, as well as investment."
                }
                </p>
                {/* <p >
                <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
                Twitter
                </p> */}
                <Box sx={{"display":"flex","justifyContent":"center","gap":"2rem",flex:"wrap"}}>
                <a href={`https://twitter.com/${userData?.twitterName}`} target="_blank" style={{color:"#000"}}>
                <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
                Twitter
                </a>
               
               
                <a href={`https://twitter.com/${userData?.facebookName}`}  style={{color:"#000"}}>
                <i class="bi bi-facebook" style={{marginRight:"8px",color:"gray"}}></i>
                Facebook
                </a>
               
              
                <a  href={`https://twitter.com/${userData?.personalURL}`} style={{color:"#000"}}>
                <i class="bi bi-globe" style={{marginRight:"8px",color:"gray"}}></i>
                Personal URL
                </a>
               
               </Box>
               
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
     )
      ):(
        <>
        <Box className={classes.wrap5}>
        <Container >
          <Grid container spacing={2} className={classes.wer}>
            <Grid item md={12}>
              <div>
                <img
                  src={ dataByUserName?.responseResult[0]?.metadata?.["image"]?`${dataByUserName?.responseResult[0]?.metadata?.["image"].replace("ipfs://","https://ipfs.io/ipfs/")}`:"https://lh3.googleusercontent.com/rRuk-xtEg28mkFYfLAnClC-UNrCGc2mPqvA_72fcUFM-zy6XTNkuFs9uWG8klzkRCyQRkDdmc-5AAqG-9EY-D4R1W865MhJnA6TFGg" }
                  alt=""
                />
                <h6>@{dataByUserName?.responseResult[0].userId["userName"] ?? "demo"}</h6>
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
               {userData?.twitterName && <a href={`https://twitter.com/${userData?.twitterName}`} target="_blank" style={{color:"#000"}}>
                <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
                Twitter
                </a>
               }
               {
                userData?.facebookName &&
                <a href={`https://twitter.com/${userData?.facebookName}`}  style={{color:"#000"}}>
                <i class="bi bi-facebook" style={{marginRight:"8px",color:"gray"}}></i>
                Facebook
                </a>
               }
               {
                userData?.personalURL &&
                <a  href={`https://twitter.com/${userData?.personalURL}`} style={{color:"#000"}}>
                <i class="bi bi-globe" style={{marginRight:"8px",color:"gray"}}></i>
                Personal URL
                </a>
               }
               </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <PinnedNFT dataByUserName={dataByUserName}/>
      </>
      )
      }
    </>
  );

};

export default Profile;


