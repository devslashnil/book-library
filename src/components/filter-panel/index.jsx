import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import FilterTable from "./filter-table";
import FilterYear from "./filter-year";
import { changeAuthorsFilter, changePublishersFilter } from "../../redux/ac";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  pagination: {
    "& > *": {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));

export default function FilterPanel({ authors, publishers }) {
  const classes = useStyles();
  const [dense, setDense] = useState(true);
  const authorsRows = authors.map((value) => ({ name: value }));
  const publisherRows = publishers.map((value) => ({ name: value }));

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Box pl={2}>
          <Typography variant="h4" component="h3">
            Фильтры
          </Typography>
        </Box>
        <FilterYear />
        <FilterTable
          rows={authorsRows}
          dense={dense}
          title="Автор"
          onChange={changeAuthorsFilter}
        />
        <FilterTable
          rows={publisherRows}
          dense={dense}
          title="Издательство"
          onChange={changePublishersFilter}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Увеличить просвет"
      />
    </div>
  );
}
