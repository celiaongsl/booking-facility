import React from "react";
import {
  FormControl,
  FormGroup,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const FilterCheckboxes = (props) => {
  const { title = "", checkboxList = {}, setCheckboxList = () => null } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6">{title}</Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup data-testid="checkbox-list">
          {Object.keys(checkboxList).map((key, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    // data-testid="test-checkbox"
                    // data-testid={index}
                    checked={checkboxList[key]}
                    onChange={(event) =>
                      setCheckboxList({
                        ...checkboxList,
                        [event.target.name]: event.target.checked,
                      })
                    }
                    name={key}
                    color="primary"
                  />
                }
                label={title === "Floor" ? `Floor ${key}` : `${key} pax`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default FilterCheckboxes;
