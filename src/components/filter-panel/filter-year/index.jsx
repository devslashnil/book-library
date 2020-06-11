import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { changeDateFilter } from "../../../redux/ac";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  margin: {},
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField1: {
    width: "26ch",
  },
  textField2: {
    width: "28ch",
  },
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function FilterYear() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialState = {
    from: 1800,
    to: 2020,
  };
  const [values, setValues] = useState(initialState);

  const handleChangeFrom = (event) => {
    setValues({ ...values, from: event.target.value });
    dispatch(
      changeDateFilter({
        from: event.target.value,
        to: values.to,
      })
    );
  };

  const handleChangeTo = (event) => {
    setValues({ ...values, to: event.target.value });
    dispatch(
      changeDateFilter({
        from: values.from,
        to: event.target.value,
      })
    );
  };

  const handleReset = () => {
    setValues(initialState);
    dispatch(
      changeDateFilter({
        from: null,
        to: null,
      })
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.titleBar}>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Годы книг
        </Typography>
        <Tooltip title="Сбросить годы книг">
          <Button size="small" onClick={handleReset}>
            Сбросить
          </Button>
        </Tooltip>
      </div>
      <div>
        <FormControl
          className={clsx(
            classes.margin,
            classes.withoutLabel,
            classes.textField1
          )}
        >
          <Input
            id="date-from"
            type="number"
            value={values.from}
            onChange={handleChangeFrom}
            startAdornment={
              <InputAdornment position="start">Показать книги c</InputAdornment>
            }
            endAdornment={<InputAdornment position="end">года</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
        <FormControl
          className={clsx(
            classes.margin,
            classes.withoutLabel,
            classes.textField2
          )}
        >
          <Input
            id="date-to"
            type="number"
            value={values.to}
            onChange={handleChangeTo}
            startAdornment={
              <InputAdornment position="start">
                Показать книги до
              </InputAdornment>
            }
            endAdornment={<InputAdornment position="end">года</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
      </div>
    </div>
  );
}
