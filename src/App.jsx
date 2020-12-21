import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import TheNavigation from './components/TheNavigation';

// components

import HomePage from './views/HomePage'
import TheContact from './views/TheContact'
import MasterHeader from './components/MasterHeader'
import { Container } from 'react-bootstrap';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';


function App() {
  return (
    <div className="App">
      <SidebarMenu />
      {/* <MasterHeader /> */}

      {/* <TheNavigation /> */}
      <Container>
        <Switch>
          <Route path='/homepage' component={HomePage} />
          <Route path='/kontakt' component={TheContact} />
        </Switch>
      </Container>

    </div>
  );
}

export default App;
