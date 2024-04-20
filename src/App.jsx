import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Info from './components/Info'
import ImageBox from './components/ImageBox'
import SocialLinks from './components/SocialLInks'


function App() {


  return (
    <div className="App">
      <Nav />
      <Info />
      <ImageBox />
      <SocialLinks />
    </div>
  )
}

export default App
