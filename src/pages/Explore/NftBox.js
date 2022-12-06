import React, { useState,useContext,useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {updateProfilePic} from "../../api/ApiCall/updateProfilePic"
import { useMutation, useQueryClient } from "react-query";
import { UserContext } from "../../context/User/UserContext";
import {actionTypes} from "../../context/User/UserReducer";
import {pinnedToggleNft} from "../../api/ApiCall/pinnedNft/pinnedToggleNft"
import {hideToggleNft} from "../../api/ApiCall/nftHide/hideToggleNft"
import {WOLFPUPS_NFT_address} from "../../config/index";
import { useAccount, useQuery } from "wagmi";
import Modal from "react-bootstrap/Modal";
import Badge from "@mui/material/Badge";
// import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useFormik } from "formik";
import * as yup from "yup";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import useOnClick from "../../components/useOnclick";
 
import {
  Box,
  Container,
  Grid,
  Checkbox,
  Typography,
  TextField,
  TextareaAutosize,
  CircularProgress,
} from "@mui/material";
import {toggleLike} from "../../api/ApiCall/nftCollection/toggleLike";
import {updateNftNameOrDescription} from "../../api/ApiCall/nftCollection/updateNftNameOrDescription"
import { getUserNFTByTokenURI } from "../../api/ApiCall/getNftByTokenURI";
// import useOnClickOutSide from "../../components/useOnclick";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const useStyle = makeStyles((theme) => ({
  fav:{
 padding:"0 !important"
  },
  wrap7: {
    // color:"#000",
    "& h3": {
      fontSize: "1.7rem",
      fontWeight: "bold",
      color: "#000 !important",
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
    backgroundColor: "#fff",
    boxShadow: "0 2px 16px 0 rgb(0 0 0 / 5%)",
    // display:"flex",
    // alignItems:"center",
    "& h6": {
      // margin:"1rem 0 0 0",
      //   textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.3rem",
      color: "#000",
    },
    " & img": {
      margin: "1rem auto",
      width: "100%",
      // borderTopLeftRadius: "5px",
      // borderTopRightRadius: "5px",
      borderRadius:"12px",
    },
    "& p": {
      fontSize: "0.8rem",
      fontWeight: "500",
      textAlign: "left",
      // padding: "10px  ",
      padding: "6px",
      margin: "0 0 4px 0",
      color: "#000",
      display:"flex",
      justifyContent:"space-between"
      // display:"none"
    },

    bag90: {
      display: "block",
      border: "1px solid linen",
      margin: "10px 0",
      width: "100%",
      padding: "13px",
      borderRadius: "15px",
      boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
      "& fieldset":{
       borderWidth:"0px !important"
      }
      
    },
    bagr: {
      "& button": {
        width: "100%",
        margin: "13px 0",
        border: "1px solid #000",
        padding: "10px",
        borderRadius: "41px",
      },
      "& button:hover": {
        backgroundColor: "#000",
        color: "#fff",
        transition:
          "color 0.5s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      },
      
    },
  },
  bag7: {
    // position: "relative ",
    // zIndex: "1",
    // textAlign: "end",
    // left: "0",
    // right: "0",
    // top:"6.5rem",
    // display: "flex",
    // alignItems: "center",
    // margin: "0",
    // justifyContent: "space-between",
    // boxShadow:"0px 0px 10px #ccc",
    textAlign: "end",
    "& button": {
      background: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "50%",
      margin: "10px",
      "& button:hover": {
        backgroundColor: "#000 !imporatnt",
        color: "#fff",
      },
      "& i": {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
      "& button:active": {
        backgroundColor: "#000 !imporatnt",
        color: "#fff",
      },
    },
  },
  bag9: {
    // // position: "relative !important",
    position: "absolute !important",
    // zIndex: "1",
    // // top:"14.6rem",
    // textAlign: "center",
    // left: "0",
    // right: "0",
    width: "100%",
  },
  bag10: {
    width: "93%",
    background: "#fff",
    margin: "0 auto",
    borderRadius: "6px",
    boxShadow: "0px 0px 10px #ccc",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    "& p": {
      cursor: "pointer",
      "&:hover":{
        color:"blue"
      }
    },
  },
  bin2: {
      "&:hover":{
        color:"blue !important"
      },
      "&:active":{
        color:"blue !important"
      }
  },
  bag11: {
    width: "13%",
    margin: "0 auto",
  },

  bag90: {
    display: "block",
    border: "1px solid linen",
    margin: "10px 0",
    width: "100%",
    padding: "13px",
    borderRadius: "15px",
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
  },
  bag6: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& h5,h6": {
      margin: "0",
    },
  },
  bagr: {
    "& button": {
      width: "100%",
      margin: "13px 0",
      border: "1px solid #000",
      padding: "10px",
      borderRadius: "41px",
    },
    "& button:hover": {
      backgroundColor: "#000",
      color: "#fff",
      transition:
        "color 0.5s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
  },
}));
const NftBox = (props) => {
  const [words, setWords] = useState(0)
  const bodyRef = useRef()
  const count = () => {
    setWords(0 + formik.values.decs.length)
  }
  const CHARACTER_LIMIT = 160;
  const ref = useRef();
  const queryClient=useQueryClient();
  const [{userData,token}, dispatch] = useContext(UserContext);
  const {address,isConnected}=useAccount()
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const classes = useStyle();
  const [shows, setShows] = useState(false);
  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);
  const clickable = (()=> {
    navigate(`/nftdetailpage/${props?.data._id}`)
  })
  const {mutateAsync,isLoading:isLoadingUpdateProfilePic}=useMutation(
    "updateProfilePic",
    updateProfilePic,{
    onSuccess:(data)=>{
      dispatch({type:actionTypes.UPDATE_PROFILE_PIC,value:data?.responseResult})
    }
  }
  )
  
// console.log(userData._id);
  const {mutateAsync:mutateAsyncEdit, isLoading:isLoadingupdateNftNameOrDescription}=useMutation("updateNftNameOrDescription",
updateNftNameOrDescription,{
  onSuccess:(data)=>{
    queryClient.invalidateQueries("getAllHideNft");
    queryClient.invalidateQueries("getNftCollectionByChainNameAndUserName")
    queryClient.invalidateQueries("getAllNftByChainName")
    queryClient.invalidateQueries("getAllPinnedNftByUserName");
    queryClient.invalidateQueries("getAllNftByChainName");
    // queryClient.invalidateQueries("recentlyListedNft");
    // queryClient.invalidateQueries("mostViewNft");
    // queryClient.invalidateQueries("mostLikeNft")
  }
}
)

  const {mutateAsync:mutateAsyncPinnedToggleNft,  isLoading:isLoadingpinnedToggleNft}=useMutation(
    "pinnedToggleNft",
    pinnedToggleNft,{
    onSuccess:(data)=>{
      queryClient.invalidateQueries("getAllHideNft");
      queryClient.invalidateQueries("getNftCollectionByChainNameAndUserName")
      queryClient.invalidateQueries("getAllNftByChainName")
      queryClient.invalidateQueries("getAllPinnedNftByUserName");
      // queryClient.invalidateQueries("getAllNftCollection");
      // queryClient.invalidateQueries("recentlyListedNft");
      // queryClient.invalidateQueries("mostViewNft");
      // queryClient.invalidateQueries("mostLikeNft")
      
  
    }
  }
  )


  const {mutateAsync:mutateAsyncHideToggleNft, isLoading:isLoadinghideToggleNft}=useMutation(
    "hideToggleNft",
    hideToggleNft,{
      onSuccess:(data)=>{
        queryClient.invalidateQueries("getAllHideNft");
        queryClient.invalidateQueries("getNftCollectionByChainNameAndUserName")
        queryClient.invalidateQueries("getAllNftByChainName")
        queryClient.invalidateQueries("getAllPinnedNftByUserName");
        // queryClient.invalidateQueries("getAllNftCollection");
        // queryClient.invalidateQueries("recentlyListedNft");
        // queryClient.invalidateQueries("mostViewNft");
        // queryClient.invalidateQueries("mostLikeNft")
        
      }
    }
  )

  const {mutateAsync:mutateAsyncToggleLike,data,isLoading:isLoadingtoggleLike}=useMutation(
    "toggleLike",
    toggleLike,{
      onSuccess:(data)=>{
        // console.log(data?.responseResult);
    
        queryClient.invalidateQueries("getAllHideNft");
        queryClient.invalidateQueries("getNftCollectionByChainNameAndUserName")
        queryClient.invalidateQueries("getAllNftByChainName")
        queryClient.invalidateQueries("getAllPinnedNftByUserName");
        // queryClient.invalidateQueries("getAllNftCollection");
        // queryClient.invalidateQueries("recentlyListedNft");
        // queryClient.invalidateQueries("mostViewNft");
        // queryClient.invalidateQueries("mostLikeNft");
      
        
      }
    }
  )


// console.log(props?.data?.likes);
  const formik = useFormik({
    initialValues: {
      decs: "",
      name: "",
    },
    validationSchema: yup.object({
      decs: yup
        .string()
        .min(0, "Too Short!")
        .max(160, "Too Long!"),
      name: yup
        .string(),
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsyncEdit({
          token: localStorage.getItem("token"),
          nftCollectionId:props?.data._id,
          value: {
            lazyName:values.name,
            lazyDescription:values.decs
          }
        });
        handleClose()
      } catch (error) {
        console.log(error);
      }
    },
  });

//  const {data:imageData}=useQuery(
//   ["getUserNFTByTokenURI",props?.data.metadata.image],
//   ()=>getUserNFTByTokenURI(props?.data.metadata.image),{

//   }
//  )

//  console.log(imageData);
  
  useOnClick(ref, () => setShow(false));
  return (
    <>
    <Container  ref={ref}>
    <Grid container spacing={3} >
      <Grid item lg={12} >
      <Box>
          {/* <Typography variant="h3" style={{margin:"2rem 0 0 0"}}></Typography> */}
          {/* <Typography variant="h3" style={{margin:"2rem 0 0 0"}}>{props.data1.title}</Typography> */}
        </Box>
      </Grid>
      <Grid  item md={12} style={{margin:props?.data.margin}}  >
        <Box className={classes.bag8}>
          <Box className={classes.bag9}>
            <Box className={classes.bag7}>
              <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
                
              >
                {show ? (
                  <i class="bi bi-x-lg" ></i>
                ) : (
                  <i class="bi bi-three-dots"></i>
                )}
              </button>
            </Box>

            {show ? (
              <Box className={classes.bag10} >
              {  (token && (props?.data.userId._id===userData?._id || props?.data.userId===userData?._id || props?.data.userId.userName===userData?.userName)) && (
                <>
                <p
                       
                   onClick={handleShow}
                       
                    
                     >
                       Edit
                </p>
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
               >Unpin Nft  {isLoadingpinnedToggleNft &&   <CircularProgress color="primary" size="sm"/>}</p>   
               ):(
                <p onClick={async()=>{
                try{
                  await mutateAsyncPinnedToggleNft({token:localStorage.getItem("token"),nftCollectionId:props?.data._id})
                }catch(error){

                }
               }}>Pin Nft {isLoadingpinnedToggleNft &&   <CircularProgress color="primary" size="sm"/>}</p>
               )}
               { props?.data.status==="HIDE" ?(
               <p onClick={async()=>{
                try{
                  await mutateAsyncHideToggleNft({token:localStorage.getItem("token"),nftCollectionId:props?.data._id})
                }catch(error){

                }
               }}
               >Unhide Nft  {isLoadinghideToggleNft &&   <CircularProgress color="primary" size="sm"/>}</p>
               ):(
                <p onClick={async()=>{
                try{
                  await mutateAsyncHideToggleNft({token:localStorage.getItem("token"),nftCollectionId:props?.data._id})
                }catch(error){

                }
               }}>Hide Nft {isLoadinghideToggleNft &&   <CircularProgress color="primary" size="sm"/>}</p>
               )}
              
               </>
               )}
               { props?.data?.chainName==="Ethereum" &&
                <>
               <Box sx={{color: "#000", margin: "0 0 4px 0", padding: "4px", fontSize: "1rem", textAlign: "left", fontWeight: "500"}}>
               <a href={`https://opensea.io/assets/ethereum/${props?.data.tokenAddress}/${props?.data.tokenId}`} target="_blank" style={{color: "#000",fontSize:"0.8rem"}} className={classes.bin2}>View on OpenSea</a>
               </Box>
               <Box sx={{color: "#000", margin: "0 0 4px 0", padding: "4px", fontSize: "1rem", textAlign: "left", fontWeight: "500"}}>
               <a href={`https://etherscan.io/nft/${props?.data.tokenAddress}/${props?.data.tokenId}`} target="_blank" style={{color: "#000",fontSize:"0.8rem"}} className={classes.bin2}>View on EtherScan</a>
               </Box>
               </>
               }
               { props?.data?.chainName==="BSC Testnet" &&
                <>
               {/* <Box sx={{color: "#000", margin: "0 0 4px 0", padding: "4px", fontSize: "1rem", textAlign: "left", fontWeight: "500"}}>
               <a href={`https://opensea.io/assets/ethereum/${props?.data.tokenAddress}/${props?.data.tokenId}`} target="_blank" style={{color: "#000",fontSize:"0.8rem"}}>View on OpenSea</a>
               </Box> */}
               <Box sx={{color: "#000", margin: "0 0 4px 0", padding: "12px", fontSize: "1rem", textAlign: "left", fontWeight: "500"}}>
               <a href={`https://testnet.bscscan.com/token/${props?.data.tokenAddress}?a=${props?.data.tokenId}`} target="_blank" style={{color: "#000",fontSize:"0.8rem"}}>View on BscScan</a>
               </Box>
               </>
               }

              </Box>
            ) : null}
          </Box>
          {/* <Link to={`/nftdetailpage/${props.data.id}`}> */}
          {/* {props?.data.metadata.image ?  props?.data.metadata.image.replace("ipfs://","https://wizard.infura-ipfs.io/ipfs/") : "" } */}
          <img src={props?.data.metadata.image ?  props?.data.metadata.image.replace("ipfs://","https://ipfs.io/ipfs/") : "" } alt=""  onClick={clickable}/>
          {/* </Link> */}
          {/* <img src={props.data1.img} alt="" /> */}
          <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding:"1rem"
                }}
              >
                <Box onClick={clickable}>
                  {/* <h6>#{props.data.tokenId}</h6> */}
                  <h6>
                    {props?.data.lazyName
                      ? props?.data.lazyName
                      : props?.data.metadata.name}
                  </h6>
                  <p>
                    {props?.data.lazyDescription
                      ? props?.data.lazyDescription
                      : props?.data.metadata.description}
                  </p>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Badge badgeContent={`${(data?.responseResult?.likes?.length || props?.data.likesCount || props?.data.likes.length)}`} color="primary">
                    <Checkbox className={classes.fav}
                      onClick={async() => {
                      
                        try{
                  await mutateAsyncToggleLike({token:localStorage.getItem("token"),nftCollectionId:props?.data._id})
                }catch(error){

                }
                        
                      }}
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={
                        <Favorite
                          indeterminateIcon
                          sx={{ color: "red" }}
                          // onClick={() => {
                          //   setCount(count + 1);
                          // }}
                        />
                      }
                      checked={data?.responseResult?.likes.includes(userData?._id)||props?.data?.likes.includes(userData?._id)}
                    />
                  </Badge>
                 
                  <Typography variant="body2"> <Badge badgeContent={props?.data?.viewsCount ? props?.data?.viewsCount:"0" } color="primary">
                  <RemoveRedEyeIcon/>
                 
                  </Badge></Typography>
                  {/* <Typography variant="body2"><RemoveRedEyeIcon/>{" "}{props?.data.viewsCount}</Typography> */}
                </Box>
              </Box>
        </Box>
      </Grid>
      </Grid>
    </Container>


    <Modal show={shows} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box>
            <Box>
              <form className={classes.bagr} onSubmit={formik.handleSubmit}>
                <TextField
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  className={classes.bag90}
                  // sx={{ width: "100%" }}
                  
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  InputProps={{
        disableUnderline: true,
      }}
                />

                <TextareaAutosize
                  className={classes.bag90}
              
                  // aria-label="minimum height"
                  minRows={3}
                  placeholder="Enter Description"
                  // style={{ width: 200 }}
                  onChange={formik.handleChange}
                  maxLength={CHARACTER_LIMIT}
                  id="decs"
                  name="decs"
                  value={formik.values.decs}
                  // error={formik.touched.decs && Boolean(formik.errors.decs)}
                  // helperText={formik.touched.decs && formik.errors.decs}
                />
                <Box className={classes.bag6} mb>
                <h6>Character Count {formik.values.decs.length}/160</h6>
                {/* <h6>Character Count {count}/160</h6> */}
              </Box>
                <button type="submit">Submit</button>
              </form>
                <Box className={classes.bagr}>
                <button onClick={handleClose}>Close</button>
                </Box>
            </Box>
          </Box>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default NftBox;

