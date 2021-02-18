import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  iconDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0px",
    width: "40%",
    height: 44,
  },
  buttonRoot: {
    width: "100%",
  },
});

const RoomCard = (props) => {
  const { name, capacity, floor, slug } = props.room.attributes;
  const { imageURL, iconList, handleClickOpen } = props;
  const classes = useStyles();
  const history = useHistory();

  const pushToNextRoom = () => {
    history.push(`/room/${slug}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageURL} title={name} />
        <CardContent onClick={pushToNextRoom}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>{capacity} pax</Typography>
          <Typography variant="body2">Floor {floor}</Typography>
          <div className={classes.iconDiv}>
            {iconList &&
              iconList.map((icon, index) => (
                <Fragment key={index}>{icon}</Fragment>
              ))}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button
          size="large"
          color="primary"
          className={classes.buttonRoot}
          onClick={handleClickOpen}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoomCard;
