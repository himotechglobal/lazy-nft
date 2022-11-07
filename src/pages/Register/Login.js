import React, { useState } from "react";
import Header from '../../components/Header/Header'
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/ApiCall/login";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import {TextField,Button} from '@mui/material'

const Login = () => {
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
          <div className="signup-hding">
            <h1>Log In</h1>
          </div>
        <form onSubmit={formik.handleSubmit} className="signupbox">
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
 
            <Button color="primary" variant="contained" fullWidth className="signpubutn" type="submit">
              Login
            </Button>
            <p className="sig-pr">
              Don't have an account?
              <span>
                <Link to="/signup"> Sign up.</Link>
              </span>
            </p>
            <p className="sig-pr">
              <span>
                <Link to="/forget"> Forgot your password?</Link>
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
