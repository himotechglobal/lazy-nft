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
  const [{userData,userUpdateData,updatePic,token}, ] = useContext(UserContext);
  const [NFTBalance,SetNFTBalance]=useState(0)
  const [tokenIdList,setTokenIdList]=useState([]);
  const [contractAddress,setContractAddress]=useState();
  const [contractAbi,setContractAbi]=useState();

useEffect(()=>{
  if( chain?.name==="Ethereum" && isConnected && address){
    // console.log("yoyo");
    setContractAddress(WOLFPUPS_NFT_address);
    setContractAbi(WOLFPUPS_NFT_ABI);
  }
  if( chain?.name==="BSC Testnet" &&  isConnected && address){
    // console.log("yo");
    setContractAddress(WOLFPUPS_NFT_address_BSC);
    setContractAbi(WOLFPUPS_NFT_ABI);
  }
},[chain?.name,address,isConnected,contractAddress,contractAbi])

  console.log(contractAddress,chain?.name);
  const contract=  useContract({
    address: contractAddress,
    abi:  contractAbi,
    signerOrProvider: provider,

  })
  const Balance=async ()=>{
    const balanceOf= await contract?.balanceOf(address);
    // console.log(balanceOf);
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
    // console.log(metadata);
    await addorUpdateNftCollection({token:token,value:{tokenAddress:contractAddress,tokenId:tokenId,tokenOwner:address,chainName:chain?.name,metadata:metadata}})

  }));
}

const metadataFunc=async()=>{
  const balance = await Balance();
  SetNFTBalance(balance.toString());
  const arr =await ArraysOfTokenId?.(balance);
  setTokenIdList([...arr])
  await MetaData?.([...arr]);
  await queryClient.invalidateQueries("getNftCollectionByChainNameAndUserName")
}




 useEffect( ()=>{
if(address && isConnected && (chain?.name==="Ethereum" || chain?.name==="BSC Testnet")){
  metadataFunc();
}

 },[chain?.name,contractAddress,contractAbi]);

 const {data:dataByUserName,refetch}=useQuery(
  ["getAllNftByUserName",userName],
  ()=>getAllNftByUserName(userName),{
  }
)

useEffect(()=>{
  if(!token){
    refetch?.()
  }
},[])

// console.log(dataByUserName);

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
                  src={ updatePic?.profilePic ?? userData?.profilePic ??"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
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
                {(userData?.twitterName || userUpdateData?.twitterName) && <a href={`https://twitter.com/${userUpdateData?.twitterName??userData?.twitterName}`} target="_blank" style={{color:"#000"}}>
                <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
                Twitter
                </a>
               }
               {
                (userData?.facebookName || userUpdateData?.facebookName) &&
                <a href={`https://twitter.com/${userUpdateData?.facebookName??userData?.facebookName}`}  style={{color:"#000"}}>
                <i class="bi bi-facebook" style={{marginRight:"8px",color:"gray"}}></i>
                Facebook
                </a>
               }
               {
                (userData?.personalURL || userUpdateData?.personalURL) &&
                <a  href={`https://twitter.com/${userUpdateData?.personalURL??userData?.personalURL}`} style={{color:"#000"}}>
                <i class="bi bi-globe" style={{marginRight:"8px",color:"gray"}}></i>
                Personal URL
                </a>
               }
               
               </Box>
               
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
        <>
        <Box className={classes.wrap5}>
        <Container >
          <Grid container spacing={2} className={classes.wer}>
            <Grid item md={12}>
              <div>
                <img
                  src={ dataByUserName?.responseResult[0]?.metadata?.["image"]?`${dataByUserName?.responseResult[0]?.metadata?.["image"].replace("ipfs://","https://ipfs.io/ipfs/")}`:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" }
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
               {dataByUserName?.responseResult[0].userId["twitterName"] && <a href={`https://twitter.com/${dataByUserName?.responseResult[0].userId["twitterName"]}`} target="_blank" style={{color:"#000"}}>
                <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
                Twitter
                </a>
               }
               {
                dataByUserName?.responseResult[0].userId["facebookName"] &&
                <a href={`https://twitter.com/${dataByUserName?.responseResult[0].userId["facebookName"]}`}  style={{color:"#000"}}>
                <i class="bi bi-facebook" style={{marginRight:"8px",color:"gray"}}></i>
                Facebook
                </a>
               }
               {
                dataByUserName?.responseResult[0].userId["personalURL"] &&
                <a  href={`https://twitter.com/${dataByUserName?.responseResult[0].userId["personalURL"]}`} style={{color:"#000"}}>
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
      )
      }
    </>
  );

};

export default Profile;


