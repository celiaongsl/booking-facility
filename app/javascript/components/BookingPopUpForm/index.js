import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
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
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  textfieldRoot: {
    width: "100%",
  },
});

const BookingPopUpForm = (props) => {
  const {
    open = () => null,
    handleClose = () => null,
    handleSubmit = () => null,
    booking,
    handleChange = () => null,
    errorMessage = "",
  } = props;
  const classes = useStyles();

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
              name="title"
              value={booking.title}
              onChange={handleChange}
              className={classes.textfieldRoot}
            />
            <br />
            <TextField
              id="booking-description"
              label="Description"
              name="description"
              value={booking.description}
              onChange={handleChange}
              className={classes.textfieldRoot}
            />
            <DialogContentText id="alert-dialog-description">
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
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              style={{ width: "100%" }}
            />{" "}
            {errorMessage && (
              <div style={{ color: "red", wordWrap: "break-word" }}>
                <Typography>{errorMessage}</Typography>
              </div>
            )}
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
