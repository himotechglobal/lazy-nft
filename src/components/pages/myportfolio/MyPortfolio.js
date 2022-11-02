import React, { useState, useEffect } from 'react'
import Header3 from '../header3'
import Modal from 'react-bootstrap/Modal';
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../api/ApiCall/login";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, TextareaAutosize } from '@mui/material'
import Selector from '../walletpage/Selector'
import refresh from '../../images/refresh.svg'
import setting from '../../images/setting.svg'
import bnbicon from '../../images/bnbicon.svg'
import arrowup from '../../images/arrowup.svg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import qmark from '../../images/qmark.svg'
import ethicon from '../../images/ethicon.svg'
import uniswap from '../../images/uniswap.png'
import news1 from '../../images/news1.gif'
import Social from '../Social'

const MyPortfolio = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <div>
                <Header3 />
                <div className="myportfolio">
                    <div className="container">
                         
                        <div className="edit-profile2">
                            <a onClick={handleShow} href="#">Edit Profile</a>
                            <p>@jasim</p>
                        </div>
                        {/* <Selector/> */}

                        <div className='notadd-w'>
                        <p>This user has not added any wallets.</p>
                        </div>


                         
                      
                         
                   
                    </div>
                </div>
            </div>





















            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ borderBottom: 'none' }} closeButton>
                    <Modal.Title style={{ color: '#000', fontWeight: '700', }}>Edit Profile</Modal.Title>
                </Modal.Header>

                <form onSubmit={formik.handleSubmit} className="textareainpt">
                    <div>
                        <h3 className="inpt-hding">Bio</h3>
                        <TextareaAutosize
                            className="inpt-bio"
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            aria-label="empty textarea"
                            placeholder="Empty bio"
                            style={{ width: "100%" }}
                        />

                    </div>
                    <div>
                        <h3 className="link-hding">Links</h3>
                        <div className="inpt-hding-mr">
                            <h3 className="inpt-hding">Twitter Name:</h3>
                            <TextField
                                className="inpt-bio"
                                fullWidth
                                id="userName"
                                name="userName"
                                label="Enter Twitter Username"
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                error={formik.touched.userName && Boolean(formik.errors.userName)}
                                helperText={formik.touched.userName && formik.errors.userName}
                            />

                        </div>
                        <div className="inpt-hding-mr">
                            <h3 className="inpt-hding">Facebook Name: </h3>
                            <TextField
                                className="inpt-bio"
                                fullWidth
                                id="userName"
                                name="userName"
                                label="Enter Facebook Username"
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                error={formik.touched.userName && Boolean(formik.errors.userName)}
                                helperText={formik.touched.userName && formik.errors.userName}
                            />

                        </div>
                        <div className="inpt-hding-mr">
                            <h3 className="inpt-hding">Personal URL: </h3>
                            <TextField
                                className="inpt-bio"
                                fullWidth
                                id="userName"
                                name="userName"
                                label="Website"
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                error={formik.touched.userName && Boolean(formik.errors.userName)}
                                helperText={formik.touched.userName && formik.errors.userName}
                            />

                        </div>
                    </div>
                    <div className="note">
                        <p>Note: To change your profile picture, click on the "..." of the NFT you'd like as your picture, and select "Make Profile Picture"</p>
                    </div>
                    <div className="submitbutn">
                        <a href="">Submit</a>
                    </div>
                    <div className="closebutn">
                        <a href="">Close</a>
                    </div>
                </form>


            </Modal>
        </div>
    )
}


export default MyPortfolio;