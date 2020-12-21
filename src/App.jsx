import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './scss/App.scss'
import { Switch, Route } from 'react-router-dom'

// components

import HomePage from './pages/HomePage'
import TheContact from './pages/TheContact'
import { Container } from 'react-bootstrap';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import JaponskeSteny from './pages/JaponskeSteny'


function App() {
  return (
    <div className="app">
      <SidebarMenu />
      {/* <MasterHeader /> */}

      {/* <TheNavigation /> */}
      <Container >
        <Switch >
          <Route path='/homepage' component={HomePage} />
          <Route path='/kontakt' component={TheContact} />
          <Route path='/japonskesteny' component={JaponskeSteny} />
        </Switch>
      </Container>

    </div>
  );
}

export default App;
