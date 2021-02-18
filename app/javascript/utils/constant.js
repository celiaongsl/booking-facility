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

export const apiURL = "/api/v1";
