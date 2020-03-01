import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// @Material
import Grid from "@material-ui/core/Grid";

import Formulario from "../../../components/Formulario";

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const LayoutDefault = () => (
  <div className={classes.root}>
    <Grid container direction="row" alignItems="center" justify="flex-start">
      <Grid item xs>
        <Formulario />
      </Grid>

      <Grid item xs>
        Componente de save the date vai vir aqui
      </Grid>
    </Grid>
  </div>
);

export default LayoutDefault;
