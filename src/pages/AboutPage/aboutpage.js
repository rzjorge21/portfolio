import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './aboutpage.css';
import { Skillbar } from '../../components'

export default function HomePage() {
  return (
    <Row className='aboutpage' style={{marginTop:'4rem'}}>
      <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} style={{ display: 'flex', flexDirection: 'column'}}>
        <h2 className='aboutpage__pretitle bold'>
          Sobre mí
        </h2>
        <p className='aboutpage__content thin'>
          Soy Jorge Ramón, egresado de la carrera de Ingeniería de Sistemas por la Universidad de Lima.
          Me he desenvuelto como desarrollador Front-End trabajando en proyectos como desarrollador web y móvil haciendo uso de ReactJS y React Native respectivamente.
          <br />
          Soy una persona bien organizada, solucionador de problemas con una gran capacidad para el aprendizaje y el trabajo en equipo. Me gusta la natación, las actividades al aire libre, los videojuegos y la música.
          <br />
          Interesado en aprender nuevas tecnologías, ya sea como desarrollador Front-End o Back-End y trabajar en proyectos ambiciosos con gente entusiasta.
        </p>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} style={{ display: 'flex', flexDirection: 'column'}}>
        <h2 className='aboutpage__pretitle bold'>
          Mis Skills
        </h2>
        <Skillbar title={"HTML"} progress={80} />
        <Skillbar title={"CSS"} progress={75} />
        <Skillbar title={"Javascript"} progress={80} />
        <Skillbar title={"ReactJS"} progress={80} />
        <Skillbar title={"Unity"} progress={70} />
      </Col>
    </Row>
  )
}