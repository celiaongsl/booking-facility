import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RoomCard from "../RoomCard";

import { assetToIconList } from "../../utils/constant";


const RoomCardDisplay = (props) => {
  const { roomsData } = props;

  return (
    <React.Fragment>
      {roomsData &&
        roomsData.map((room, index) => {
          return (
            <Grid key={index} item xs={12} sm={4} md={4}>
              <RoomCard room={room} />
            </Grid>
          );
        })}
      {/* Image here
      <br />
      Then name of the Room Then capacity Floor And icons
      {assetToIconList.tv.icon} */}
    </React.Fragment>
  );
};

export default RoomCardDisplay;
