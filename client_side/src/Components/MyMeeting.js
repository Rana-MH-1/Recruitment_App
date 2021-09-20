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
import Tooltip from "@material-ui/core/Tooltip";
import * as FiIcons from 'react-icons/fi';
import {useDispatch} from 'react-redux'
import {Modal} from 'react-bootstrap';
import {TiDeleteOutline} from 'react-icons/ti'
import {DeleteMeeting,DeleteMeetingCandidate} from '../Redux/Actions/MeetingAction'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    paddingLeft: "70px",
    margin: "0px auto",
    boxShadow: 'rgb(182 182 182 / 50%) 0px 2px 4px',
    lineHeight: '1.5',
  

    borderRadius:'3px'
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
    backgroundColor: "#fbf4e9",
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
}))(Tooltip);

const MyMeeting = ({ myMeeting }) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const User = useSelector((state) => state.Auth.User);
  const [show, setShow] = React.useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  
  const Deletemeeting=()=>{
    User.Role==='Recruiter' && dispatch(DeleteMeeting(myMeeting._id))
    User.Role==='Candidate' && dispatch(DeleteMeetingCandidate(myMeeting._id))
    handleClose()
  }
  const style1={borderLeft: User.Role==='Recruiter'? '20px solid #0d2a95' : '20px solid #ed6034'}
  return (
    <div>
      <Card className={classes.root} style={style1} variant="outlined">
        <CardContent>
          { new Date().toISOString().substring(0,16) > myMeeting.Date_Meeting && (<>

          <boutton onClick={handleOpen}><FiIcons.FiDelete style={{zoom:'150%',float:'right',color: User.Role==='Recruiter'? '#0d2a95' : '#ed6034' }} /></boutton>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> <TiDeleteOutline style={{zoom:'200%',color:'red'}}/> Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete the meeting ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{backgroundColor: "white",borderColor:User.Role==='Recruiter' ? '#0d2a95' : '#ed6034',color:User.Role==='Recruiter' ? '#0d2a95' : '#ed6034',fontWeight:'bold',borderSize:'3px'}} variant="primary" onClick={Deletemeeting}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
          </>)}
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
            <Typography style={{fontSize:'16px'}} variant="body2" component="p">
              Recruiter: {myMeeting.owner.FullName}
            </Typography>
          )}        
        </CardContent>
        <CardActions>
          {new Date().toISOString().substring(0,16) <= myMeeting.Date_Meeting && <LightTooltip title={`start your online interview meeting on ${myMeeting.Date_Meeting.substring(0,10)} at ${myMeeting.Date_Meeting.substring(11,16)} `} >
            <Button
              style={{
                backgroundColor: "white",
                marginLeft: "20px",
                borderColor: User.Role==='Recruiter' ? '#0d2a95' : '#ed6034',
                width:'100px',
                borderRadius:'10px',
                fontWeight:'bold',
                fontSize:'15px',
                marginBottom:'10px'
              }}
              size="mb-2"
              onClick={handleOpen}
            >
              <a style={{color:User.Role==='Recruiter' ? '#0d2a95' : '#ed6034'}} href={`https://meet.jit.si/${myMeeting._id}`} target='_blank' rel='noopener noreferrer'>Join</a>
            </Button>
          </LightTooltip>}
        </CardActions>
      </Card>
    </div>
  );
};

export default MyMeeting;
