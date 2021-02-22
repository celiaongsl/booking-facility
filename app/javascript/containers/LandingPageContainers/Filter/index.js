import { Grid, Typography } from "@material-ui/core";
import React from "react";

import { floors, capacity } from "../../../utils/constant";
import FilterCheckboxes from "../../../components/FilterCheckboxes";

const Filter = (props) => {
  const {
    setCapacityCheckbox,
    setFloorsCheckbox,
    capacityCheckbox,
    floorsCheckbox,
  } = props;

  const resetFilters = () => {
    setCapacityCheckbox(capacity);
    setFloorsCheckbox(floors);
  };

  return (
    <Grid item xs={12} md={12} style={{ margin: "0px 40px" }}>
      <Typography variant="h5"> Filter by</Typography> <br />
      <FilterCheckboxes
        title="Floor"
        checkboxList={floorsCheckbox}
        setCheckboxList={setFloorsCheckbox}
      />
      <FilterCheckboxes
        title="Capacity"
        checkboxList={capacityCheckbox}
        setCheckboxList={setCapacityCheckbox}
      />
      <div onClick={resetFilters}>
        <Typography>Reset All Filters</Typography>
      </div>
    </Grid>
  );
};

export default Filter;
