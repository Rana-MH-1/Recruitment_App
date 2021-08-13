import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import { PostAction } from '../Redux/Actions/PostActions';
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'; 
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// import 'date-fns'
// import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
   display:'grid',
   gridTemplateColumns: 'auto auto',
   gridColumnGap:'10px'
  },
}));

const AddPost = () => {
  const classes = useStyles();
  const [newPost, setNewPost] = useState({})

  const handlePostChange = (e)=>{
        setNewPost({...newPost,[e.target.name]:e.target.value})
    }

    const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const dispatch = useDispatch()
   const AddPost=(e)=>{
     e.preventDefault();
     dispatch(PostAction(newPost));
    handleClose()
   }
   const User = useSelector(state=>state.Auth.User)
   const style={backgroundColor:'white', borderColor:'#0d2a95',color:'#0d2a95',float:'right', marginRight:50,opacity:0.8}

    return (
    <div>
        { User && User.Role==='Recruiter' &&
          <Button variant="primary" onClick={handleShow} style={style}>
          Add a post
        </Button>
        }    

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Add a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <form className={classes.root} noValidate autoComplete="off">
             <TextField id="standard-basic" label="Job Title" name='jobTitle' onChange={handlePostChange} />
             <TextareaAutosize aria-label="minimum height" minRows={4} name="jobDescription" placeholder="Description" onChange={handlePostChange} />
             <TextField id="standard-basic" label="Contrat Type" name='Contrat_Type' onChange={handlePostChange} />
             <TextField id="standard-basic" label="Address" name='Address' onChange={handlePostChange} />
             <TextField id="standard-basic" label="Nomber of candidate" name='Nb_Candidate' onChange={handlePostChange} />
             <TextField
                id="date"
                label="Deadline"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                name='Deadline'
                onChange={handlePostChange}
             />
             
           </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddPost} style={style} >
            Add a post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )}

export default AddPost;