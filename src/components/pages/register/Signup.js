import React from "react";
import Header2 from '../header2'
import { useMutation } from "react-query";
import { useNavigate ,Link} from "react-router-dom";
import { signup } from "../../../api/ApiCall/signup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import {TextField,Button} from '@mui/material'


const Signup = () => {
    const navigate = useNavigate();
    const { isError, error, isLoading, mutateAsync, isSuccess } = useMutation(
      "signup",
      signup,
      {
        onSuccess: (data) => {
          // dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
          try {
            if (data.responseCode === 200) {
              navigate("/login");
            //   localStorage.setItem("data", data);
            console.log(data);
              toast.success(JSON.stringify("You are signup Successfully"));
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
          userName:'',
          password: "",
        },
        validationSchema: Yup.object({
          email: Yup.string().email("Invalid email format").required("Required!"),
          userName:Yup.string().min(4,"Minimum 4 characters").required('Required!'),
          password: Yup.string()
            .min(4, "Minimum 4 characters")
            .required("Required!"),
        }),
        onSubmit: async (values) => {
            try {
                await mutateAsync({
                  email: values.email,
                  userName:values.userName,
                  password: values.password,
                });
              } catch (error) {
                console.log(error);
              }
        },
      });
    return(
        <div>
       <Header2 />
       <section id="signup">
        <div className="container">
            <div className="signup-hding">
                <h1>Sign Up</h1>
            </div>
        <form className="signupbox" onSubmit={formik.handleSubmit}>
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
          id="userName"
          name="userName"
          label="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
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
              <Button variant="contained" color='primary' type='submit' className='signpubutn'>
                Sign Up
                </Button>
                    <p className="sig-pr">Already have an account?<span><Link to="/login"> Sign in.</Link></span></p>
            </form>
        </div>
       </section>
    </div>
    )
}

export default Signup;