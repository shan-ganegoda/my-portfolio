import React from 'react'
import Header from './components/header/Header'
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Qualification from './components/qualifications/Qualification';
import Contact from './components/contact/Contact';
import Certificates from './components/certificates/Certificates';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Certificates />
        <Contact />
    </main>
    
    </>
  )
}

export default App