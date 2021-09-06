import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { BsFilter } from 'react-icons/bs';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      display:'grid',
      gridTemplateColumns: "150px 250px",
      gridColumnGap:'15px',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    Width: 280,
    marginLeft:'800px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FiltreApply = ({handleField,handleSearchChange}) => {
  const classes = useStyles();
  const [selectedField, setSelectedField] = React.useState("");


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"><BsFilter style={{zoom:'150%'}}/> Filters </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedField}
          onChange={(e)=> {
            setSelectedField(e.target.value);
            handleField(e.target.value)
          }}
        >
          <MenuItem value='Candidate'>Candidate</MenuItem>
          <MenuItem value='Applied on'>Applied on</MenuItem>
        </Select>
        <div class="ui icon input"><input type="text" placeholder="Search..." onChange={(e)=> handleSearchChange(e.target.value)}/><i aria-hidden="true" class="search icon"></i></div>
      </FormControl>
      
    </form>
  );
};

export default FiltreApply;
