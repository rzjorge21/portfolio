import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { BsFillSquareFill, BsArrowRight, BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoAngular, IoLogoNodejs, IoLogoGithub } from "react-icons/io";
import { FaReact } from 'react-icons/fa'
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from './components'
import { HomePage, AboutPage, ExperiencePage, ContactPage } from './pages'

function NavBar() {
  return (
    <nav>
      <a className='navItem active' href="#">Sobre mí</a>
      <a className='navItem' href="#">Skills</a>
      <a className='navItem' href="#">Contáctame</a>
    </nav>
  )
}

function Skill({ icon, title }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#E1E1E1',
      borderRadius: '10px',
      width: '100px',
      height: '100px',
    }}>
      {icon}
      <span style={{ fontSize: '.7em', color: '#222831' }}>{title}</span>
    </div>
  )
}

function DataDisplay({ number, description }) {
  return (
    <div style={{
      display: 'flex', alignItems: "flex-end",
      width: '150px'
    }}>
      <span
        style={{
          fontSize: '4em',
          color: '#00ADB5',
          marginRight: '12px',
          lineHeight: '1em',
          fontWeight: 'bold'
        }}>
        {number}
      </span>
      <span style={{ fontSize: '0.8em', color: '#393E46', fontWeight: '500' }}>{description}</span>
    </div>
  )
}

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {

  return (
    <div style={{backgroundColor:'#F5F5F5', minHeight:'100vh'}}>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
