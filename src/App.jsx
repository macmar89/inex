import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './scss/App.scss'
import { Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

// components

import HomePage from './pages/HomePage'
import TheContact from './pages/TheContact'
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import JaponskeSteny from './pages/JaponskeSteny'

import Picture from './img/cropped-body.jpg'
import TheGallery from './pages/TheGallery'

import InexFooter from './components/InexFooter'

function App() {
  return (
    <div className="app">
      <SidebarMenu />
      {/* <MasterHeader /> */}
      {/* <TheNavigation /> */}
      <Container >
        <Row>
          <Col lg={10} className="HomePicture mx-auto">
            <img className="main-picture" src={Picture} alt="sediacujo"></img>
          </Col>
        </Row>
        <Switch >
          <Route path='/homepage' component={HomePage} />
          <Route path='/kontakt' component={TheContact} />
          <Route path='/galeria' component={TheGallery} />
          <Route path='/japonskesteny' component={JaponskeSteny} />
        </Switch>
      </Container>
      <InexFooter />

    </div>
  );
}

export default App;
