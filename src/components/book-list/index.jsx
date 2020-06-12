import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import BookCard from "../book-card";
import { titleFilterSelector } from "../../redux/selectors";
import { Button } from "@material-ui/core";
import { changeTitleFilter } from "../../redux/ac";

const useStyles = makeStyles((theme) => ({
  warning: {
    textAlign: "center",
  },
}));

export default function BookList({ books }) {
  const classes = useStyles();
  const mdSize = books.length > 3 ? 6 : 12;
  const requestedTitle = useSelector(titleFilterSelector); // updates on each Search
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTitleFilter(""));
  };

  return (
    <div>
      <Grid container spacing={3}>
        {books.length !== 0 ? (
          books.map((bookRecord) => (
            <Grid item xs={12} sm={12} md={mdSize} key={bookRecord.get("id")}>
              <BookCard book={bookRecord} />
            </Grid>
          ))
        ) : (
          <div className={classes.warning}>
            <Typography variant="h4" component="h3">
              По запросу
              <bold>{` ${requestedTitle} ` /* Is it 100% XSS free? */}</bold>
              ничего не найдено!
            </Typography>
          </div>
        )}
        {books.length === 0 && requestedTitle.length > 0 && (
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleClick}
            fullWidth
          >
            Сбросить параметры поиска?
          </Button>
        )}
      </Grid>
    </div>
  );
}
