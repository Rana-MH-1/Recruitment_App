import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { getPostsAction } from "../Redux/Actions/PostActions";
import { useDispatch,useSelector } from "react-redux";

import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { SiPagekit } from "react-icons/si";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    Color: "white",
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#fbf4e9",
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const LimitSelector = ({ setLimit }) => {
  const classes = useStyles();
  const [number, setNumber] = React.useState("");

  const dispatch = useDispatch();

  const handleLimitChange = (e) => {
    dispatch(getPostsAction(1, +e.target.value));
    setLimit(+e.target.value);
    setNumber(e.target.value);
  };

  const User = useSelector(state=> state.Auth.User)

  return (
  
    <div>
      <LightTooltip title="Choose the number of posts displayed per page">
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">
            <SiPagekit style={{ zoom: "150%" }} />
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={number}
            onChange={handleLimitChange}
            input={<BootstrapInput style={{color:User?.Role==='Recruiter'? '#0d2a95' : '#ed6034'}}/>}
          >
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </NativeSelect>
        </FormControl>
      </LightTooltip>
    </div>
  );
};

export default LimitSelector;
