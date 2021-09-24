import React,{useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../Components/Profile/Grid/GridItem";
import GridContainer from "../Components/Profile/Grid/GridContainer";
import CustomInput from "../Components/Profile/CustomInput/CustomInput";
import Card from "../Components/Profile/Card/Card";
import CardIcon from "../Components/Profile/Card/CardIcon";
import Icon from "@material-ui/core/Icon";


import CardHeader from "../Components/Profile/Card/CardHeader";
import CardAvatar from "../Components/Profile/Card/CardAvatar";
import CardBody from "../Components/Profile/Card/CardBody";
import CardFooter from "../Components/Profile/Card/CardFooter";
import {useDispatch, useSelector} from 'react-redux'
import { EditProfile } from "../Redux/Actions/AuthAction";
import { getMyPostCount } from '../Redux/Actions/PostActions';
import { getCOUNTApplies } from '../Redux/Actions/ApplyAction';


import { Button} from "react-bootstrap";
import { getCandidateMeetingCount, getRecruiterMeetingCount } from "../Redux/Actions/MeetingAction";



const styles = {
  cardCategoryblack: {
    margin: "0",
    fontSize: "12px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleblack: {
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const User = useSelector(state=> state.Auth.User)

  const [infoCandidate, setInfoCandidate] = useState({
    _id:User._id,
    FullName:User.FullName,
    Email:User.Email,
    LevelStudy:User.LevelStudy,
    Specialty:User.Specialty,

})

const [infoRecruiter, setInfoRecruiter] = useState({
    _id:User._id,
    FullName:User.FullName,
    Email:User.Email,
    Profession:User.Profession,
    SocietyName:User.SocietyName,
    ActivityField:User.ActivityField,
    Category:User.Category,
    taxRegistrationNumber:User.taxRegistrationNumber
})

const handleCandidateInfoChange = (e) => {
    setInfoCandidate({ ...infoCandidate, [e.target.name]: e.target.value });
  };

  const handleRecruiterInfoChange = (e) => {
    setInfoRecruiter({ ...infoRecruiter, [e.target.name]: e.target.value });
  };
  
  const EditingProfile=()=>{
    User.Role==='Candidate' && dispatch(EditProfile(infoCandidate))
    User.Role==='Recruiter' && dispatch(EditProfile(infoRecruiter))
  }

  useEffect(() => {
    User.Role ==='Candidate' && 
      dispatch(getCOUNTApplies());
      dispatch(getRecruiterMeetingCount())
    ;
    User.Role ==='Recruiter' && 
    dispatch(getMyPostCount());
    dispatch(getCandidateMeetingCount())
},[User.Role, dispatch])

  return (
    <div style={{marginLeft:'200px',marginTop:'50px'}}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader style={{backgroundColor: User.Role==='Recruiter'? '#68bfdb' : '#fbf4e9'}}>
              <h4 className={classes.cardTitleblack} style={{color: User.Role==='Recruiter'? '#0d2a95' : 'rgba(237,96,52,0.7)'}}>Edit Profile</h4>
              <p className={classes.cardCategoryblack} style={{color: User.Role==='Recruiter'? 'white' : 'black'}}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="FullName"
                    id="FullName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    defaultValue={User.FullName}
                    name='FullName'
                    onChange={User.Role==='Candidate'? handleCandidateInfoChange :handleRecruiterInfoChange }
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Email Address"
                    id="Email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    defaultValue={User.Email}
                    name="Email"
                    onChange={User.Role==='Candidate'? handleCandidateInfoChange :handleRecruiterInfoChange }

                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                {User.Role==='Recruiter' && User?.Profession && <CustomInput
                    labelText="Profession"
                    id="Profession"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    defaultValue={User.Profession}
                    name='Profession'
                    onChange={handleRecruiterInfoChange}
                  />}
                
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={User.Role==='Candidate'? 'LevelStudy' : 'SocietyName'}
                    id={User.Role==='Candidate'? 'LevelStudy' : 'SocietyName'}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    defaultValue={User.Role==='Candidate'? User.LevelStudy : User.SocietyName}
                    name={User.Role==='Candidate'? 'LevelStudy' : 'SocietyName'}
                    onChange={User.Role==='Candidate'? handleCandidateInfoChange :handleRecruiterInfoChange }

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                {User.Role==='Recruiter' && User?.ActivityField && <CustomInput
                    labelText="Activity Field"
                    id="ActivityField"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    defaultValue={User.ActivityField}
                    name='ActivityField'
                    onChange={handleRecruiterInfoChange}
                  />}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText={User.Role==='Candidate'? "Specialty": 'Category'}
                    id={User.Role==='Candidate'? "Specialty": 'Category'}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    defaultValue={User.Role==='Candidate'? User.Specialty && User.Specialty : User.Category && User.Category}
                    name={User.Role==='Candidate'? "Specialty": 'Category'}
                    onChange={User.Role==='Candidate'? handleCandidateInfoChange :handleRecruiterInfoChange }
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                {User.Role==='Recruiter' && User.taxRegistrationNumber && <CustomInput
                    labelText="tax Registration Number"
                    id="taxRegistrationNumber"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    defaultValue={User.taxRegistrationNumber}
                    name='taxRegistrationNumber'
                    onChange={handleRecruiterInfoChange}
                  />}
                </GridItem>
              </GridContainer>
              
            </CardBody>
            <CardFooter>
            <Button onClick={(EditingProfile)} style={{backgroundColor: User.Role==='Recruiter'? '#68bfdb' : '#fbf4e9',borderColor: User.Role==='Recruiter'? '#68bfdb' : '#fbf4e9',color: User.Role ==='Recruiter' ? "white" : 'black',padding:'15px', borderRadius:'10px',marginTop:'15px',marginBottom:'15px'}} variant="primary">
        Update Profile
      </Button>
             
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              
                <img src={User.image? User.image?.url : "https://png.pngtree.com/png-clipart/20200701/original/pngtree-black-default-avatar-png-image_5407174.jpg" } alt="..." />
            
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{User?.Role==='Candidate'? User.Specialty : User.Profession}</h6>
              <h4 className={classes.cardTitle}>{User.FullName}</h4>
            </CardBody>
          </Card>

          <Card style={{width:'250px',marginLeft:'50px'}}>
            <CardHeader stats icon>
            <CardIcon style={{width:'70px',color: User.Role==='Recruiter'? '#68bfdb' : 'rgba(237,96,52,0.7)'}}>
                <Icon>{User?.Role ==='Candidate' ? User.CountMyApplies : User.MyPostsCount}</Icon>
              </CardIcon>
              <h3 style={{textAlign:'center',paddingTop:'20px'}} >
                 {User.Role==='Recruiter'? 'posts' : 'applies'}
              </h3>
            </CardHeader>
          </Card>

          <Card style={{width:'250px',marginLeft:'50px'}}>
            <CardHeader stats icon>
            <CardIcon style={{width:'70px',color:User.Role==='Recruiter'? '#0d2a95' :'#ed6034'}}>
                <Icon>{User?.Role ==='Candidate' ? User.C_Meeting_Count : User.R_Meeting_Count}</Icon>
              </CardIcon>
              <h3 style={{textAlign:'center',paddingTop:'20px'}} >
                 meetings
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}