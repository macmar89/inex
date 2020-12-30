import React from 'react'
import './scss/normalize.css'
import '../node_modules/animate.css/animate.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './scss/App.scss'
import { Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

// components

import HomePage from './pages/HomePage'
import TheContact from './pages/TheContact'
import JaponskeSteny from './pages/JaponskeSteny'

import Picture from './img/cropped-body.jpg'
import TheGallery from './pages/TheGallery'

import InexFooter from './components/InexFooter'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Container>
        <Row>
          <Col xs={12} lg={10} className="HomePicture mx-auto">
            <img className="main-picture" src={Picture} alt="sediacujo"></img>
          </Col>
        </Row>
        <div className="obsah">
          <Switch >
            <Route path='/homepage' exact component={HomePage} />
            <Route path='/kontakt' component={TheContact} />
            <Route path='/galeria' component={TheGallery} />
            <Route path='/japonskesteny' component={JaponskeSteny} />
          </Switch>
        </div>
      </Container>
      <InexFooter />

    </div>
  );
}

export default App;
