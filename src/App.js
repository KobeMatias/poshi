import React from 'react';
import './App.css';
import {Container} from '@material-ui/core';
//import navBar from "./components/navBar"
import SimpleTabs from "./components/TabPanel";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="mainWrapper">
      <div className="contentWrapper">
      <SimpleTabs />
      </div>
      <Footer />
    </Container>
  )
}

export default App;
