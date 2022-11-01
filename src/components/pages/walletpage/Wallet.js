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


const Wallet = () => {
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
                <div className="walletpage">
                    <div className="container">
                        <div className="wallet-hding">
                            <h3>My Wallets</h3>
                            <a href="#">Add Wallet</a>
                        </div>
                        <div className="no-wallet">
                            <p>No wallets found.</p>
                        </div>
                        <div className="myprofile">
                            <h1>My Profile</h1>
                        </div>
                        <div className="edit-profile">
                            <a onClick={handleShow} href="#">Edit Profile</a>
                            <p>@jasim</p>
                        </div>
                        {/* <Selector/> */}


                        <div className="token-main-box">
                            <div className="connect-wallet">
                                <a href="#">Connect Wallet</a>
                            </div>
                            <div className="token-box">
                                <div className="swap-card">
                                    <div className="swap-hding">
                                        <div className="swap-h"><h1>Swap</h1></div>
                                        <div className="swapleft">

                                            <div className="settingicon">
                                                <a href="#" ><img src={setting} /></a>
                                            </div>
                                        </div>

                                    </div>


                                    <div>
                                        <div class="input-box"><p>From:<span>Balance: 0</span></p><div className="input-section"><input type="text" placeholder="0.00" name="from" autocomplete="off" value="0" />
                                            <div className="dropdown-wrapper">
                                                <div className="dropdown-selection">
                                                    <div className="coin-icon"><img src={bnbicon} alt="" />
                                                    </div>
                                                    <select name="coin" id="coin">
                                                        <option value="bnb">BNB</option>
                                                        <option value="eth">ETH</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="arrowup">
                                            <a href="javascript:void(0)"><img src={arrowup} /></a>
                                        </div>
                                        <div class="input-box"><p>To:<span>Balance: 0</span></p><div className="input-section"><input type="text" placeholder="0.00" name="from" autocomplete="off" value="0" />
                                            <div className="dropdown-wrapper">
                                                <div className="dropdown-selection">
                                                    <div className="coin-icon"><img src={ethicon} alt="" />
                                                    </div>
                                                    <select name="coin" id="coin">
                                                        <option value="eth">ETH</option>
                                                        <option value="bnb">BNB</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>


                                    <div className="swap-list-wrp">
                                        <ul className="swap-list">
                                            <li>
                                                <div className="s-list">
                                                    <div className="tooltipquery">

                                                        <Box sx={{ width: 0 }}>
                                                            <Grid container justifyContent="center">
                                                                <Grid item container xs={6} alignItems="flex-end" direction="column">
                                                                    <Grid item>
                                                                        <Tooltip className title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed." placement="left-start">
                                                                            <a href='javascript:void(0)' className="tooltipbutn"><img className="tooltipimg" src={qmark} /></a>
                                                                        </Tooltip>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                        <p className="amount-q">Enter an amount</p>
                                                    </div>



                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="reviewswap">
                                        <a href="#">Review swap</a>
                                    </div>

                                </div>
                            </div>
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


export default Wallet;