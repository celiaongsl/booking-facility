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
  const { value, onChange, style } = props;
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.root}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        label="Booking Date"
        aria-label="date-picker"
        id="date-picker-inline"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        style={style}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
