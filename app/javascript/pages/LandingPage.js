import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import Filter from "../components/Filter";
import Header from "../components/Header";
import RoomCardDisplay from "../components/RoomCardDisplay";
import { apiURL } from "../utils/constant";

const LandingPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  if (!loaded) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item md={3}>
          <Filter />
        </Grid>
        <Grid item md={9} container spacing={2}>
          <RoomCardDisplay roomsData={rooms}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
