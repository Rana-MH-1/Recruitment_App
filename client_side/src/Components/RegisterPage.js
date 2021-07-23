import React,{useState} from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import {Form,Button} from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    
  }));
const RegisterPage = () => {
    const classes = useStyles();
    const [selectedRole,setSelectedRole] = useState('')
    
    const [info, setInfo] = useState({})
    const handleChange = (e) => {
      setSelectedRole(e.target.value);
    };
    const handleInfoChange=(e)=>{
      if(e.target.value)
      setInfo({...info,[e.target.name]:e.target.value})
      else{
        let obj=info
        delete obj[e.target.name]
        setInfo(obj)
      }
    }

    const switchFunction =(selectedRole)=>{
      switch(selectedRole){
        case 'Candidate':
        return (<>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Level of study</Form.Label>
    <Form.Control type="LS" placeholder="Enter your level of study" />
  </Form.Group>   

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Specialty</Form.Label>
    <Form.Control type="Fullname" placeholder="Enter your specialty" />
  </Form.Group>
        </>)
        case 'Recruiter':
          return(<>
          <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Profession</Form.Label>
    <Form.Control type="Pro" placeholder="Enter your profession" />
  </Form.Group>  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Society Name</Form.Label>
    <Form.Control type="Fullname" placeholder="Enter your Society name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Activity Field</Form.Label>
    <Form.Control type="Fullname" placeholder="Enter the activity filed of your Society" />
  </Form.Group>  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Category</Form.Label>
    <Form.Control type="Fullname" placeholder="Enter the category of you society" />
  </Form.Group>
  
          </>)
        default :
        return null
}

    }
    return (
        
      <div>
          <h3>Welcome to our Website, register now and be among us</h3>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Are you</InputLabel>
              <Select onChange={handleChange} value={selectedRole}
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select">
              <MenuItem value={"Recruiter"}>Recruiter</MenuItem>
              <MenuItem value={"Candidate"}>Candidate</MenuItem>
              </Select>
              </FormControl>

              <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>FullName</Form.Label>
    <Form.Control type="Fullname" placeholder="Enter your full name" />
  </Form.Group>             
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  {switchFunction(selectedRole)}
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </div>
    );
}
export default RegisterPage
