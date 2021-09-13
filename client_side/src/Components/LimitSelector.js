import React from "react";
import RadioGroup from '@material-ui/core/RadioGroup';

import Radio from '@material-ui/core/Radio';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {getPostsAction} from '../Redux/Actions/PostActions'
import {useDispatch} from 'react-redux';

import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { SiPagekit } from "react-icons/si";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    Color:'white'
  },
}));


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


const LimitSelector = ({ setLimit }) => {
  const classes = useStyles();
  const [number, setNumber] = React.useState('');
  

  const dispatch = useDispatch()

  const handleLimitChange = (e) => {
    dispatch(getPostsAction(1,+e.target.value))
    setLimit(+e.target.value)
    setNumber(e.target.value);
  };

  return (
    <div>
      {/* <FormControl component="fieldset">
      <FormLabel component="legend">Select the number of posts/page</FormLabel>
      <RadioGroup column aria-label="position" name="position" defaultValue='5'>
        <FormControlLabel value='5' control={<Radio color='primary' />} label="5" onChange={handleLimitChange} />
        <FormControlLabel value='6' control={<Radio style={style1} />} label="6" onChange={handleLimitChange} />
        <FormControlLabel value='8' control={<Radio style={style1} />} label="8" onChange={handleLimitChange} />
        <FormControlLabel value='9' control={<Radio style={style1} />} label="9" onChange={handleLimitChange} />
      </RadioGroup>
    </FormControl> */}

    <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native"><SiPagekit/></InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={number}
          onChange={handleLimitChange}
          input={<BootstrapInput />}
        >
          <option  value={5}>5</option >
          <option  value={6} >6</option>
          <option  value={8} >8</option>
          <option  value={9} >9</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default LimitSelector;
