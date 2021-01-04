import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import Picture from './img/cropped-body.jpg'

//  styles 
import './scss/normalize.css'
import '../node_modules/animate.css/animate.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './scss/App.scss'

//  pages
import HomePage from './pages/HomePage'
import TheContact from './pages/TheContact'
import JaponskeSteny from './pages/JaponskeSteny'
import TheGallery from './pages/TheGallery'
import Podlahy from './pages/Podlahy'

// components
import InexFooter from './components/InexFooter'
import NavBar from './components/NavBar/NavBar'
import ProSideBar from './components/ProSidebar/ProSidebar'

// 
function App() {
  return (
    <div className="app">
      {/* <ProSideBar /> */}
      <NavBar />
      <Container>
        <Row>
          <Col xs={12} lg={10} className="HomePicture mx-auto">
            <img className="main-picture" src={Picture} alt="sediacujo"></img>
          </Col>
        </Row>
        <div className="obsah">
          <Switch >
            <Route path='/homepage' component={HomePage} />
            <Route path='/kontakt' component={TheContact} />
            <Route path='/galeria' component={TheGallery} />
            <Route path='/podlahy' component={Podlahy} />
            <Route path='/japonskesteny' component={JaponskeSteny} />
          </Switch>
        </div>
      </Container>
      <InexFooter />

    </div>
  );
}

export default App;
