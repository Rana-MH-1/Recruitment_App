import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

import Input from "@material-ui/core/Input";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { InputLabel } from "@material-ui/core";
import "./Css/Apply.css";
import { getIdPost } from "../Redux/Actions/getIdPost";
import { AddApply } from "../Redux/Actions/ApplyAction";
import Alert from "@material-ui/lab/Alert";
import { clearError, clearMsg } from "../Redux/Actions/AppStateActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginBottom: "15px",
    },
  },
}));

const Apply = ({ Post }) => {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.Auth);

  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [issend, setIssend] = useState(false);
  const handleClose = () => {
    setShow(false);
    dispatch(clearError());
    dispatch(clearMsg());
    setIssend(false);
  };
  const handleShow = () => {
    setShow(true);
    dispatch(getIdPost(Post._id));
    localStorage.setItem("id_Post", Post._id);
  };
  const style = {
    backgroundColor: "white",
    borderColor: "#0d2a95",
    color: "#0d2a95",
  };
  const style1 = {
    display: "inline",
  };

  const selectCvToUpload = (e) => {
    setFile1(e.target.files[0]);
  };

  const selectLMToUpload = (e) => {
    setFile2(e.target.files[0]);
  };
  /*----------------------une seule input-------------------------------------- */
  // const selectLMToUpload = async (e) => {
  //   let formData = new FormData()
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     formData.append("multi-files", e.target.files[i])
  //   }
  //   await axios.post(`${prefixe}/api/cv/files`, formData)
  //     .then(res => console.log(res.data))
  // }
  /*----------------------une seule input-------------------------------------- */

  const errors = useSelector((state) => state.appState.errors);
  const msgSuccess = useSelector((state) => state.appState.msg);

  const OnSubmit = () => {
    //handleClose();
    let formData = new FormData();
    formData.append("cv", file1);
    formData.append("Motivation_letter", file2);
    formData.append("Recruiter_id", JSON.stringify(Post.owner._id));
    formData.append("Recruiter_email", Post.owner.Email);
    dispatch(AddApply(formData));
    setIssend(true);
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <Button style={style} variant="primary" onClick={handleShow}>
        Apply
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title style={{ color: "#0d2a95" }}>
            Apply and upload your files
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {Auth.User && Auth.User.FullName && (
              <div style={style1}>
                <AccountCircle style={{ marginRight: "10px" }} />
                <Input
                  defaultValue={Auth.User.FullName}
                  disabled
                  inputProps={{ "aria-label": "description" }}
                  style={{ width: "300px" }}
                />
              </div>
            )}

            {Auth && Auth.User.Email && (
              <div style={style1}>
                <MailOutlineIcon style={{ marginRight: "10px" }} />
                <Input
                  defaultValue={Auth.User.Email}
                  disabled
                  inputProps={{ "aria-label": "description" }}
                  style={{ width: "300px" }}
                />
              </div>
            )}

            {Auth && Auth.User.LevelStudy && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  marginTop: "15px",
                }}
              >
                <InputLabel style={{ marginTop: "8px" }}>
                  Level of Study
                </InputLabel>
                <Input
                  defaultValue={Auth.User.LevelStudy}
                  disabled
                  inputProps={{ "aria-label": "description" }}
                />
              </div>
            )}

            {Auth && Auth.User.Specialty && (
              <div
                style={{ display: "grid", gridTemplateColumns: "auto auto" }}
              >
                <InputLabel style={{ marginTop: "8px" }}>Specialty</InputLabel>
                <Input
                  defaultValue={Auth.User.Specialty}
                  disabled
                  inputProps={{ "aria-label": "description" }}
                />
              </div>
            )}
          </form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload your CV</Form.Label>
            <Form.Control onChange={selectCvToUpload} name="cv" type="file" />
          </Form.Group>
          {file1 === "" && issend && (
            <Alert severity="error">CV is required</Alert>
          )}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload your Cover Letter</Form.Label>
            <Form.Control
              onChange={selectLMToUpload}
              name="Motivation_letter"
              type="file"
            />
          </Form.Group>
          {file2 === "" && issend && (
            <Alert severity="error">Motivation Letter is required</Alert>
          )}
          {errors && (
            <Alert
              severity="warning"
              style={{
                margin: "0 auto",
                fontSize: "16px",
                width: "overflow",
                marginTop: "10px",
              }}
            >
              {errors}
            </Alert>
          )}

          {msgSuccess && <Alert severity="success">{msgSuccess}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={style} variant="primary" onClick={OnSubmit}>
            Send your Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Apply;
