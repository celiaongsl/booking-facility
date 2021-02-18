import React from 'react';

import TvRoundedIcon from "@material-ui/icons/TvRounded";
import PowerRoundedIcon from '@material-ui/icons/PowerRounded';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import CastRoundedIcon from '@material-ui/icons/CastRounded';

export const assetToIconList = {
  tv: {
    icon: <TvRoundedIcon />,
    label: "TV",
  },
  power_outlets: {
    label: "Power Outlets",
    icon: <PowerRoundedIcon />
  },
  whiteboard: {
    label: "Whiteboard",
    icon: <NoteOutlinedIcon />
  },
  projector: {
    label: "Projector",
    icon: <CastRoundedIcon />
  },
};

export const apiURL = '/api/v1';