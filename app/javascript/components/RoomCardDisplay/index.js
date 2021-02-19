import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import RoomCard from "../RoomCard";

import {
  apiURL,
  bookingErrorMessage,
  roomTypeToImageList,
} from "../../utils/constant";
import { findAssetKeyReturnIconList } from "../../utils/helper";
import AxiosHelper from "../../utils/AxiosHelper";

import BookingPopUpForm from "../BookingPopUpForm";

const RoomCardDisplay = (props) => {
  const { roomsData } = props;
  const [open, setOpen] = useState(false);
  const start = useSelector((state) => state.startDateTime);
  const end = useSelector((state) => state.endDateTime);
  const [booking, setBooking] = useState({
    title: "",
    description: "",
    start_timestamp: start,
    end_timestamp: end,
    user_id: 1,
    room_id: null,
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setBooking({ ...booking, start_timestamp: start, end_timestamp: end });
  }, [start, end]);

  const handleClickOpen = (roomData) => {
    // setSelectedRoomData(roomData);
    setBooking({
      ...booking,
      room_id: roomData.id,
      title: `Booking ${roomData.attributes.name}`,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setBooking({ ...booking, title: "", description: "" });
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${apiURL}/bookings`;
    AxiosHelper();

    // NOTE TO SELF: You need to set up your timestamp as such: 2021-02-18T23:00:00.000000+08:00
    // NOTICE THE EXTRA 3 ZEROES. Else there'll be no conflict for you lmao...

    axios
      .post(url, { ...booking })
      .then((resp) => {
        alert("Booking Confirmed!");
        handleClose();
      })
      .catch((resp) => {
        setErrorMessage(bookingErrorMessage);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      {roomsData &&
        roomsData.map((room, index) => {
          const assets = room.attributes.assets;
          let assetsIconList = findAssetKeyReturnIconList(assets);

          const imageURL = roomTypeToImageList[room.attributes.room_type];

          return (
            <Grid key={index} item xs={12} sm={4} md={4}>
              <RoomCard
                room={room}
                imageURL={imageURL}
                iconList={assetsIconList}
                handleClickOpen={handleClickOpen}
              />
            </Grid>
          );
        })}
      {open && (
        <BookingPopUpForm
          open={open}
          handleClose={handleClose}
          //   selectedRoomData={selectedRoomData}
          handleSubmit={handleSubmit}
          booking={booking}
          handleChange={handleChange}
          errorMessage={errorMessage}
        />
      )}
    </React.Fragment>
  );
};

export default RoomCardDisplay;
