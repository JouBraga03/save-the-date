import React, { useState } from "react";

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
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

const Formulario = () => {
  const [engagedName, setEngagedName] = useState("");
  const [fianceName, setFianceName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [positionText, setPositionText] = useState("");
  const [weddingDate, setWeddingDate] = useState(new Date());

  const handleDateChange = async date => {
    date && setWeddingDate(date);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="fiance-name"
            label="Nome da Noiva"
            required
            variant="outlined"
            value={fianceName}
            onChange={({ target: { value } }) => setFianceName(value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="engaged-name"
            required
            label="Nome do noivo"
            variant="outlined"
            value={engagedName}
            onChange={({ target: { value } }) => setEngagedName(value)}
          />
        </Grid>

        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="dd/MM/yyyy"
              value={weddingDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="background-image"
            label="Url da imagem"
            variant="outlined"
            value={backgroundImage}
            onChange={({ target: { value } }) => setBackgroundImage(value)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="position"
              name="position"
              value={positionText}
              onChange={({ target: { value } }) => setPositionText(value)}
              row
            >
              <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                label="Topo centro"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Baixo centro"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="bottom"
                control={<Radio color="primary" />}
                label="Esquerda centro"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="Direita Centro"
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
