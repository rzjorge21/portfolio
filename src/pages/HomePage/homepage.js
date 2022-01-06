import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './homepage.css';

export default function HomePage() {
  return (
    <Row className='homepage'>
      <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className='homepage__pretitle bold'>
          Hola, mi nombre es Jorge
        </h1>
        <h2 className='homepage__title playfairFont bold'>
          Y hago páginas web.
        </h2>
        <p className='homepage__content thin'>Soy un desarrollador Front-End que desea llevar tu idea al alcance de todos a través de internet.
        </p>
        <Link className='homepage__link thin' to={"/about"}>
          Más sobre mí <HiOutlineArrowNarrowRight />
        </Link>
      </Col>
    </Row>
  )
}