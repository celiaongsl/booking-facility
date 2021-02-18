import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import SelectDropDown from "../SelectDropDown";

import { prettyDate2 } from "../../utils/helper";
import { time } from "../../utils/time_constant";
import DatePicker from "../DatePicker";

const BookingPopUp = (props) => {
  const {
    open = () => null,
    handleClose = () => null,
    selectedRoomData,
  } = props;
  const start = useSelector((state) => state.startDateTime);
  const end = useSelector((state) => state.endDateTime);
  const date = new Date(start).toLocaleDateString();
  const [startTime, setStartTime] = useState(prettyDate2(start));
  const [endTime, setEndTime] = useState(prettyDate2(end));

  const [selectedDate, setSelectedDate] = React.useState(start);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // act nvm la lol, just do a save and a pop-up if something was wrong
  // if smth is wrong, do e.preventDefault() and have an error message

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title" style={{textAlign: 'center', backgroundColor: '#e8eaf6'}}>
          Booking {selectedRoomData.attributes.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Capacity: {selectedRoomData.attributes.capacity} <br />
            Floor: {selectedRoomData.attributes.floor} <br />
          </DialogContentText>
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
          <br />
          <DatePicker value={selectedDate} onChange={handleDateChange} />{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookingPopUp;
