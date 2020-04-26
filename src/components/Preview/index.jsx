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
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    fontWeight: "600",
    backgroundImage: `url(
        "https://thumbs.dreamstime.com/z/floral-wreath-wedding-save-date-card-vintage-meadow-flowers-grass-watercolor-empty-space-your-text-summer-herbs-76692842.jpg"
      )`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "700px",
    position: "relative",
  },

  weddingDate: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
        <div className={classes.weddingDate}>
          {weddingDate && <Typography variant="h2"> {weddingDate} </Typography>}
        </div>
      </Paper>
    </div>
  );
};

export default Preview;
