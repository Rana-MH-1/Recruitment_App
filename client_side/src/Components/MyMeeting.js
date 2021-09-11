import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiDuration } from "react-icons/gi";
import { useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    paddingLeft: "100px",
    margin: "0px auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "1000px",
    height: "650px",
    padding: theme.spacing(2, 4, 3),
  },
}));
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#cfd4ea",
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
}))(Tooltip);

const MyMeeting = ({ myMeeting }) => {
  const classes = useStyles();
  const User = useSelector((state) => state.Auth.User);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <AiOutlineFieldTime />
            {myMeeting.Date_Meeting.substring(0,10)} at {myMeeting.Date_Meeting.substring(11,16)}
          </Typography>
          <Typography variant="h5" component="h5">
            {myMeeting.jobTitle}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <GiDuration /> {myMeeting.Duration}
            <span>min</span>
          </Typography>
          {User.Role === "Recruiter" && (
            <Typography variant="body2" component="p">
              Candidate: {myMeeting.Name_Candidat}
            </Typography>
          )}
          {User.Role === "Candidate" && (
            <Typography variant="body2" component="p">
              Recruiter: {myMeeting.owner.FullName}
            </Typography>
          )}        
        </CardContent>
        <CardActions>
          {new Date().toISOString().substring(0,16) <= myMeeting.Date_Meeting && <LightTooltip title={`start your online interview meeting on ${myMeeting.Date_Meeting.substring(0,10)} at ${myMeeting.Date_Meeting.substring(11,16)} `} >
            <Button
              style={{
                backgroundColor: "#0d2a95",
                marginLeft: "60px",
                borderColor: "#0d2a95",
              }}
              size="mb-2"
              onClick={handleOpen}
            >
              <a style={{color:'white'}} href={`https://meet.jit.si/${myMeeting._id}`} target='_blank' rel='noopener noreferrer'>join</a>
            </Button>
          </LightTooltip>}
        </CardActions>
      </Card>
    </div>
  );
};

export default MyMeeting;
