import React, { useState,useContext } from "react";
import {
  Box,
  Container,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {updateProfilePic} from "../../api/ApiCall/updateProfilePic"
import { useMutation, useQueryClient } from "react-query";
import { UserContext } from "../../context/User/UserContext";
import {actionTypes} from "../../context/User/UserReducer";
import {pinnedToggleNft} from "../../api/ApiCall/pinnedNft/pinnedToggleNft"
import {hideToggleNft} from "../../api/ApiCall/nftHide/hideToggleNft"
import {WOLFPUPS_NFT_address} from "../../config/index";
import { useAccount } from "wagmi";
const useStyle = makeStyles({
  wrap7: {
    // color:"#000",
    "& h3": {
      fontSize: "1.7rem",
      fontWeight: "bold",
      color:"#000 !important",
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
      color:"#000",
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
      color:"#000",
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
    "& p":{
      cursor:"pointer",
    }
  },
  bag11: {
    width: "13%",
    margin: "0 auto",
  },
});
const NftBox = (props) => {
  const queryClient=useQueryClient();
  const [, dispatch] = useContext(UserContext);
  const {address,isConnected}=useAccount()
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const classes = useStyle();
  // console.log(props?.data._id);
  const clickable = (()=> {
    navigate(`/nftdetailpage/${props?.data._id}`)
  })
  const {mutateAsync}=useMutation(
    "updateProfilePic",
    updateProfilePic,{
    onSuccess:(data)=>{
      dispatch({type:actionTypes.UPDATE_PROFILE_PIC,value:data?.responseResult})
    }
  }
  )

  const {mutateAsync:mutateAsyncPinnedToggleNft}=useMutation(
    "pinnedToggleNft",
    pinnedToggleNft,{
    onSuccess:(data)=>{
      queryClient.invalidateQueries("getAllPinnedNft");
      queryClient.invalidateQueries("getMyNftCollection")
      queryClient.invalidateQueries("getAllHideNft");
      queryClient.invalidateQueries("getAllNftCollection");
    }
  }
  )


  const {mutateAsync:mutateAsyncHideToggleNft}=useMutation(
    "hideToggleNft",
    hideToggleNft,{
      onSuccess:(data)=>{
        queryClient.invalidateQueries("getAllHideNft");
        queryClient.invalidateQueries("getMyNftCollection")
        queryClient.invalidateQueries("getAllPinnedNft");
        queryClient.invalidateQueries("getAllNftCollection");
        
      }
    }
  )



  return (
    <>
    <Container >
    <Grid container spacing={3} >
      <Grid item lg={12} >
      <Box>
          {/* <Typography variant="h3" style={{margin:"2rem 0 0 0"}}></Typography> */}
          {/* <Typography variant="h3" style={{margin:"2rem 0 0 0"}}>{props.data1.title}</Typography> */}
        </Box>
      </Grid>
      <Grid  item md={12} style={{margin:props.data.margin}}  >
        <Box className={classes.bag8}>
          <Box className={classes.bag9}>
            <Box className={classes.bag7}>
              <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <i class="bi bi-x-lg"></i>
                ) : (
                  <i class="bi bi-three-dots"></i>
                )}
              </button>
            </Box>

            {show ? (
              <Box className={classes.bag10}>
              { address && isConnected && props?.data.tokenOwner===address|| "fghj0x13deFBAC61a79761EB40B86E41B0fe3B9541aEFFkjhbv" && (
                <>
               <p onClick={async()=>{
                try{
                  await mutateAsync({token:localStorage.getItem("token"),value:props.data.metadata.image.replace("ipfs://","https://ipfs.io/ipfs/")})
                }catch(error){

                }
               }}>
               Make Profile Picture</p>

               {props?.data.pinnedStatus==="PINNED" ? (
          
               <p onClick={async()=>{
                try{
                  await mutateAsyncPinnedToggleNft({token:localStorage.getItem("token"),nftCollectionId:props?.data._id})
                }catch(error){

                }
               }}
               >Unpinned Nft</p>
               ):(
                <p onClick={async()=>{
                try{
                  await mutateAsyncPinnedToggleNft({token:localStorage.getItem("token"),nftCollectionId:props?.data._id})
                }catch(error){

                }
               }}>Pinned Nft</p>
               )}
               { props?.data.status==="HIDE" ?(
               <p onClick={async()=>{
                try{
                  await mutateAsyncHideToggleNft({token:localStorage.getItem("token"),nftCollectionId:props?.data._id})
                }catch(error){

                }
               }}
               >Unhide Nft</p>
               ):(
                <p onClick={async()=>{
                try{
                  await mutateAsyncHideToggleNft({token:localStorage.getItem("token"),nftCollectionId:props?.data._id})
                }catch(error){

                }
               }}>Hide Nft</p>
               )}
              
               </>
               )}
               <Box sx={{color: "#000", margin: "0 0 4px 0", padding: "10px", fontSize: "1rem", textAlign: "left", fontWeight: "500"}}>
               <a href={`https://opensea.io/assets/ethereum/${WOLFPUPS_NFT_address}/${props?.data.tokenId}`} target="_blank" style={{color: "#000"}}>Veiw on OpenSea</a>
               </Box>
               <Box sx={{color: "#000", margin: "0 0 4px 0", padding: "10px", fontSize: "1rem", textAlign: "left", fontWeight: "500"}}>
               <a href={`https://etherscan.io/nft//${WOLFPUPS_NFT_address}/${props?.data.tokenId}`} target="_blank" style={{color: "#000"}}>Veiw on EtherScan</a>
               </Box>

              </Box>
            ) : null}
          </Box>
          {/* <Link to={`/nftdetailpage/${props.data.id}`}> */}
          <img src={props?.data.metadata.image?`${ props?.data.metadata.image.replace("ipfs://","https://ipfs.io/ipfs/")}`:""} alt=""  onClick={clickable}/>
          {/* </Link> */}
          {/* <img src={props.data1.img} alt="" /> */}
          <Box onClick={clickable}>
            <h6>#{props.data.tokenId}</h6>
            <p>{props?.data.lazyName? props?.data.lazyName : props?.data.metadata.name}</p>
          </Box>
        </Box>
      </Grid>
      </Grid>
    </Container>

    </>
  );
};

export default NftBox;



// const metadata="{"name":"CHECK","description":"CHECK","properties":{"cover_url":null,"artist":null,"public_profile_link":null,"height":null,"breadth":null,"length":null,"weight":null,"tags":null},"image":"https://ipfs.io/ipfs/QmPVm6HMwVBRGsUH9HDCoaNMLciff361vwk3pT8w7MGQSQ","preview":"https://ipfs.io/ipfs/QmPVm6HMwVBRGsUH9HDCoaNMLciff361vwk3pT8w7MGQSQ"}"