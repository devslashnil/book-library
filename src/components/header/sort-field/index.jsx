import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import {
  ALPHABET_ASCENDING_ORDER,
  ALPHABET_DESCENDING_ORDER,
  DATE_ASCENDING_ORDER,
  DATE_DESCENDING_ORDER,
  DEFAULT_ORDER,
  RATING_ASCENDING_ORDER,
  RATING_DESCENDING_ORDER,
} from "../../../constants";
import { sortBooks, changeSortFilter } from "../../../redux/ac";

const sortTypes = [
  {
    value: DEFAULT_ORDER,
    label: "По умолчанию",
  },
  {
    value: ALPHABET_ASCENDING_ORDER,
    label: "По алфавиту (по возрастанию)",
  },
  {
    value: ALPHABET_DESCENDING_ORDER,
    label: "По алфавиту (по убыванию)",
  },
  {
    value: DATE_ASCENDING_ORDER,
    label: "По году (по возрастанию)",
  },
  {
    value: DATE_DESCENDING_ORDER,
    label: "По году (по убыванию)",
  },
  {
    value: RATING_ASCENDING_ORDER,
    label: "По рейтингу (по возрастанию)",
  },
  {
    value: RATING_DESCENDING_ORDER,
    label: "По рейтингу (по убыванию)",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

export default function SortField() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState(DEFAULT_ORDER);

  const handleChange = (event) => {
    setSortType(event.target.value);
    dispatch(sortBooks(event.target.value));
    dispatch(changeSortFilter(event.target.value));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-select-currency"
        select
        label="Отсортировать книги"
        value={sortType}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      >
        {sortTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}
