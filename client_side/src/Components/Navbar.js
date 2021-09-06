import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import {SidebarDataRecruiter} from './SidebarDataRecruiter'
import "./Css/Navbar.css";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Avatar } from "@material-ui/core";
import { logout } from "../Redux/Actions/AuthAction";
import { FiltreAction } from "../Redux/Actions/FiltreAction";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
  },
  inputInput: {
    paddingTop: "4px",
    padding: theme.spacing(1, 2, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  small: {
    width: '24px',
    height: '24px',
    marginRight: "20px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const User = useSelector(state=> state.Auth.User)

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logout());
    handleClose();
  };
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const Auth = useSelector((state) => state.Auth);

  { /* filter by job */}
  const [search, setSearch] = useState("");
  const HandleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(FiltreAction(search));
  };

  return (
    <>
      {Auth.isAuth && (
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className='navbar'>
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            {/*Search */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: "white" }} />
              </div>
              <InputBase
                onChange={HandleSearch}
                placeholder="Search ..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                  color: "white",
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            {/*avatar with user Fullname */}
            <IconButton 
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Chip
                avatar={
                  Auth.isAuth && (
                    <div>
                      {Auth.User && Auth.User.image ? (
                        <Avatar
                          alt="Remy Sharp"
                          src={Auth.User.image.url}
                          className={classes.small}
                        />
                      ) : (
                        <AccountCircle 
                          style={{ color: "white"}}
                        />
                      )}
                    </div>
                  )
                }
                label={Auth.User && Auth.User.FullName && Auth.User.FullName}
                variant="outlined"
                style={{color: "white",borderColor:'white'}}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={LogOut}>Log Out</MenuItem>
            </Menu>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {(Auth.User?.Role ==='Candidate')? SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }) :

              SidebarDataRecruiter.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })
              }
            </ul>
          </nav>
        </IconContext.Provider>
      )}
    </>
  );
};

export default Navbar;
