import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: '0 auto',
  },
  mediumVertical:{
      top:'50vh',
      marginTop: theme.spacing(2),
  }
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress className={classes.mediumVertical} />
      <LinearProgress className={classes.mediumVertical} color="secondary" />
    </div>
  );
}