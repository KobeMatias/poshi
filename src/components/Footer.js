import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./Footer.css"

export default function Footer() {

  return (
    <div className="main-footer">
      <Grid container spacing={3}>
        <Grid item xs={12} className="footerContent">
        <p>COPYRIGHT KOBE 2020</p>
        </Grid>
      </Grid>
    </div>
  );
}

