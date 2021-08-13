import React,{useEffect, useState} from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import {Form,Button} from 'react-bootstrap'
import Compressor from 'compressorjs'
import {useDispatch, useSelector} from 'react-redux'
import {RegisterAction} from '../Redux/Actions/AuthAction'
import { useHistory } from 'react-router-dom';

import axios from 'axios'
import { prefixe } from '../helpers/prefixe';
const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
    },
    input: {
      display: 'none',
    }
    
  }));
const RegisterPage = () => {
    const classes = useStyles();
    const [selectedRole,setSelectedRole] = useState('')
    const [file,setFile] = useState(null)
    const [info, setInfo] = useState({
      Role:''
    })
    


//     const selectCvToUpload = (e)=>{
// setFile(e.target.files[0])
// let formData=new FormData()
// formData.append("cv",e.target.files[0])
// axios.post(`${prefixe}/api/cv`,formData)
// .then(res=>console.log(res.data))
//     }
    
    const handleImage=(e)=>{
      if (e.target.files.length) {
        const myImage = e.target.files[0]
        new Compressor(myImage, {
            quality: 0.8,
            success(result) {
                const reader = new FileReader()
                reader.readAsDataURL(result)
                reader.onloadend = () => {
                    setInfo({...info,image: reader.result })
              }}
            }
          )}
       }
  
    const history = useHistory()
    const Auth = useSelector(state=> state.Auth)
    useEffect(() => {
      console.log(Auth.isAuth)
      if(Auth.isAuth)
        history.push('/login')
    }, [Auth.isAuth])

    const handleChange = (e) => {
      setSelectedRole(e.target.value)
      setInfo({...info,Role:e.target.value})
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
    const dispatch = useDispatch();
    const Register=(e)=>{
      e.preventDefault();
      dispatch(RegisterAction(info))
    }

    const switchFunction =(selectedRole)=>{
      switch(selectedRole){
        case 'Candidate':
        return (<>
        <Form.Group className="mb-3">
    <Form.Label>Level of study</Form.Label>
    <Form.Control name="LevelStudy" type='text' placeholder="Enter your level of study" onChange={handleInfoChange} />
  </Form.Group>   

  <Form.Group className="mb-3">
    <Form.Label>Specialty</Form.Label>
    <Form.Control name="Specialty" type='text' placeholder="Enter your specialty" onChange={handleInfoChange} />
  </Form.Group>


{/* //pour tester upload cv */}
  {/* <Form.Group className="mb-3">
    <Form.Label>Cv file</Form.Label>
    <Form.Control name="cv" type='file' placeholder="Enter your cv" onChange={selectCvToUpload} />
  </Form.Group> */}
        </>)
        case 'Recruiter':
          return(<>
          <Form.Group className="mb-3">
    <Form.Label>Profession</Form.Label>
    <Form.Control name="Profession" type='text' placeholder="Enter your profession" onChange={handleInfoChange} />
  </Form.Group>  
  <Form.Group className="mb-3">
    <Form.Label>Society Name</Form.Label>
    <Form.Control name="SocietyName" type='text' placeholder="Enter your Society name" onChange={handleInfoChange} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Activity Field</Form.Label>
    <Form.Control name="ActivityField" type='text' placeholder="Enter the activity filed of your Society" onChange={handleInfoChange} />
  </Form.Group>  
  <Form.Group className="mb-3">
    <Form.Label>Category</Form.Label>
    <Form.Control name="Category" type='text' placeholder="Enter the category of you society" onChange={handleInfoChange} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Tax Registration Number</Form.Label>
    <Form.Control name="taxRegistrationNumber" type='text' placeholder="Enter the category of you society" onChange={handleInfoChange} />
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

              <Form.Group className="mb-3">
    <Form.Label>FullName</Form.Label>
    <Form.Control name="FullName" type="Fullname" placeholder="Enter your full name" onChange={handleInfoChange} />
  </Form.Group>             
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="Email" type="email" placeholder="Enter email" onChange={handleInfoChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="Password" type="password" placeholder="Password" onChange={handleInfoChange} />
  </Form.Group>
  
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Upload your photo</Form.Label>
    <Form.Control type="file" accept="image/*" onChange={handleImage} />
  </Form.Group>
  

  {switchFunction(selectedRole)}
  
  <Button variant="primary" type="submit" style={{backgroundColor:'#0d2a95'}} onClick={Register}>
    Submit
  </Button>
</Form>

    </div>
    );
}
export default RegisterPage;
