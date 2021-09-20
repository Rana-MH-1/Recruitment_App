import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { getIdApply } from "../Redux/Actions/getIdApply";
import { useDispatch, useSelector } from "react-redux";
import { SaveMeeting } from "../Redux/Actions/MeetingAction";
import { clearError, clearMsg } from "../Redux/Actions/AppStateActions";
import Alert from "@material-ui/lab/Alert";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  const [isInvited, setIsInvited] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch(clearError());
    dispatch(clearMsg());
  };

  const handleShow = () => {
    setShow(true);
    dispatch(getIdApply(apply._id));
    localStorage.setItem("apply_id", apply._id);
  };

  const [meetinginfo, setMeetinginfo] = useState({
    Id_Candidat: apply.owner._id,
    Name_Candidat: apply.owner.FullName,
    Email_Candidat: apply.owner.Email,
    Date_Meeting: "",
    Duration: "",
    jobTitle: apply?.Post?.jobTitle,
  });

  const handleInfoMeeting = (e) => {
    setMeetinginfo({ ...meetinginfo, [e.target.name]: e.target.value });
  };

  const savingMeeting = () => {
    meetinginfo.Date_Meeting &&
      meetinginfo.Duration &&
      dispatch(SaveMeeting(meetinginfo));
    setIsInvited(true);
  };
  const User = useSelector((state) => state.Auth.User);
  const errors = useSelector((state) => state.appState.errors);
  const msgSuccess = useSelector((state) => state.appState.msg);

  return (
    <div>
      <LightTooltip title="Invite Candidate for an online meeting">
        <Button
          style={{
            backgroundColor: "white",
            borderColor: User.Role === "Recruiter" ? "#0d2a95" : "#ed6034",
            color: User.Role === "Recruiter" ? "#0d2a95" : "#ed6034",
            fontWeight: "bold",
            border: "3px",
          }}
          onClick={handleShow}
        >
          Invite
        </Button>
      </LightTooltip>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title
            style={{ color: User.Role === "Recruiter" ? "#0d2a95" : "#ed6034" }}
          >
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
              min="2021-06-07T00:00"
              max="2021-06-14T00:00"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              name="Date_Meeting"
              error={meetinginfo.Date_Meeting === "" && isInvited}
              helperText={
                meetinginfo.Date_Meeting === "" && isInvited
                  ? "Time meeting is required"
                  : " "
              }
              onChange={handleInfoMeeting}
            />

            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-required-label">
                Duration (min)
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={meetinginfo.Duration}
                label="Duration *"
                error={meetinginfo.Duration === "" && isInvited}
                helperText={
                  meetinginfo.Duration === "" && isInvited
                    ? "Duration is required"
                    : " "
                }
                onChange={(e) =>
                  setMeetinginfo({ ...meetinginfo, Duration: e.target.value })
                }
              >
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={45}>45</MenuItem>
              </Select>
              <FormHelperText style={{ color: "red" }}>
                {meetinginfo.Duration === "" && isInvited
                  ? "Duration is required"
                  : " "}
              </FormHelperText>
            </FormControl>

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
              value={apply?.Post?.jobTitle}
              disabled
            />
          </form>
          {errors && <Alert severity="warning">{errors}</Alert>}
          {msgSuccess && <Alert severity="success">{msgSuccess}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              borderColor: "#0d2a95",
              color: "#0d2a95",
              fontWeight: "bold",
              border: "3px",
            }}
            variant="primary"
            onClick={savingMeeting}
          >
            Send invitation
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Invite;
