import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "react-query";
import { editProfile } from "../../api/ApiCall/editProfile";
import { toast } from "react-toastify";
const useStyle = makeStyles({
  //Wrap 3 Start

  wrap3: {
    padding: "4rem 0 2rem",
    " & h2": {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
  bag5: {
    display: "flex",
    justifyContent: "center",
    "& Button": {
      background: "#000",
      borderRadius: "15px",
      padding: "0.6rem 1.4rem",
      fontSize: "13px",
    },
    "& Button:hover": {
      background: "#000",
      transform: "translatey(-10px)",
      transition: "0.5s ease-in-out",
    },
    "& p": {
      color: "#000",
      fontSize: "1rem",
      fontWeight: "bolder",
      padding: "1rem",
    },
  },
  bag6: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& h5,h6": {
      margin: "0",
    },
  },
  bag7: {
    width: "100% !important",
    border: "none",
    margin: "3rem 0 0 0",
    border: "none",
    padding: "10px",
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
  },

  bag8: {
    " & p":{
        fontSize:"13px",
        color:"#000",
        fontWeight:"400",
    },
    "& button":{
        width: "100%", margin: "13px 0", border: "1px solid #000", padding: "10px", borderRadius: "41px",
    },
    "& button:hover":{
        backgroundColor:"#000",
        color:"#fff",
        transition: "color 0.5s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"
    },
    marginTop: "10px",
    "& Form": {
        display:"block",
      padding: "10px",
      "&  h2":{
        fontSize:"1.5rem",
        fontWeight:"bold",
      },
      "& label": {
        margin: "10px  0",
        fontSize: "1.3rem",
        fontWeight: "bolder",
      },
      
    },
  },
   bag9:{
    display:"block",
    border: "1px solid linen",
    margin:"10px 0",
    width:"100%",
    padding:"13px",
    borderRadius:"25px",
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
},
});

const editSchema = Yup.object().shape({
  bio: Yup.string()
    .min(0, "Too Short!")
    .max(160, "Too Long!").required("Required!"),
  twitterName: Yup.string()
    .min(4, "Too Short!")
    .max(12, "Too Long!"),
  facebookName: Yup.string().min(4,"Too Short").max(12,"Too Long"),
  personalURL:Yup.string().min(4,"Too Short").max(12,"Too Long")
});
const EditProfile = () => {

  const { isError, error, isLoading, mutateAsync, isSuccess } = useMutation(
    "editProfile",
    editProfile,
    {
      onSuccess: (data) => {
        // dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
        try {
          if (data) {
            console.log(data);
            toast.success(JSON.stringify("You Profile Update Successfully"));
          } else {
            toast.error(JSON.stringify(data.responseMessage));
          }
        } catch (error) {
          toast.error(JSON.stringify(error.message));
        }
      },
      onError: (error, data) => {
        toast.error(JSON.stringify(data.responseMessage));
      },
    }
  );

  const classes = useStyle();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Box className={classes.wrap3}>
        <Container>
          <Grid container spacing={2} sx={{justifyContent:{lg:"auto",xs:"space-between",alignItems:"center",}}}>
            <Grid item md={12}>
              <Box>
                <Typography variant="h2">My Profile</Typography>
              </Box>
            </Grid>

            <Grid item md={12}>
              <Box className={classes.bag5} >
                <Button variant="contained" onClick={handleShow}>
                  Edit Profile
                </Button>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className={classes.bag5} >
                <p style={{margin:"0"}}>@rxctgfjk</p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <Box className={classes.bag6}>
            <h5>Bio</h5>
            <h6>Character Count 0/160</h6>
          </Box>
          <Box>
            <TextareaAutosize
              className={classes.bag7}
              // aria-label="minimum height"
              minRows={3}
              placeholder="Enter Bio"
              style={{ width: 200 }}
            />
          </Box>
          <Box className={classes.bag8}>
            <Formik
              initialValues={{
                bio: "",
                twitterName: "",
                facebookName: "",
                personalURL:""

              }}
              validationSchema={editSchema}
              onSubmit={ async (values) => {
        try {
            await mutateAsync({
              token:localStorage.getItem('token'),
              value:{
              bio: values.bio,
              twitterName: values.twitterName,
              facebookName: values.facebookName,
              personalURL:values.personalURL
              }
            });
          } catch (error) {
            console.log(error);
          }


          }}
            >
              {({ errors, touched }) => (
                <Form>
                  <h2>Links</h2>
                  <label htmlFor="bio">Twitter Name:</label>
                  <Field
                    name="bio"
                    placeholder="Enter Twitter Name"
                    className={classes.bag9}
                  />
                  {errors.bio && touched.bio ? (
                    <div>{errors.bio}</div>
                  ) : null}
                  <label htmlFor="">Facebook Name:</label>
                  <Field name="lastName"   placeholder="Enter Facebook Name" className={classes.bag9}/>
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                  <label htmlFor="">Personal URL:</label>
                  <Field name="email" type="text" placeholder=" Website"  className={classes.bag9}/>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                  {/* <Box> */}
                    <p>Note: To change your profile picture, click on the "..." of the NFT you'd like as your picture, and select "Make Profile Picture"</p>
                  {/* </Box> */}
                  <button type="submit" onClick={handleClose}>Submit</button>
                  <button type="submit" onClick={handleClose}>Cloce</button>
                </Form>
              )}
            </Formik>
          </Box>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProfile;