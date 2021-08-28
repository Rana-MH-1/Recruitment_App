import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { getIdApply } from "../Redux/Actions/getIdApply";
import { useDispatch, useSelector } from "react-redux";
import { SaveMeeting } from "../Redux/Actions/MeetingAction";
import { clearError } from "../Redux/Actions/AppStateActions";
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      marginBottom: "30px",
    },
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#0d2a95",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const Invite = ({ apply }) => {
  
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch(clearError());
  };

  const handleShow = () => {
    setShow(true);
    dispatch(getIdApply(apply._id));
    localStorage.setItem("apply_id", apply._id);
  };
  const style = {
    backgroundColor: "white",
    borderColor: "#0d2a95",
    color: "#0d2a95",
  };
  const [meetinginfo, setMeetinginfo] = useState({
    Id_Candidat: apply.owner._id,
    Name_Candidat: apply.owner.FullName,
    Email_Candidat: apply.owner.Email,
    Date_Meeting: "",
    Duration: "",
    jobTitle: apply.Post.jobTitle,
  });

  const handleInfoMeeting = (e) => {
    setMeetinginfo({ ...meetinginfo, [e.target.name]: e.target.value });
  };

  const savingMeeting = () => {
    dispatch(SaveMeeting(meetinginfo));
  };

  const errors = useSelector((state) => state.appState.errors);

  return (
    <div>
      <LightTooltip title="Invite Candidate for an online meeting">
        <Button style={style} onClick={handleShow}>
          Invite
        </Button>
      </LightTooltip>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ color: "#0d2a95" }}>
            Invite Candidate for a meeting
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="date"
              label="Date Meeting"
              type="datetime-local"
              defaultValue="2021-06-12T08:30"
              min="2021-06-07T00:00"
              max="2021-06-14T00:00"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              name="Date_Meeting"
              onChange={handleInfoMeeting}
            />
            <TextField
              id="outlined-size-small"
              label="Duration *"
              variant="outlined"
              name="Duration"
              size="small"
              onChange={handleInfoMeeting}
            />
            <TextField
              id="outlined-size-small"
              label="Candidate"
              variant="outlined"
              name="Name_Candidat"
              size="small"
              value={apply.owner.FullName}
              disabled
            />

            <TextField
              id="outlined-size-small"
              label="job"
              variant="outlined"
              name="jobTitle"
              size="small"
              value={apply.Post.jobTitle}
              disabled
            />
          </form>
          {errors && <Alert severity="warning">{errors}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={style} variant="primary" onClick={savingMeeting}>
            Send invitation
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Invite;
