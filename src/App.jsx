import React from 'react'
import '../node_modules/animate.css/animate.css'
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
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="app">
      {/* <SidebarMenu /> */}
      {/* <MasterHeader /> */}
      {/* <TheNavigation /> */}
      <NavBar />
      <Container>
        <Row>
          <Col lg={10} className="HomePicture mx-auto">
            <img className="main-picture" src={Picture} alt="sediacujo"></img>
          </Col>
        </Row>
        <Switch className="pages">
          <Route path='/homepage' exact component={HomePage} />
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
