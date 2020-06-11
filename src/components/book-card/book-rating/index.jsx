import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import store from "store";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function BookRating({ book }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (store.get(book.get("id")) && store.get(book.get("id")).rating) {
      setValue(store.get(book.get("id")).rating);
    }
  }, []);

  const handleAddClick = () => {
    const newValue = value + 1;
    if (newValue <= 5) {
      setValue(newValue);
      store.set(book.get("id"), {
        ...store.get(book.get("id")),
        rating: newValue,
      });
    }
  };

  const handleRemoveClick = () => {
    const newValue = value - 1;
    if (newValue >= 0) {
      setValue(newValue);
      store.set(book.get("id"), {
        ...store.get(book.get("id")),
        rating: newValue,
      });
    }
  };

  return (
    <div className={classes.root}>
      <Rating
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Tooltip title="Добавить рейтинг">
        <IconButton
          aria-label="add-rating"
          size="small"
          onClick={handleAddClick}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Убрать рейтинг">
        <IconButton
          aria-label="remove-rating"
          size="small"
          onClick={handleRemoveClick}
        >
          <RemoveIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
