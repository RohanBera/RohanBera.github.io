import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

import Navbar from './components/navbarComponents/Navbar'
import Home from './components/homeComponents/Home'
import About from './components/aboutmeComponents/Aboutme'
import Skills from './components/skillsComponents/Skills'
import Experience from './components/experienceComponents/Experience'
import Projects from './components/projectsComponents/Projects'
import Getintouch from './components/getintouchComponents/Getintouch'

function Main() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Getintouch />
    </React.Fragment>
  )
}

function App() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop

    scrolled > 300 ? setVisible(true) : setVisible(false)
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div>
      <header className="nav-bar">
        <Navbar />
      </header>
      <main className="main">
        {visible &&
          <Link smooth to='#' className="scroll">Scr<span>oll to top</span></Link>
        }
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
      </main>
    </div>
  )
}

export default App