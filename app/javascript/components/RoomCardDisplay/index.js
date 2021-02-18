import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RoomCard from "../RoomCard";

import {
  roomTypeToImageList,
} from "../../utils/constant";
import { findAssetKeyReturnIconList } from "../../utils/helper";

const RoomCardDisplay = (props) => {
  const { roomsData } = props;
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
              />
            </Grid>
          );
        })}
    </React.Fragment>
  );
};

export default RoomCardDisplay;
