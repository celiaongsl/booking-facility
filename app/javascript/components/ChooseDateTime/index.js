import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { prettyDate2 } from "../../utils/helper";
import { time } from "../../utils/time_constant";

import DatePicker from "../DatePicker";
import SelectDropDown from "../SelectDropDown";
import { setEndDatetime, setStartDatetime } from "../../state/action";

const useStyles = makeStyles({
  container: {
    height: 40,
  },
});

const ChooseDateTime = () => {
  const start = useSelector((state) => state.startDateTime);
  const end = useSelector((state) => state.endDateTime);
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = React.useState(start);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // For the date, combine startTime and endTime
  };

  const [startTime, setStartTime] = useState(prettyDate2(start));
  const [endTime, setEndTime] = useState(prettyDate2(end));

  const classes = useStyles();

  useEffect(() => {
    // Whenever date or time changes, combine them together and send to store
    // e.g. startDateTime = selectedDate + startTime

    const dateString = selectedDate.toString().substring(0, 15);
    const localeString = selectedDate.toString().substring(25);
    let startDateTime = dateString + " " + startTime + " " + localeString;
    let endDateTime = dateString + " " + endTime + " " + localeString;

    dispatch(setStartDatetime(startDateTime));
    dispatch(setEndDatetime(endDateTime));
    //  REMINDER: Double check that startTime and endTime are not wrong
  }, [selectedDate, startTime, endTime]);

  return (
    <div className={classes.container}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <SelectDropDown
        label="Start Time"
        onChange={setStartTime}
        value={startTime}
        list={time}
      />
      <SelectDropDown
        label="End Time"
        onChange={setEndTime}
        value={endTime}
        list={time}
      />
    </div>
  );
};

export default ChooseDateTime;
