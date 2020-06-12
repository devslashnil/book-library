import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import BookList from "../book-list";
import Header from "../header";
import FilterPanel from "../filter-panel";
import {
  authorsSelector,
  filteredBooksSelector,
  publishersSelector,
  filteredFavoritesBooksSelector,
  favoritesBooksSelector,
} from "../../redux/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5f5",
  },
  item1: {
    marginTop: "25px",
  },
  item2: {
    marginTop: "25px",
    marginBottom: "-40px",
  },
}));

const Content = ({ publishers, authors, selector, equalityFn }) => {
  const classes = useStyles();
  const books = useSelector(selector, equalityFn);

  return (
    <main role="main">
      <Container maxWidth="lg" justify="flex-start">
        <Grid container spacing={5}>
          <Box clone order={{ xs: 2, sm: 1 }} className={classes.item1}>
            <Grid item xs={12} sm={6} md={8}>
              <BookList books={books} />
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, sm: 2 }} className={classes.item2}>
            <Grid item xs={12} sm={6} md={4}>
              <FilterPanel publishers={publishers} authors={authors} />
            </Grid>
          </Box>
        </Grid>
      </Container>
    </main>
  );
};

export default function App() {
  const classes = useStyles();
  const publishers = useSelector(publishersSelector, shallowEqual);
  const authors = useSelector(authorsSelector, shallowEqual);
  const equalityFn = () => true; // because main page don't need to reload while you on it

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Content
              selector={filteredBooksSelector}
              equalityFn={equalityFn}
              publishers={publishers}
              authors={authors}
            />
          )}
        />
        <Route
          path="/favorites"
          render={() => (
            <Content
              selector={filteredFavoritesBooksSelector}
              publishers={publishers}
              authors={authors}
            />
          )}
        />
      </Switch>
    </div>
  );
}
