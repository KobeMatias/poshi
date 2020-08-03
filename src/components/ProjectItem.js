import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function MediaCard(props) {
  
    return (
      
    <Grid item xs={6}>
        <Card>
        <CardActionArea>
            <CardMedia
            image={props.image}
            title={props.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button href={props.link} size="small" color="primary">
            Go To Project
            </Button>
        </CardActions>
        </Card>
    </Grid>
  );
}
