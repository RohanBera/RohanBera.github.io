import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/navbarComponents/Navbar'
import Home from './components/homeComponents/Home'
import About from './components/aboutmeComponents/Aboutme'
import Skills from './components/skillsComponents/Skills'
import Experience from './components/experienceComponents/Experience'
import Projects from './components/projectsComponents/Projects'


function Main() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Skills />
      <Experience />
    </React.Fragment>
  )
}

function App() {
  return (
    <div>
      <header className="nav-bar">
        <Navbar />
      </header>
      <main className="main">
        {/* <Router> */}
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
        {/* </Router> */}
      </main>
    </div>
  )
}

export default App