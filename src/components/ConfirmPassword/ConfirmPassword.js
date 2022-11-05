import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
const useStyle = makeStyles({
  wrap18: {
    padding: "3rem 0 2rem",
    "& h5": {
      // textAlign: "center",
    },
    "@media (maxwidth: 575.98px)": {},
    "@media (maxwidth: 767.98px)": {},
    "@media (maxwidth: 991.98px)": {},
    "@media (maxwidth: 1199.98px)": {},
  },
  bag22: {
    marginTop: "2rem",
    textAlign: "center",
    "& form": {
      // boxShadow: "0px 0px 5px 0px #ccc", margin: "0 auto", width: "21%", padding: "10px", borderRadius: "28px"
    },
    "& TextField": {},
  },
  bag26: {
    "& button": {
      background: "#000",
      border: "none",
      margin: "2rem",
      padding: "10px 44px",
      borderRadius: "35px",
    },
    "& button:hover": {
      background: "#000",
      transform: "translatey(-10px)",
      transition: "0.5s ease-in-out",
    },
    "@media (maxwidth: 575.98px)": {},
    "@media (maxwidth: 767.98px)": {},
    "@media (maxwidth: 991.98px)": {},
    "@media (maxwidth: 1199.98px)": {},
  },
});
const ConfirmPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(10, "Minimum 10 characters")
        .required("Passowrd is Required!"),
      confirmpassword: Yup.string()
        .min(10, "Minimum 10 characters")
        .required("Passowrd is Required!"),
    }),
  });
  const classes = useStyle();
  return (
    <>
      <Header />

      <Box className={classes.wrap18}>
        <Container >
          <Grid container spacing={2}>
            <Grid md={12} justifyContent="center">
              <Typography variant="h5">Confirm Password</Typography>
            </Grid>
            <Grid md={12} sm={12}>
              <Box className={classes.bag22}>
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    variant="standard"
                    //   fullWidth
                    sx={{
                      boxShadow: "rgb(0 0 0 / 7%) 0px 2px 16px 0px",
                      borderRadius: "35px",
                      pl: "10px",
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    id="password"
                    name="password"
                    // label="Password"
                    type="password"
                    placeholder="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </form>
              </Box>
              <Box className={classes.bag22}>
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    variant="standard"
                    //   fullWidth
                    sx={{
                      boxShadow: "rgb(0 0 0 / 7%) 0px 2px 16px 0px",
                      borderRadius: "35px",
                      pl: "10px",
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    id="confirmpassword"
                    name="confirmpassword"
                    // label="confirm-password"
                    placeholder="confirm password"
                    type="password"
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmpassword &&
                      Boolean(formik.errors.confirmpassword)
                    }
                    helperText={
                      formik.touched.confirmpassword &&
                      formik.errors.confirmpassword
                    }
                  />
                  <Box className={classes.bag26}>
                    <button class="btn btn-primary btn-block" type="submit">
                      Submit
                    </button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ConfirmPassword;

// <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
// <InputLabel htmlFor="standard-adornment-password">
//   Password
// </InputLabel>
// <Input
//   id="standard-adornment-password"
//   type={values.showPassword ? "text" : "password"}
//   // value={values.password}
//   onChange={handleChange("password")}
//   endAdornment={
//     <InputAdornment position="end">
//       <IconButton
//         aria-label="toggle password visibility"
//         onClick={handleClickShowPassword}
//         onMouseDown={handleMouseDownPassword}
//       >
//         {values.showPassword ? (
//           <VisibilityOff />
//         ) : (
//           <Visibility />
//         )}
//       </IconButton>
//     </InputAdornment>
//   }
// />
// </FormControl>
