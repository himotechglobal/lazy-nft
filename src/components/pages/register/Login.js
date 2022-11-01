import React, { useState } from "react";
import Header2 from "../header2";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../api/ApiCall/login";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from '@mui/material'

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
            <Header2 />
            <section id="signup">
                <div className="container">
                    <div className="signup-hding">
                        <h1>Log In</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="signupbox">
                        <TextField
                        className="form-input"
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
                        className="form-input"
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

                        <Button  variant="contained" fullWidth className="signpubutn" type="submit">
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
                                <Link to="/reset"> Forgot your password?</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;

 
