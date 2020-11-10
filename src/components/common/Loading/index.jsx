import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import classes from "./Loading.module.scss";

const Loading = () => {
  const loading = useSelector(state => state.loading);
  return loading && <CircularProgress className={classes.loading} />;
};

export default React.memo(Loading);
