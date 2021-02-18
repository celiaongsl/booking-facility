import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

const DatePicker = (props) => {
  const { value, onChange } = props;
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.root}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        label="MM/dd/yyyy"
        id="date-picker-inline"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
