import React, { Component } from 'react'
import './App.scss'
import Navbar from './components/Navbar/navbar.component'
import TourList from './components/TourList/TourList.component'

class App extends Component {
  render() {
      return(
          <div>
             <Navbar />
             <TourList />
          </div>
      )
  }
}

export default App;
