import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageAvatar from './Avatar';
import HeaderText from './Heading';
import DownloadResume from './DownloadBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <ImageAvatar />
        </Grid>
        <Grid item xs={9}>
            <HeaderText />
            <p>A highly-motivated, bi-cultural, fresh college graduate with a degree in Bachelors of Arts, majored in Multimedia Arts who is eager to find a position with a company where I could hone, grow and perfect my skills. I am hard-working, eager to learn, can easily adapt to any work environment, and extremely personable.</p>
            <DownloadResume />
        </Grid>
      </Grid>
    </div>
  );
}
