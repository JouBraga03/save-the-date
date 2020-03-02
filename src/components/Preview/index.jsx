import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundImage: `url(
        "https://previews.123rf.com/images/demonique/demonique1304/demonique130400005/18847950-wedding-save-the-date-card-with-delicate-grunge-oval-blank-portrait-place-on-brown-heart-patterned-b.jpg"
      )`,
    backgroundPosition: "center center",
    backgroundSize: "contain",
    height: "600px",
    position: "relative"
  }
}));

const Preview = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <div>
          <Typography variant="h2">NomeNoiva & nomeNoivo</Typography>

          <Typography variant="h2">DATA DO CASAMENTO</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Preview;
