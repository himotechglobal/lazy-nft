import React, { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/ApiCall/login";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { UserContext } from "../../context/User/UserContext";
import { actionTypes } from "../../context/User/UserReducer";
import { viewProfile } from "../../api/ApiCall/viewProfile";
const useStyle = makeStyles({
  signupbox: {
    width: "28%",
    margin: "5rem auto",
    // borderRadius:"30px",
  },
  btn: {
    textAlign: "center",
    margin: "2rem 0",
    "& button": {
      background: "#000",
      padding: "10px 27px",
      border: "none",
      borderRadius: "36px",
    },
  },
  signup: {
    margin: "3rem 0",
    "& h1": {
      fontSize: "2rem",
      fontWeight: "500",
    },
  },
  typ: {
    color: "#000",
    textDecoration: "underline !important",
    fontSize: "1rem",
  },
});
const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const [, dispatch] = useContext(UserContext);

  const { isError, error, isLoading, mutateAsync, isSuccess } = useMutation(
    "login",
    login,
    {
      onSuccess: (data) => {
        try {
          if (data.responseCode === 200) {
            console.log(data?.responseResult);
            navigate("/explore");
            dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
            localStorage.setItem("token", data.token);
            dispatch({
              type: actionTypes.SET_USER,
              value: data.responseResult,
            });
            toast.success(JSON.stringify("You are Login Successfully"));
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
  // const {refetch}=useQuery(
  //   ["viewProfile",token],
  //   ()=>viewProfile(token),{
  //     onSuccess:(data)=>{
  //       dispatch({ type: actionTypes.SET_USER, value:data.data});
  //     }
  //   }
  // )
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(4, "Minimum 4 characters")
        .required("Required!"),
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          email: values.email,
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
            <h1>Log In</h1>
          </div>
          <form onSubmit={formik.handleSubmit} className={classes.signupbox}>
            <TextField
              // fullWidth
              id="email"
              name="email"
              placeholder="Email"
              variant="standard"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                display: "flex",
                margin: "12px",
                boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
                borderRadius: "35px",
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              // fullWidth
              id="password"
              name="password"
              placeholder="Password"
              variant="standard"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{
                display: "flex",
                margin: "12px",
                boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
                borderRadius: "35px",
              }}
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
                login
              </button>
            </Box>
            <p className="sig-pr">
              Don't have an account?
              <span>
                <Link to="/signup" className={classes.typ}>
                  {" "}
                  Sign up.
                </Link>
              </span>
            </p>
            <p className="sig-pr" sx={{ textAlign: "center" }}>
              <span>
                <Link to="/forget" className={classes.typ}>
                  {" "}
                  Forgot your password?
                </Link>
              </span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;