import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Card, Avatar,Button } from 'antd';
import './Css/Post.css'
import {EditPost,DeletePost} from '../Redux/Actions/PostActions'
import { EditOutlined, DeleteOutlined,EnvironmentOutlined,CalendarOutlined,TeamOutlined,BankOutlined,FieldTimeOutlined} from '@ant-design/icons';

const { Meta } = Card;

const PostRecruiter =({Post})=>{
  const User = useSelector(state=>state.Auth.User)
  const [isEdited, setIsEdited] = useState(false);
  const [infoPost,setInfoPost]= useState({
    _id:Post._id,
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
    dispatch(EditPost({...Post,...infoPost}))
    }
    
    return(
        <div>
            <Card
    style={{ width: 900 }}
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
      <Button type="primary" style={{backgroundColor:'#0d2a95',border:'none'}}>Apply</Button>
    ]}
  >
    {isEdited?(<>
      <input name='jobTitle' value={infoPost.jobTitle} onChange={handlePostChange}></input>
      <input name='jobDescription' value={infoPost.jobDescription} onChange={handlePostChange}></input>
      </>) : 
      (<>
        <Meta
      avatar={<Avatar src={Post.owner.image? Post.owner.image.url : 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-black-default-avatar-png-image_5407174.jpg'} />}
      title={Post.jobTitle}
      description={Post.jobDescription}
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
        <>
        <EnvironmentOutlined className="icon" /><span>{Post.Address}</span>
        <CalendarOutlined className="icon" /><span>{Post.Contrat_Type}</span>
        <TeamOutlined className="icon" /><span>{Post.Nb_Candidate}</span>
        <BankOutlined  className="icon"/><span>{Post.owner.SocietyName}</span>
       <FieldTimeOutlined className="icon" /><span>{Post.createdAt}</span>
        </>
      )
    
      }
    </div>
  </Card>
        </div>
    )

}

export default PostRecruiter