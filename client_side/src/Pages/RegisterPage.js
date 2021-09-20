import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Button } from "react-bootstrap";
import Compressor from "compressorjs";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../Redux/Actions/AuthAction";
import { useHistory } from "react-router-dom";
import "../Components/Css/Register.css";
import Alert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import {clearError} from '../Redux/Actions/AppStateActions'

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    marginBottom: "20px",
    color:'#25a3ff'
  },
  avatar: {
    //margin: theme.spacing(1),
    backgroundColor: "#25a3ff",
    marginLeft: "100px",
    marginTop: "20px",
  },
  input: {
    display: "none",
  },
}));
const RegisterPage = () => {
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState("");

  const [info, setInfo] = useState({
    Role: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const handleError = () => {
    if (info.Role.length === 0) setErrorMsg("you have to select your role");
  };

  const handleImage = (e) => {
    if (e.target.files.length) {
      const myImage = e.target.files[0];
      new Compressor(myImage, {
        quality: 0.8,
        success(result) {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = () => {
            setInfo({ ...info, image: reader.result });
          };
        },
      });
    }
  };

  const history = useHistory();
  const Auth = useSelector((state) => state.Auth);
  useEffect(() => {
    console.log(Auth.isAuth);
    if (Auth.isAuth) history.push("/login");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Auth.isAuth]);

  const handleChange = (e) => {
    setSelectedRole(e.target.value);
    setInfo({ ...info, Role: e.target.value });
    setErrorMsg('');
    dispatch(clearError())
  };
  const handleInfoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    dispatch(clearError())
  };
  const dispatch = useDispatch();
  const Register = (e) => {
    e.preventDefault();
    dispatch(RegisterAction(info));
    handleError();
    if (errorMsg==='' || Errors===null){setIsRegistered(true)};
  };

  const [isRegistered, setIsRegistered] = useState(false);

  const switchFunction = (selectedRole) => {
    switch (selectedRole) {
      case "Candidate":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Control
                name="LevelStudy"
                type="text"
                placeholder="Level of study "
                onChange={handleInfoChange}
              />
            </Form.Group>
            <p style={{ color: "red" }}>
              {Errors === null ? null : Errors?.LevelStudy?.msg}
            </p>

            <Form.Group className="mb-3">
              <Form.Control
                name="Specialty"
                type="text"
                placeholder="Specialty "
                onChange={handleInfoChange}
              />
            </Form.Group>
            <p style={{ color: "red" }}>
              {Errors === null ? null : Errors?.Specialty?.msg}
            </p>
          </>
        );
      case "Recruiter":
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridColumnGap: "10px",
              
          
            }}
          >
            <Form.Group  className="mb-3">
              <Form.Control
                name="Profession"
                type="text"
                placeholder="Profession"
                onChange={handleInfoChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="SocietyName"
                type="text"
                placeholder="Society name "
                onChange={handleInfoChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="ActivityField"
                type="text"
                placeholder="Activity filed of your Society"
                onChange={handleInfoChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="Category"
                type="text"
                placeholder="Category of you society "
                onChange={handleInfoChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="taxRegistrationNumber"
                type="text"
                placeholder="Tax Registration Number "
                onChange={handleInfoChange}
              />
            </Form.Group>
          </div>
        );
      default:
        return null;
    }
  };

  const Errors = useSelector((state) => state.appState.errors);

  return (
    <div 
      style={{
        display: "grid",
        gridTemplateColumns: "60% 40%",  
      
        
      }}
    >
      <div className="bckground">
        <h3 className="paragraph">
          Welcome to our Website, register now and be among us
        </h3>
      </div>
      <div style={{ margin: "0 auto" , textAlign: "center" }}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormControl required className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Are you
          </InputLabel>
          <Select
            required
            onChange={handleChange}
            value={selectedRole}
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            style={{color: selectedRole ==='Recruiter'? '#25a3ff' : '#ed6034'}}
          >
            <MenuItem value={"Recruiter"}>Recruiter</MenuItem>
            <MenuItem value={"Candidate"}>Candidate</MenuItem>
          </Select>
        </FormControl>

        { errorMsg && <Alert
              style={{ marginTop: "10px",marginBottom:'15px', width: "300px" }}
              severity="warning"
            >
              {errorMsg}
            </Alert>}
        <Form >
          <Form.Group className="mb-3">
            <Form.Control
              required
              name="FullName"
              type="Fullname"
              placeholder="Full Name *"
              onChange={handleInfoChange}
            />
          </Form.Group>
          <p style={{ color: "red" }}>
            {Errors === null ? null : Errors?.FullName?.msg}
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="Email"
              type="email"
              placeholder="example@gmail.com *"
              onChange={handleInfoChange}
            />
          </Form.Group>
          <p style={{ color: "red" }}>
            {Errors === null ? null : Errors?.Email?.msg}
          </p>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="Password"
              type="password"
              placeholder="Password *"
              onChange={handleInfoChange}
            />
          </Form.Group>
          <p style={{ color: "red" }}>
            {Errors === null ? null : Errors?.Password?.msg}
          </p>

          <input
            accept="image/*"
            id="icon-button-file"
            onChange={handleImage}
            type="file"
            style={{ display: "none" }}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera style={{ zoom: "160%", color: "#25a3ff" }} />
            </IconButton>
          </label>

          {switchFunction(selectedRole)}

          <Button
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "white",
              borderColor: "#25a3ff",
              color: "#25a3ff",
              marginLeft: "60px",
              fontWeight:'bold'
            }}
            onClick={Register}
          >
            Submit
          </Button>
          

          {Errors && Errors[0] && (
            <Alert
              style={{ marginTop: "20px", width: "300px" }}
              severity="warning"
            >
              {Errors === null ? null : Errors[0]?.msg}
            </Alert>
          )}
          
          {isRegistered && info.length>=5 &&
          <Alert severity="success" style={{ width: "300px", margin: "15px 0" }}>
            You are successfully registered
          </Alert>
        }
        </Form>
      </div>
      </div>
    
  );
};
export default RegisterPage;
