import React from "react";
import RadioGroup from '@material-ui/core/RadioGroup';

import Radio from '@material-ui/core/Radio';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {getPostsAction} from '../Redux/Actions/PostActions'
import {useDispatch} from 'react-redux';


const LimitSelector = ({ setLimit }) => {

  const dispatch = useDispatch()
  const style1 ={color:"#0d2a95"}

  const handleLimitChange = (e) => {
    dispatch(getPostsAction(1,+e.target.value))
    setLimit(+e.target.value)
  };

  return (
    <div>
      <FormControl component="fieldset">
      <FormLabel component="legend">Select the number of posts/page</FormLabel>
      <RadioGroup column aria-label="position" name="position" defaultValue='5'>
        <FormControlLabel value='5' control={<Radio color='primary' />} label="5" onChange={handleLimitChange} />
        <FormControlLabel value='6' control={<Radio style={style1} />} label="6" onChange={handleLimitChange} />
        <FormControlLabel value='8' control={<Radio style={style1} />} label="8" onChange={handleLimitChange} />
        <FormControlLabel value='9' control={<Radio style={style1} />} label="9" onChange={handleLimitChange} />
      </RadioGroup>
    </FormControl>
    </div>
  );
};

export default LimitSelector;
