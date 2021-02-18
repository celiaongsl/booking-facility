import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: 40,
  },
});

const ChooseDateTime = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Set default data to be today And default time to be nearest whole hour
      from now
    </div>
  );
};

export default ChooseDateTime;
