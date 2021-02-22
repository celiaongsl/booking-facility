import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { useDispatch } from "react-redux";

import Filter from "../containers/BookingDashboardContainers/Filter";
import Header from "../components/Header";
import RoomCardDisplay from "../containers/BookingDashboardContainers/RoomCardDisplay";
import { apiURL, capacity, floors } from "../utils/constant";
import ChooseDateTime from "../containers/BookingDashboardContainers/ChooseDateTime";
import {
  convertObjectIntoQueryString,
  roundTimeQuarterHour,
} from "../utils/helper";
import { setEndDatetime, setStartDatetime } from "../state/action";

const BookingDashboardPage = (props) => {
  const {loggedInStatus, user} = props;
  const [rooms, setRooms] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [capacityCheckbox, setCapacityCheckbox] = useState(capacity);
  const [floorsCheckbox, setFloorsCheckbox] = useState(floors);
  const dispatch = useDispatch();

  console.log(loggedInStatus)
  console.log(user)
  console.log("do i have these details...?")
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
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 1);

    dispatch(setStartDatetime(startDateTime));
    dispatch(setEndDatetime(endDateTime));
  }, []);

  useEffect(() => {
    let queryString = "?";
    const queryFloorParams = convertObjectIntoQueryString({
      object: floorsCheckbox,
      paramKey: "floor[]",
    });
    const queryCapacityParams = convertObjectIntoQueryString({
      object: capacityCheckbox,
      paramKey: "capacity[]",
    });

    queryString = queryString + queryFloorParams + queryCapacityParams;
    const url = `${apiURL}/rooms${queryString}`;
    axios
      .get(url)
      .then((resp) => {
        setRooms(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [capacityCheckbox, floorsCheckbox]);

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
        <Grid item md={3} container spacing={5}>
          <Filter
            capacityCheckbox={capacityCheckbox}
            floorsCheckbox={floorsCheckbox}
            setCapacityCheckbox={setCapacityCheckbox}
            setFloorsCheckbox={setFloorsCheckbox}
          />
        </Grid>
        <Grid item md={9} container spacing={4}>
          <RoomCardDisplay roomsData={rooms} />
        </Grid>
      </Grid>
    </div>
  );
};

export default BookingDashboardPage;
