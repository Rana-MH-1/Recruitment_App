import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import { LoginAction } from "../Redux/Actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {clearError} from '../Redux/Actions/AppStateActions'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ed6034',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ed6034',
      },
    },
  },
})(TextField);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    // backgroundImage:
    //   "url(https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg)",
      backgroundImage:
      "url(/signin.gif)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#ed6034",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color:'#ed6034'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ed6034",
    '&:hover': {
      backgroundColor: '#ed6034',
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const [info, setInfo] = useState({
    Email: "",
    Password: "",
  });

  const handleInfoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    dispatch(clearError())
  };

  const dispatch = useDispatch();
  const Login = (e) => {
    e.preventDefault();
    dispatch(LoginAction(info));
  };

  const Auth = useSelector((state) => state.Auth);
  const history = useHistory();
  useEffect(() => {
    if (Auth.isAuth) history.push("/");
  }, [Auth.isAuth]);

  const Errors = useSelector((state) => state.appState.errors);
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
           
          <CssTextField      

              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="Email"
              autoComplete="email"
              autoFocus
              error={Errors?.Email?.msg || Errors?.message}
              helperText={Errors?.Email?.msg || Errors?.message}
              onChange={handleInfoChange}
            />
           
           <CssTextField      
            
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={(Errors===null)? null: Errors?.Password?.msg || Errors?.msg}
              helperText={(Errors===null)? null: Errors?.Password?.msg || Errors?.msg}
              onChange={handleInfoChange}
            />
           

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={Login}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="./Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
