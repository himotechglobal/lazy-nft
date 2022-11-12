import React,{useContext} from "react";
import Header from "../../components/Header/Header";
import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../api/ApiCall/signup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import { UserContext } from "../../context/User/UserContext";
import {actionTypes} from "../../context/User/UserReducer"
const useStyle = makeStyles({
  signupbox: {
    width: "28%", margin: "5rem auto",
    // borderRadius:"30px",
  },
  btn:{
    textAlign:"center",
    margin:"2rem 0",
      "& button":{
        background: "#000", padding: "10px 27px", border: "none", borderRadius: "36px"
      }
  },
  signup:{
    margin:"3rem 0",
      "& h1":{
        fontSize: "2rem", fontWeight: "500"
      }
  },
  typ:{
    color:"#000",
    textDecoration:"underline !important",
    fontSize:"1rem"
  }
});
const Signup = () => {
  const classes = useStyle();
  const [, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const { isError, error, isLoading, mutateAsync, isSuccess } = useMutation(
    "signup",
    signup,
    {
      onSuccess: (data) => {
        try {
          if (data.responseCode === 200) {
            navigate("/wallet");
            dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
            localStorage.setItem("token", data.token);
            toast.success(JSON.stringify("You are signup Successfully"));
            dispatch({ type: actionTypes.SET_USER, value: data.responseResult });
          } else {
            toast.error(JSON.stringify(data.responseMessage));
          }
        } catch (error) {
          toast.error(JSON.stringify(error));
        }
      },
      onError: (error, data) => {
        toast.error(JSON.stringify(data.responseMessage));
      },
    }
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      userName: Yup.string()
        .min(4, "Minimum 4 characters")
        .required("Required!"),
      password: Yup.string()
        .min(4, "Minimum 4 characters")
        .required("Required!"),
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          email: values.email,
          userName: values.userName,
          password: values.password,
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <Header />
      <section id="signup">
        <div className="container">
          <div className={classes.signup}>
            <h1>Sign Up</h1>
          </div>
          <form className={classes.signupbox} onSubmit={formik.handleSubmit}>
            <TextField
              // fullWidth
              id="email"
              variant="standard"
              name="email"
              placeholder="Email"
              // label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{display:"flex",margin: "12px", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",   borderRadius: "35px", }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              // fullWidth
              variant="standard"
              id="userName"
              name="userName"
              placeholder="userName"
              // label="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              sx={{display:"flex",margin: "12px", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",   borderRadius: "35px", }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              // fullWidth
              variant="standard"
              id="password"
              name="password"
              // label="Password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{display:"flex",margin: "12px",boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",   borderRadius: "35px", }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Box className={classes.btn}>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="btn btn-primary"
            >
              Sign Up
            </button>
            </Box>
            <p className="sig-pr">
              Already have an account?
              <span>
                <Link to="/login" className={classes.typ}> Sign in.</Link>
              </span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;