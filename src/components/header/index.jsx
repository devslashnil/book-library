import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import SearchField from "./search-field";
import SortField from "./sort-field";
import SectionsTabs from "./sections-tabs";

export default function Header() {
  return (
    <AppBar position="static">
      <Paper square>
        <Typography
          gutterBottom
          color="primary"
          variant="h2"
          component="h1"
          align="center"
        >
          Электронная библиотека
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={8}>
              <SearchField />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SortField />
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container maxWidth="lg">
          <SectionsTabs />
        </Container>
      </Paper>
    </AppBar>
  );
}
