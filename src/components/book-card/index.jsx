import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import store from "store";
import { useDispatch, useSelector } from "react-redux";
import BookRating from "./book-rating";
import { addFavoriteBook, removeFavoriteBook } from "../../redux/ac";
import { createBookIsFavoriteSelector } from "../../redux/selectors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
  },
  content: {
    flex: "1 0 auto",
    paddingBottom: 0,
  },
  details: {
    display: "flex",
    flex: "1 1000 auto",
    flexDirection: "column",
  },
  cover: {
    width: 185,
  },
});

export default function BookCard({ book }) {
  const classes = useStyles();
  const isFavorite = useSelector(createBookIsFavoriteSelector(book.get("id")));
  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      !store.get(book.get("id")) ||
      store.get(book.get("id")).isFavorite === false
    ) {
      dispatch(addFavoriteBook(book));
      store.set(book.get("id"), {
        ...store.get(book.get("id")),
        isFavorite: true,
      });
    } else {
      dispatch(removeFavoriteBook(book));
      store.set(book.get("id"), {
        ...store.get(book.get("id")),
        isFavorite: false,
      });
    }
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={book.get("coverSrc")}
        title="Contemplative Reptile"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {book.get("title")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Автор:
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textPrimary"
            component="p"
          >
            {book.get("author")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Первая публикация:
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textPrimary"
            component="p"
          >
            {book.get("published")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Издательство:
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textPrimary"
            component="p"
          >
            {book.get("publisher")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Рейтинг:
          </Typography>
          <BookRating book={book} />
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClick}>
            {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
