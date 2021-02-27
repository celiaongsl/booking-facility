import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  formControl: {
    margin: 10,
    minWidth: 120,
  },
});

const SelectDropDown = (props) => {
  const classes = useStyles();
  const { label, onChange, value, list } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputProps={{ "data-testid": "select" }}
      >
        {list.map((item) => {
          return (
            <MenuItem
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectDropDown;
