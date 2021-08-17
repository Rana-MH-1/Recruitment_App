import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Card, Avatar} from 'antd';
import './Css/Post.css'
import {EditPost,DeletePost} from '../Redux/Actions/PostActions'
import { EditOutlined, DeleteOutlined,EnvironmentOutlined,CalendarOutlined,TeamOutlined,BankOutlined,FieldTimeOutlined} from '@ant-design/icons';
import Apply from './Apply';

const { Meta } = Card;

const PostRecruiter =({Post})=>{
  const User = useSelector(state=>state.Auth.User)
  const [isEdited, setIsEdited] = useState(false);
  const [infoPost,setInfoPost]= useState({
    jobTitle:'',
    jobDescription:'',
    Address:'',
    Contrat_Type:'',
    Nb_Candidate:''
  })
  const handlePostChange=(e)=>{
    setInfoPost({...infoPost,[e.target.name]:e.target.value})
  }

  const dispatch = useDispatch()
  const Editing = ()=>{
    setIsEdited(!isEdited)
    setInfoPost({...infoPost,Address:Post.Address,Contrat_Type:Post.Contrat_Type,Nb_Candidate:Post.Nb_Candidate,jobTitle:Post.jobTitle,jobDescription:Post.jobDescription})
   if(isEdited && infoPost!==Post)dispatch(EditPost({...Post,...infoPost}))
    }
    
    return(
        
            <Card className="CardPost"
    style={{ width: 800 ,margin:'0 auto', marginTop:'40px',backgroundColor: '#cfd4ea'}}
    /* cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    } */ 
    actions={[User && User.Role==='Recruiter' && User._id === Post.owner._id && <EditOutlined key="edit" onClick={Editing}/> 
    ,
      User && User.Role==='Recruiter' && User._id === Post.owner._id && <DeleteOutlined onClick={()=>dispatch(DeletePost(Post._id))} />,
      User && User.Role==='Candidate' &&
      <Apply type="primary" />
    ]}
  >
    {isEdited?(<>
      <input name='jobTitle' value={infoPost.jobTitle} onChange={handlePostChange}></input>
      <input name='jobDescription' value={infoPost.jobDescription} onChange={handlePostChange}></input>
      </>) : 
      (<>
        <Meta style={{fontSize:"20px", fontWeight:'bold',marginBottom:"35px"}}
      avatar={<Avatar src={Post.owner.image? Post.owner.image.url : 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-black-default-avatar-png-image_5407174.jpg'} />}
      title ={Post.jobTitle}
      
    />
      </>)
  }
    
    <div>
      {isEdited? (<>
        
        <EnvironmentOutlined className="icon" /><input name='Address' value={infoPost.Address} onChange={handlePostChange}></input>
        <CalendarOutlined className="icon" /><input name='Contrat_Type' value={infoPost.Contrat_Type} onChange={handlePostChange}></input>
        <TeamOutlined className="icon" /><input name='Nb_Candidate' value={infoPost.Nb_Candidate} onChange={handlePostChange}></input>
      </>)
      : (
        
        <div className='flexIcons' style={{display:"flex",flexDirecton:'column'}}>
          <p id="jobDes">{Post.jobDescription}</p>
        <div className='col1' style={{margin:'20px 0'}}>
         <BankOutlined  className="icon"/><span>{Post.owner.SocietyName}</span>
         
        <EnvironmentOutlined  style={{marginLeft:'140px'}} className="icon" /><span >{Post.Address}</span>
         
         <div style={{float: 'right'}}>
          <FieldTimeOutlined className="icon" /><span>{Post.createdAt}</span>
         </div>
        </div>
        <div className='col2' style={{marginTop:'25px'}}>
         <CalendarOutlined className="icon" /><span>{Post.Contrat_Type}</span>
         <div style={{float: 'right',marginRight:'60px'}}>
          <TeamOutlined className="icon" /><span>{Post.Nb_Candidate}</span>
         </div>
        </div>
        </div>
      )
    
      }
    </div>
  </Card>
      
    )

}

export default PostRecruiter