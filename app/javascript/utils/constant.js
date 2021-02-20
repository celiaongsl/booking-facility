import React from "react";

import TvRoundedIcon from "@material-ui/icons/TvRounded";
import PowerRoundedIcon from "@material-ui/icons/PowerRounded";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import CastRoundedIcon from "@material-ui/icons/CastRounded";

import ConferenceImage from "../assets/images/conference.jpg";
import SmallMeetingRoomImage from "../assets/images/small_meeting_room.jpg";
import SleepingPodImage from "../assets/images/sleeping_pod.jpg";

export const bookingErrorMessage = (
  <React.Fragment>
    This room has been booked. <br />
    Please try another time slot or room.
  </React.Fragment>
);

// Either that or try to create an API that compiles the room data?
export const floors = { 3: false, 4: false, 8: false };

export const capacity = { 1: false, 10: false, 30: false };

export const NOT_LOGGED_IN = 'NOT_LOGGED_IN'
export const LOGGED_IN = 'LOGGED_IN'

export const assetToIconList = {
  tv: {
    icon: <TvRoundedIcon />,
    label: "TV",
  },
  power_outlets: {
    label: "Power Outlets",
    icon: <PowerRoundedIcon />,
  },
  whiteboard: {
    label: "Whiteboard",
    icon: <NoteOutlinedIcon />,
  },
  projector: {
    label: "Projector",
    icon: <CastRoundedIcon />,
  },
};

export const roomTypeToImageList = {
  conference: ConferenceImage,
  small_meeting_room: SmallMeetingRoomImage,
  sleeping_pod: SleepingPodImage,
};

export const apiURL = "http://localhost:3000/api/v1";
