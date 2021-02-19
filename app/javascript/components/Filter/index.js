import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { floors, capacity } from "../../utils/constant";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Filter = (props) => {
  const {
    setCapacityCheckbox,
    setFloorsCheckbox,
    capacityCheckbox,
    floorsCheckbox,
  } = props;
  const classes = useStyles();

  const resetFilters = () => {
    setCapacityCheckbox(capacity);
    setFloorsCheckbox(floors);
  };

  return (
    <Grid item xs={12} md={12} style={{ margin: "0px 40px" }}>
      <Typography variant="h5"> Filter by</Typography> <br />
      <Typography variant="h6">Floor</Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {Object.keys(floorsCheckbox).map((key, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={floorsCheckbox[key]}
                    onChange={(event) =>
                      setFloorsCheckbox({
                        ...floorsCheckbox,
                        [event.target.name]: event.target.checked,
                      })
                    }
                    name={key}
                    color="primary"
                  />
                }
                label={`Floor ${key}`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
      <Typography variant="h6">Capacity</Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {Object.keys(capacityCheckbox).map((key, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={capacityCheckbox[key]}
                    onChange={(event) =>
                      setCapacityCheckbox({
                        ...capacityCheckbox,
                        [event.target.name]: event.target.checked,
                      })
                    }
                    name={key}
                    color="primary"
                  />
                }
                label={`${key} pax`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
      <div onClick={resetFilters}>
        <Typography>Reset All Filters</Typography>
      </div>
    </Grid>
  );
};

export default Filter;
