import React, { useState } from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { prettyDate2 } from "../../utils/helper";
import { time } from "../../utils/time_constant";

const useStyles = makeStyles({
  container: {
    height: 40,
  },
  formControl: {
    margin: 10,
    minWidth: 120,
  },
});

const ChooseDateTime = () => {
  const start = useSelector((state) => state.startDateTime);
  const end = useSelector((state) => state.endDateTime);
  const [startTime, setStartTime] = useState(prettyDate2(start));
  const [endTime, setEndTime] = useState(prettyDate2(end));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Start Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        >
          {time.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">End Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        >
          {time.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* Set default data to be today And default time to be nearest whole hour
      from now */}
    </div>
  );
};

export default ChooseDateTime;
