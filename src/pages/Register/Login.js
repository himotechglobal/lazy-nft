import React, { useState } from "react";
import Header from '../../components/Header/Header'
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/ApiCall/login";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import {TextField,Button,Box} from '@mui/material'
import { makeStyles } from "@mui/styles";
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
const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const { isError, error, isLoading, mutateAsync, isSuccess } = useMutation(
    "login",
    login,
    {
      onSuccess: (data) => {
        // dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
        try {
          if (data.responseCode === 200) {
            navigate("/");
            localStorage.setItem("token", data.token);
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
          sx={{display:"flex",margin: "12px", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",   borderRadius: "35px", }}
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
          sx={{display:"flex",margin: "12px", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",    borderRadius: "35px", }}
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
                <Link to="/signup" className={classes.typ}> Sign up.</Link>
              </span>
            </p>
            <p className="sig-pr" sx={{textAlign:"center"}}>
              <span>
                <Link to="/forget" className={classes.typ} > Forgot your password?</Link>
              </span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;

// import React from "react";
// import Header2 from '../header2'
// import { useFormik } from "formik";
// import * as Yup from 'yup';

// export default function Login() {
//     const formik = useFormik({
//       initialValues: {
//         email: "",
//         password: "",
//       },
//       validationSchema: Yup.object({
//         email: Yup.string().email("Invalid email format").required("Required!"),
//         password: Yup.string()
//           .min(4, "Minimum 4 characters")
//           .required("Required!")
//       }),
//       onSubmit: (values) => {
//         alert(JSON.stringify(values, null, 2));
//       }
//     });
//     return (
//        <>
//          <Header2 />
//         <section id="signup">
//         <div className="App">
//         <h1>Validation with Formik + Yup</h1>
//         <form onSubmit={formik.handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//             />
//             {formik.errors.email && formik.touched.email && (
//               <p>{formik.errors.email}</p>
//             )}
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//             />
//             {formik.errors.password && formik.touched.password && (
//               <p>{formik.errors.password}</p>
//             )}
//           </div>
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//         </section>
//        </>
//     );
//   }
