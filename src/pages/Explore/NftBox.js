import React, { useState, useContext } from "react";
import {
  Box,
  Container,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateProfilePic } from "../../api/ApiCall/updateProfilePic";
import { useMutation } from "react-query";
import { UserContext } from "../../context/User/UserContext";
import { actionTypes } from "../../context/User/UserReducer";
import { pinnedNft } from "../../api/ApiCall/pinnedNft/pinnedNft";
import { unpinnedNft } from "../../api/ApiCall/pinnedNft/unpinnedNft";
import { hideNft } from "../../api/ApiCall/nftHide/hideNft";
import { unhideNft } from "../../api/ApiCall/nftHide/unhideNft";
import Badge from "@mui/material/Badge";
// import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { WOLFPUPS_NFT_address } from "../../config/index";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyle = makeStyles((theme) => ({
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
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
    },
    "& p": {
      fontSize: "0.8rem",
      fontWeight: "500",
      textAlign: "left",
      padding: "10px  ",
      margin: "0 0 4px 0",
      color: "#000",
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
    // position: absolute;
    width: "100%"
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
    },
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
  const [, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  // const [show, setShow] = useState(false);
  const classes = useStyle();
  const clickable = () => {
    navigate(`/nftdetailpage/${props?.data.tokenId}`);
  };
  const { mutateAsync } = useMutation("updateProfilePic", updateProfilePic, {
    onSuccess: (data) => {
      dispatch({
        type: actionTypes.UPDATE_PROFILE_PIC,
        value: data?.responseResult,
      });
    },
  });

  const { mutateAsync: mutateAsyncPinnedNft } = useMutation(
    "pinnedNft",
    pinnedNft,
    {
      onSuccess: (data) => {
        props?.pinnedRefetch.refetch();
      },
    }
  );

  const { mutateAsync: mutateAsyncUnpinnedNft } = useMutation(
    "unpinnedNft",
    unpinnedNft,
    {
      onSuccess: (data) => {
        props?.pinnedRefetch.refetch();
      },
    }
  );

  const { mutateAsync: mutateAsyncHideNft } = useMutation("hideNft", hideNft);

  const { mutateAsync: mutateAsyncUnhideNft } = useMutation(
    "unhideNft",
    unhideNft
  );
  const [count, setCount] = useState(0);

  const [shows, setShows] = useState(false);
  const [show, setShow] = useState(false);
  const toggleModal = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShow(!open);
  };
  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);
  const formik = useFormik({
    initialValues: {
      decs: "",
      name: "",
    },
    validationSchema: yup.object({
      decs: yup
        .string()
        .min(0, "Too Short!")
        .max(160, "Too Long!")
        .required("Required!"),
      name: yup
        .string()
        .min(4, "Too Short!")
        .max(20, "Too Long!")
        .required("Required!"),
    }),
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {/* <Grid item lg={12}>
            <Box>
              <Typography variant="h3" style={{margin:"2rem 0 0 0"}}></Typography>
              <Typography variant="h3" style={{margin:"2rem 0 0 0"}}>{props.data1.title}</Typography>
            </Box>
          </Grid> */}
          <Grid item md={12} style={{ margin: props.data.margin }}>
            <Box className={classes.bag8}>
              <Box className={classes.bag9}>
                <Box className={classes.bag7}>
                  <button
                    className="btn btn-primary"
                    onClick={() => setShow(!show)}
                    // onClose={toggleModal(true)}
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
                    {props?.data.tokenOwner ===
                      "0x8fFAeBAcbc3bA0869098Fc0D20cA292dC1e94a73" && (
                      <>
                      
                        <p
                       
                          onClick={handleShow}
                          
                       
                        >
                          Edit
                        </p>
                        <p
                          onClick={async () => {
                            try {
                              await mutateAsync({
                                token: localStorage.getItem("token"),
                                value: props.data.metadata.image.replace(
                                  "ipfs://",
                                  "https://ipfs.io/ipfs/"
                                ),
                              });
                            } catch (error) {}
                          }}
                        >
                          Make Profile Picture
                        </p>

                        {props?.pin === "true" ? (
                          <p
                            onClick={async () => {
                              try {
                                await mutateAsyncUnpinnedNft({
                                  token: localStorage.getItem("token"),
                                  tokenAddress: props?.data.tokenAddress,
                                  tokenId: props?.data.tokenId,
                                });
                              } catch (error) {}
                            }}
                            
                          >
                            Unpinned Nft
                          </p>
                        ) : (
                          <p
                            onClick={async () => {
                              try {
                                await mutateAsyncPinnedNft({
                                  token: localStorage.getItem("token"),
                                  tokenAddress: props?.data.tokenAddress,
                                  tokenId: props?.data.tokenId,
                                });
                              } catch (error) {}
                            }}
                            onClose={toggleModal(true)}
                          >
                            Pinned Nft
                          </p>
                        )}
                        {props?.hide === "true" ? (
                          <p
                            onClick={async () => {
                              try {
                                await mutateAsyncUnhideNft({
                                  token: localStorage.getItem("token"),
                                  tokenAddress: props?.data.tokenAddress,
                                  tokenId: props?.data.tokenId,
                                });
                              } catch (error) {}
                            }}
                          >
                            Unhide Nft
                          </p>
                        ) : (
                          <p
                            onClick={async () => {
                              try {
                                await mutateAsyncHideNft({
                                  token: localStorage.getItem("token"),
                                  tokenAddress: props?.data.tokenAddress,
                                  tokenId: props?.data.tokenId,
                                });
                              } catch (error) {}
                            }}
                          >
                            Hide Nft
                          </p>
                        )}
                      </>
                    )}
                    <Box
                      sx={{
                        color: "#000",
                        margin: "0 0 4px 0",
                        padding: "10px",
                        fontSize: "0.8rem",
                        textAlign: "left",
                        fontWeight: "500",
                        width: "123%",
                      }}
                    >
                      <a
                        href={`https://opensea.io/assets/ethereum/${WOLFPUPS_NFT_address}/${props?.data.tokenId}`}
                        target="_blank"
                        style={{ color: "#000", fontSize: "0.8rem" }}
                      >
                        Veiw on OpenSea
                      </a>
                    </Box>
                    <Box
                      sx={{
                        color: "#000",
                        margin: "0 0 4px 0",
                        padding: "10px",
                        fontSize: "0.8rem",
                        textAlign: "left",
                        fontWeight: "500",
                        width: "123%",
                      }}
                    >
                      <a
                        href={`https://etherscan.io/nft//${WOLFPUPS_NFT_address}/${props?.data.tokenId}`}
                        target="_blank"
                        style={{ color: "#000", fontSize: "0.8rem" }}
                      >
                        Veiw on EtherScan
                      </a>
                    </Box>
                  </Box>
                ) : null}
              </Box>
              {/* <Link to={`/nftdetailpage/${props.data.id}`}> */}
              <img
                src={
                  props?.data.metadata.image
                    ? `${props?.data.metadata.image.replace(
                        "ipfs://",
                        "https://ipfs.io/ipfs/"
                      )}`
                    : ""
                }
                alt=""
                onClick={clickable}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box onClick={clickable}>
                  <h6>#{props.data.tokenId}</h6>
                  <p>
                    {props?.data.lazyName
                      ? props?.data.lazyName
                      : props?.data.metadata.name}
                  </p>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Badge badgeContent={`${count}`} color="primary">
                    <Checkbox
                      onClick={() => {
                        setCount(count + 1);
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
                    />
                  </Badge>
                  <Typography variant="body2"><RemoveRedEyeIcon/>{" "}{count}</Typography>
                </Box>
              </Box>
              {/* </Link> */}
              {/* <img src={props.data1.img} alt="" /> */}
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
                  sx={{ width: "100%" }}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />

                <TextareaAutosize
                  className={classes.bag90}
                  // aria-label="minimum height"
                  minRows={3}
                  placeholder="Enter Description"
                  // style={{ width: 200 }}
                  onChange={formik.handleChange}
                  id="decs"
                  name="decs"
                  value={formik.values.decs}
                  error={formik.touched.decs && Boolean(formik.errors.decs)}
                  helperText={formik.touched.decs && formik.errors.decs}
                />
                <button type="submit">Submit</button>

                <button onClick={handleClose}>Close</button>
              </form>
            </Box>
          </Box>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NftBox;

// const metadata="{"name":"CHECK","description":"CHECK","properties":{"cover_url":null,"artist":null,"public_profile_link":null,"height":null,"breadth":null,"length":null,"weight":null,"tags":null},"image":"https://ipfs.io/ipfs/QmPVm6HMwVBRGsUH9HDCoaNMLciff361vwk3pT8w7MGQSQ","preview":"https://ipfs.io/ipfs/QmPVm6HMwVBRGsUH9HDCoaNMLciff361vwk3pT8w7MGQSQ"}"
