import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DownloadResume() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button href='./images/Kobe_Matias_Resume.pdf' download variant="outlined" color="primary" target="_blank">
        Download Resume
      </Button>
      <Button href='https://github.com/KobeMatias' variant="outlined" color="Default" target="_blank">
        Github
      </Button>
      <Button href='https://www.linkedin.com/in/kobe-matias-84398a194/' variant="outlined" color="Secondary" target="_blank">
        LinkedIn
      </Button>
    </div>
  );
}
