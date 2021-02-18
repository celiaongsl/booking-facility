import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RoomCard from "../RoomCard";

import { roomTypeToImageList } from "../../utils/constant";
import { findAssetKeyReturnIconList } from "../../utils/helper";
import BookingPopUp from "../BookingPopUp";

const RoomCardDisplay = (props) => {
  const { roomsData } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      {open && <BookingPopUp open={open} handleClose={handleClose} />}
    </React.Fragment>
  );
};

export default RoomCardDisplay;
