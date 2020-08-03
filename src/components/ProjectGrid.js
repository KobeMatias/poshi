import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import data from "../projects.json";
import MediaCard from "./ProjectItem";


const projects = data.projects;
class PrjGrid extends Component {

  render() {
      return(
    <div>
      <Grid container spacing={3}>
        <MediaCard 
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            link={projects.link}
            description={projects.description}
        />
      </Grid>
    </div>
      )};
}
export default PrjGrid;