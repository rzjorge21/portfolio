import React from 'react';
import { Container, Row, Col, Form, Button, Navbar, Nav, Image } from 'react-bootstrap'
import { colors } from '../colors'

function Card({ title, description, img }) {
  return (
    <div style={{ position: 'relative', height: '300px', width: '264px', borderRadius: '10px', backgroundColor: 'blue', overflow: 'hidden' }}>
      <img src={img} style={{ position: 'absolute', top: '0px', left: '0px', bottom: '0px', right: '0px', height: '100%', width: '100%', objectFit: 'cover' }}></img>
      <div style={{ position: 'absolute', top: '0px', left: '0px', bottom: '0px', right: '0px', padding: '1rem' }}>
        <h3 style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: '1.7em', color: 'white' }}>{title}</h3>
        <p style={{ fontSize: '1em', color: 'white' }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default function ExperimentPage() {
  return (
    <Container>
      <Row>
        <nav style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ height: '40px', width: '40px', borderRadius: '25px', backgroundColor: 'blue' }}></div>
            <span style={{ marginLeft: '8px' }}>Logo</span>
          </div>
          <div>
            <a href="#work" style={{ marginRight: '8px', marginLeft: '8px' }}>01 home</a>
            <a href="#clients" style={{ marginRight: '8px', marginLeft: '8px' }}>02 writing</a>
            <a href="#about" style={{ marginRight: '8px', marginLeft: '8px' }}>03 notes</a>
            <a href="#contact" style={{ marginRight: '8px', marginLeft: '8px' }}>04 about</a>
          </div>
        </nav>
      </Row>
      <Row style={{ marginTop: '100px' }}>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: colors.primary }}>HELLO, MY NAME IS MAX</p>
        <p style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: '5em' }}>I make websites.</p>
        <p style={{ fontSize: '2em', fontWeight: 'lighter' }}>I’m a frontend developer and co-founder of Codista, a software studio in Vienna.
          I also write about the web on my Blog and on Twitter.</p>
      </Row>
      <Row style={{ marginTop: '100px' }}>
        <p style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: '2em' }}>Feautred Posts</p>

        <Card
          title={'Media Queries in Times of @container'}
          description={'With container queries now on the horizon - will we need media queries at all?'}
          img={'https://mxb.dev/assets/images/featured/screen.avif'}
        />
        <Card
          title={'Container Queries in Web Components'}
          description={'With container queries now on the horizon - will we need media queries at all?'}
          img={'https://mxb.dev/assets/images/featured/container.avif'}
        />
        <Card
          title={'Space Jam'}
          description={'With container queries now on the horizon - will we need media queries at all?'}
          img={'	https://mxb.dev/assets/images/featured/spacejam.avif'}
        />
        <Card
          title={'The Return of the 90s Web'}
          description={'With container queries now on the horizon - will we need media queries at all?'}
          img={'https://mxb.dev/assets/images/featured/retro.avif'}
        />
        <br />
        <br />
        <br />
        <br />
        <p>sd</p>
        {/* <ul className="cards">
          <li>
            <a href="" class="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Jessica Parker</h3>
                    <span class="card__status">1 hour ago</span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">kim Cattrall</h3>
                    <span class="card__status">3 hours ago</span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Jessica Parker</h3>
                    <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>
                    <span class="card__status">1 hour ago</span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">kim Cattrall</h3>
                    <span class="card__status">3 hours ago</span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
        </ul> */}
      </Row>
    </Container>
  )
}