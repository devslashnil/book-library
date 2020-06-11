import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { changeTitleFilter } from "../../../redux/ac";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function SearchField() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    dispatch(changeTitleFilter(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeTitleFilter(value));
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        color="primary"
        id="standard-basic"
        label="Поиск по названию"
        variant="outlined"
        value={value}
        onChange={handleChange}
        fullWidth
      />
      <Tooltip title="Искать по названию">
        <Button
          variant="contained"
          onClick={handleClick}
          startIcon={<SearchIcon />}
        >
          Найти
        </Button>
      </Tooltip>
    </form>
  );
}
