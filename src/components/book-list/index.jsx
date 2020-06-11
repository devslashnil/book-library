import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import BookCard from "../book-card";
import { titleFilterSelector } from "../../redux/selectors";

const useStyles = makeStyles((theme) => ({
  warning: {
    textAlign: "center",
  },
}));

export default function BookList({ books }) {
  const classes = useStyles();
  const mdSize = books.length > 3 ? 6 : 12;
  const requestedTitle = useSelector(titleFilterSelector); // updates on each Search

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
      </Grid>
    </div>
  );
}
