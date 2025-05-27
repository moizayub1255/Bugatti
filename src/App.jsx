import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Startpage from './components/startpage/Startpage'
import LatestNews from './components/latestenews/LatestNews'
import '../src/App.css'
import LaMaisonbugati from './components/maisonbugatti/LaMaisonbugati'
import LAmainsonIterator from './components/maisonbugatti/LAmainsonIterator'
import IteratorSports from './components/sportscar/IteratorSports'
import Bugattisur from './components/bugattisur/Bugattisur'
import Animation from './components/animation/Animation'
import IteratorBugattiLive from './components/bugatiLive/IteratorBugattiLive'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <div className="main">
    <Navbar/>
    <Startpage/>
    <LatestNews/>
    <LAmainsonIterator/>
    <IteratorSports/>
    <Bugattisur/>
    <Animation/>
    <IteratorBugattiLive/>
    <Footer/>
    </div>
    </>
  )
}

export default App
