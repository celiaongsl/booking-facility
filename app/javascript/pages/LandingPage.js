import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { useDispatch } from "react-redux";

import Filter from "../components/Filter";
import Header from "../components/Header";
import RoomCardDisplay from "../components/RoomCardDisplay";
import { apiURL } from "../utils/constant";
import ChooseDateTime from "../components/ChooseDateTime";
import { roundTimeQuarterHour } from "../utils/helper";
import { setEndDatetime, setStartDatetime } from "../state/action";

const LandingPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get all the rooms in database
    const url = `${apiURL}/rooms`;
    axios
      .get(url)
      .then((resp) => {
        setRooms(resp.data.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  useEffect(() => {
    // find current date and time, round it to nearest 15 minutes and store into redux
    let currentDateTime = new Date();
    const startDateTime = roundTimeQuarterHour(currentDateTime);

    // end date time = start date time + 1 hour
    // const endDateTime = startDateTime.setHours(startDateTime.getHours() + 2);
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 1);

    dispatch(setStartDatetime(startDateTime));
    dispatch(setEndDatetime(endDateTime));
  }, []);

  if (!loaded) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12}>
          <Header />
        </Grid>
        <Grid item xs={12} md={12}>
          <ChooseDateTime />
        </Grid>
        <Grid item md={3}>
          <Filter />
        </Grid>
        <Grid item md={9} container spacing={4}>
          <RoomCardDisplay roomsData={rooms} />
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
