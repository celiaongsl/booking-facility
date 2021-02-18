import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import SelectDropDown from "../SelectDropDown";

import { prettyDate2 } from "../../utils/helper";
import { time } from "../../utils/time_constant";
import DatePicker from "../DatePicker";

const BookingPopUpForm = (props) => {
  const {
    open = () => null,
    handleClose = () => null,
    handleSubmit = () => null,
    booking,
    handleChange = () => null,
  } = props;
  const start = useSelector((state) => state.startDateTime);
  const end = useSelector((state) => state.endDateTime);
  const [startTime, setStartTime] = useState(prettyDate2(start));
  const [endTime, setEndTime] = useState(prettyDate2(end));

  const [selectedDate, setSelectedDate] = React.useState(start);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        style={{ margin: "10px 10px" }}
      >
        <form
          action="/"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <DialogTitle
            id="simple-dialog-title"
            style={{ textAlign: "center", backgroundColor: "#e8eaf6" }}
          >
            Schedule Meeting
          </DialogTitle>
          <DialogContent>
            <TextField
              id="booking-title"
              label="Title"
              required
              name="title"
              value={booking.title}
              onChange={handleChange}
              // onBlur={handleChange}
            /><br/>
            <TextField
              id="booking-description"
              label="Description"
              name="description"
              value={booking.description}
              onChange={handleChange}
              // onBlur={handleChange}
            />
            <DialogContentText id="alert-dialog-description">
              {/* Capacity: {selectedRoomData.attributes.capacity} <br />
              Floor: {selectedRoomData.attributes.floor} <br /> */}
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
          <DialogActions style={{ justifyContent: "space-between" }}>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              // onClick={handleClose}
              color="primary"
              variant="contained"
              autoFocus
            >
              Confirm Booking
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default BookingPopUpForm;
