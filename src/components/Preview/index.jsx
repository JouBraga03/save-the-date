import React from "react";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundImage: `url(
        "https://previews.123rf.com/images/demonique/demonique1304/demonique130400005/18847950-wedding-save-the-date-card-with-delicate-grunge-oval-blank-portrait-place-on-brown-heart-patterned-b.jpg"
      )`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "700px",
    position: "relative",
  },
}));

const Preview = () => {
  const classes = useStyles();
  const {
    fianceName,
    engagedName,
    weddingDate,
    // backgroundImage,
    positionText,
  } = useSelector((state) => state);

  return (
    <div>
      <Paper className={`${classes.paper} ${positionText}`}>
        <div>
          {(fianceName || engagedName) && (
            <Typography variant="h2">
              {fianceName} & {engagedName}
            </Typography>
          )}
        </div>
        <div>
          {weddingDate && <Typography variant="h2"> {weddingDate} </Typography>}
        </div>
      </Paper>
    </div>
  );
};

export default Preview;
