import React from "react";

import { useSelector, useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { format } from "date-fns";

const Formulario = () => {
  const {
    fianceName,
    engagedName,
    weddingDate,
    backgroundImage,
    positionText,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerDate = (date) =>
    date &&
    dispatch({
      type: "SET_CONFIGS",
      payload: { weddingDate: format(date, "dd/MM/yyyy") },
    });

  const handlerInputs = async (e) => {
    dispatch({
      type: "SET_CONFIGS",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handlerSetPosition = (e) =>
    dispatch({
      type: "SET_CONFIGS",
      payload: {
        positionText: e.target.value,
      },
    });

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="fianceName"
            label="Nome da Noiva"
            required
            variant="outlined"
            value={fianceName}
            onChange={handlerInputs}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="engagedName"
            required
            label="Nome do noivo"
            variant="outlined"
            value={engagedName}
            onChange={handlerInputs}
          />
        </Grid>

        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
            <KeyboardDatePicker
              name="weddingDate"
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="dd/MM/yyyy"
              value={weddingDate || new Date()}
              onChange={handlerDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="backgroundImage"
            label="Url da imagem"
            variant="outlined"
            value={backgroundImage}
            onChange={handlerInputs}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="position"
              name="positionText"
              value={positionText}
              onChange={handlerSetPosition}
              row
            >
              <FormControlLabel
                name="topCenter"
                value="topCenter"
                control={<Radio color="primary" />}
                label="Topo centro"
                labelPlacement="bottom"
              />
              <FormControlLabel
                name="defaultCenter"
                value="defaultCenter"
                control={<Radio color="primary" />}
                label="Centro"
                labelPlacement="bottom"
              />
              <FormControlLabel
                name="leftCenter"
                value="leftCenter"
                control={<Radio color="primary" />}
                label="Esquerda centro"
                labelPlacement="bottom"
              />
              <FormControlLabel
                name="rightCenter"
                value="rightCenter"
                control={<Radio color="primary" />}
                label="Direita Centro"
                labelPlacement="bottom"
              />

              <FormControlLabel
                name="bottomCenter"
                value="bottomCenter"
                control={<Radio color="primary" />}
                label="Baixo centro"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Formulario;
