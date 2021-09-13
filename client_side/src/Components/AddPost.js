import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PostAction } from "../Redux/Actions/PostActions";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Alert from "@material-ui/lab/Alert";
import { clearError,clearMsg } from "../Redux/Actions/AppStateActions";

// import 'date-fns'
// import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridColumnGap: "10px",
  },
}));

const AddPost = ({ page, limit }) => {
  const classes = useStyles();
  const [newPost, setNewPost] = useState({});

  const handlePostChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
    dispatch(clearError());
    
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    dispatch(clearError());
    setShow(false);
    dispatch(clearMsg())
  };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const AddPost = (e) => {
    e.preventDefault();
    dispatch(PostAction(newPost, page, limit));
  };
  const User = useSelector((state) => state.Auth.User);
  const style = {
    backgroundColor: "#0d2a95",
    borderColor: "#0d2a95",
    float: "right",
    marginRight: 50,
  };
  const errors = useSelector((state) => state.appState.errors);
  const msgSuccess = useSelector(state=> state.appState.msg)

  return (
    <div>
      {User && User.Role === "Recruiter" && (
        <Button variant="primary" onClick={handleShow} style={style}>
          Add a post
        </Button>
      )}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Add a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Job Title"
              name="jobTitle"
              onChange={handlePostChange}
              error={errors?.jobTitle?.msg}
              helperText={errors?.jobTitle?.msg}
              required
            />

            <TextareaAutosize
              aria-label="minimum height"
              minRows={7}
              name="jobDescription"
              placeholder="Description *"
              error={errors?.Description?.msg}
              helperText={errors?.Description?.msg}
              required
              onChange={handlePostChange}
            />
            <TextField
              id="standard-basic"
              label="Contrat Type"
              name="Contrat_Type"
              error={errors?.Contrat_Type?.msg}
              helperText={errors?.Contrat_Type?.msg}
              required
              onChange={handlePostChange}
            />
            <TextField
              id="standard-basic"
              label="Address"
              name="Address"
              error={errors?.Address?.msg}
              helperText={errors?.Address?.msg}
              required
              onChange={handlePostChange}
            />
            <TextField
              id="standard-basic"
              label="Nomber of candidate"
              name="Nb_Candidate"
              error={errors?.Nb_Candidate?.msg}
              helperText={errors?.Nb_Candidate?.msg}
              required
              onChange={handlePostChange}
            />
            <TextField
              id="date"
              label="Deadline"
              type="date"
              defaultValue="2019-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              name="Deadline"
              onChange={handlePostChange}
              error={errors?.Deadline?.msg}
              helperText={errors?.Deadline?.msg}
              required
            />
          </form>
          {errors?.jobDescription && (
              <Alert severity="error" style={{ width: "210px" }}>
                {errors === null ? null : errors.jobDescription?.msg}
              </Alert>
            )}
            {msgSuccess && <Alert style={{width:'450px'}} severity="success">{msgSuccess}</Alert>}
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddPost} style={style}>
            Add a post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddPost;
