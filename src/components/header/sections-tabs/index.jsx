import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function DisabledTabs() {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Tab label="Все книги" />
        </Link>
        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <Tab label="Избранные книги" />
        </Link>
      </Tabs>
    </div>
  );
}
