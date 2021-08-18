import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Input from "@material-ui/core/Input";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { InputLabel } from "@material-ui/core";
import './Css/Apply.css'
import { prefixe } from '../helpers/prefixe'
import { setToken } from '../helpers/setToken';
import {setPostID} from '../helpers/setPostId';
import { getIdPost } from "../Redux/Actions/getIdPost";
//trah testi maw khatfit 7a9a manghir settoken el token ui
//mesh mawjouda f header req uime7atithech fel local_storage!
//

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginBottom: '15px'
    },
  },
}));

const Apply = ({Post}) => {
  const dispatch = useDispatch()
  const Auth = useSelector(state => state.Auth);
  console.log(Auth)
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [file1, setFile1] = useState('');
  const [file2, setFile2] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)
  dispatch(getIdPost(Post._id))
  localStorage.setItem('id_Post', Post._id)};
  const style = {
    backgroundColor: "white",
    borderColor: "#0d2a95",
    color: "#0d2a95",
  };
  const style1 = {
    display: 'inline'
  }


  const selectCvToUpload = (e) => {
 
setFile1(e.target.files[0])

  }
  
  const selectLMToUpload = (e) => {
 
    setFile2(e.target.files[0])
    
      }
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
  const OnSubmit = () => {
    handleClose()
    setPostID() 
    let formData = new FormData()
    formData.append("cv", file1)
    formData.append("Motivation_letter", file2)
    axios.post(`${prefixe}/api/cv/files`, formData)
      .then(res => console.log(res.data))
  }
  //b3athlek vocal asm3ou si nn zid chouf tnajemech trodha bel redux sinn 5aliha nrml
  return (
    <div style={{ margin: '0 auto' }}>
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
          <form className={classes.root} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>

            {Auth.User && Auth.User.FullName && (<div style={style1}>
              <AccountCircle style={{ marginRight: '10px' }} />
              <Input
                defaultValue={Auth.User.FullName}
                disabled
                inputProps={{ "aria-label": "description" }}
              />
            </div>
            )}

            {Auth && Auth.User.Email && (<div style={style1}>
              <MailOutlineIcon style={{ marginRight: '10px' }} />
              <Input
                defaultValue={Auth.User.Email}
                disabled
                inputProps={{ "aria-label": "description" }}
              />
            </div>
            )}

            {Auth && Auth.User.LevelStudy && (<div style={{ display: 'grid', gridTemplateColumns: 'auto auto', marginTop: '15px' }}>
              <InputLabel style={{ marginTop: '8px' }} >Level of Study</InputLabel>
              <Input
                defaultValue={Auth.User.LevelStudy}
                disabled
                inputProps={{ "aria-label": "description" }}
              />
            </div>
            )}

            {Auth && Auth.User.Specialty && (<div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
              <InputLabel style={{ marginTop: '8px' }}>Specialty</InputLabel>
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
            <Form.Control onChange={selectCvToUpload} name='cv' type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload your Cover Letter</Form.Label>
            <Form.Control onChange={selectLMToUpload} name='Motivation_letter' type="file"  />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={style} variant="primary" onClick={OnSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Apply;

//owner mech 9a3ed yet3ada