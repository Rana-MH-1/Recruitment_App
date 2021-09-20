import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Avatar } from "antd";
import "./Css/Post.css";
import { EditPost, DeletePost } from "../Redux/Actions/PostActions";
import {
  EditOutlined,
  DeleteOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
  BankOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import Apply from "./Apply";

const { Meta } = Card;

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const PostRecruiter = ({ Post, page, limit }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const User = useSelector((state) => state.Auth.User);
  const [isEdited, setIsEdited] = useState(false);
  const [infoPost, setInfoPost] = useState({
    jobTitle: "",
    jobDescription: "",
    Address: "",
    Contrat_Type: "",
    Nb_Candidate: "",
    Deadline: "",
  });
  const handlePostChange = (e) => {
    setInfoPost({ ...infoPost, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const Editing = () => {
    setIsEdited(!isEdited);
    setInfoPost({
      ...infoPost,
      Address: Post.Address,
      Contrat_Type: Post.Contrat_Type,
      Nb_Candidate: Post.Nb_Candidate,
      jobTitle: Post.jobTitle,
      jobDescription: Post.jobDescription,
    });
    if (isEdited && infoPost !== Post)
      dispatch(EditPost({ ...Post, ...infoPost }, page, limit));
  };

  return (
    <Card
      className="CardPost"
      style={{
        width: 550,
        margin: "0 auto",
        marginTop: "40px",
        boxShadow: "rgb(182 182 182 / 50%) 0px 2px 4px",
        fontFamily: "Montserrat Alternates",
      }}
      cover={
        <img
          alt="example"
          src={
            User.Role === "Recruiter"
              ? "https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full-720x413.jpg"
              : "https://img.freepik.com/free-vector/digital-technology-background-with-blue-orange-light-effect_1017-27423.jpg?size=338&ext=jpg"
          }
          style={{ height: "150px" }}
        />
      }
      actions={[
        User && User.Role === "Recruiter" && User._id === Post.owner._id && (
          <EditOutlined key="edit" onClick={Editing} />
        ),
        User && User.Role === "Recruiter" && User._id === Post.owner._id && (
          <DeleteOutlined onClick={() => dispatch(DeletePost(Post._id))} />
        ),
        User && User.Role === "Candidate" && (
          <Apply Post={Post} type="primary" />
        ),
      ]}
    >
      <Meta
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "35px",
        }}
        avatar={
          <Avatar
            src={
              Post.owner.image
                ? Post.owner.image.url
                : "https://png.pngtree.com/png-clipart/20200701/original/pngtree-black-default-avatar-png-image_5407174.jpg"
            }
          />
        }
        title={
          !isEdited ? (
            Post.jobTitle
          ) : (
            <input
              name="jobTitle"
              value={infoPost.jobTitle}
              onChange={handlePostChange}
            ></input>
          )
        }
      />

      <div>
        {isEdited ? (
          <input
            style={{ width: "450px" }}
            name="jobDescription"
            value={infoPost.jobDescription}
            onChange={handlePostChange}
          ></input>
        ) : (
          <p id="jobDes">{Post.jobDescription} </p>
        )}
        <div className="col1">
          <BankOutlined
            className={User.Role === "Recruiter" ? "icon" : "iconCandidate"}
          />
          <span>{Post.owner.SocietyName}</span>

          <EnvironmentOutlined
            style={{ marginLeft: "180px" }}
            className={User.Role === "Recruiter" ? "icon" : "iconCandidate"}
          />
          {isEdited ? (
            <input
              name="Address"
              value={infoPost.Address}
              onChange={handlePostChange}
              style={{ width: "200px", marginLeft: "300px" }}
            ></input>
          ) : (
            <span>{Post.Address}</span>
          )}
        </div>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{ marginTop: "15px" }}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>See more details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <FieldTimeOutlined
                  className={
                    User.Role === "Recruiter" ? "icon" : "iconCandidate"
                  }
                />
                <span style={{
                      color: User.Role === "Recruiter" ? "#0d2a95" : "#ed6034",
                    }}>Created At : </span>
                <span className="spanAccordion">
                  {Post.createdAt.substring(0, 10)}
                </span>
              </div>
              <CalendarOutlined
                className={User.Role === "Recruiter" ? "icon" : "iconCandidate"}
              />
              {isEdited ? (
                <input
                  name="Contrat_Type"
                  value={infoPost.Contrat_Type}
                  onChange={handlePostChange}
                ></input>
              ) : (
                <span className="spanAccordion">{Post.Contrat_Type}</span>
              )}

              {isEdited ? (
                <>
                  <TeamOutlined
                    className={
                      User.Role === "Recruiter" ? "icon" : "iconCandidate"
                    }
                  />
                  <input
                    name="Nb_Candidate"
                    value={infoPost.Nb_Candidate}
                    onChange={handlePostChange}
                  ></input>
                </>
              ) : (
                <div>
                  <TeamOutlined
                    className={
                      User.Role === "Recruiter" ? "icon" : "iconCandidate"
                    }
                  />
                  <span className="spanAccordion">{Post.Nb_Candidate}</span>
                </div>
              )}

              {isEdited ? (
                <>
                  <span
                    style={{
                      color: User.Role === "Recruiter" ? "#0d2a95" : "#ed6034",
                    }}
                  >
                    Deadline :
                  </span>
                  <input
                    name="Deadline"
                    value={infoPost.Deadline}
                    onChange={handlePostChange}
                  ></input>
                </>
              ) : (
                <div>
                  <span
                    style={{
                      color: User.Role === "Recruiter" ? "#0d2a95" : "#ed6034",
                    }}
                  >
                    Deadline :
                  </span>
                  <span className="spanAccordion">{Post.Deadline}</span>
                </div>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Card>
  );
};

export default PostRecruiter;
