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
import HomePage from './pages/Homepage/HomePage'
import TheContact from './pages/TheContact'
import JaponskeSteny from './pages/JaponskeSteny'
import TheGallery from './pages/TheGallery'
import Rolety from './pages/Rolety'
import Dvere from './pages/Dvere'
import Referencie from './pages/Referencie'
import Podlahy from './pages/Podlahy'

// components
import InexFooter from './components/InexFooter'
import NavBar from './components/NavBar/NavBar'
import TheNavigation from './components/TheNavigation'

// 
function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <TheNavigation /> */}
      <Container>
        <div className="obsah">
          <Switch >

            <Route path='/homepage' component={HomePage} />
            <Route path='/referencie' component={Referencie} />
            <Route path='/kontakt' component={TheContact} />
            <Route path='/galeria' component={TheGallery} />
            <Route path='/podlahy' component={Podlahy} />
            <Route path='/rolety' component={Rolety} />
            <Route path='/galeriadvere' component={Dvere} />
            <Route path='/japonskesteny' component={JaponskeSteny} />
          </Switch>
          <InexFooter />
        </div>
      </Container>
    </div>
  );
}

export default App;
