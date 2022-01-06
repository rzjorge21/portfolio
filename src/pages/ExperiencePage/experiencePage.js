import React from 'react'
import './experiencepage.css'
import { Row, Col } from 'react-bootstrap'
import { FibButton } from '../../components'

export default function ExperiencePage() {
  return (
    <Row style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor:'#F5F5F5'}}>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className='subtitle bold'>
          Experiencia Pre-Profesional
        </h2>

        <ul class="timeline">
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">Quinua SmartApp</span>
                <span class="time-wrapper"><span class="time">Ago 2019 - Nov 20</span></span>
              </div>
              <div class="desc">
                Realicé la refactorización del código existente de la aplicación web y el desarrollo de nuevas
                funcionalidades utilizando las siguientes tecnologías:
                <span className='bold'>ReactJS, Javascript, Redux, HTML5, CSS, Bootstrap.</span>
              </div>
            </div>
          </li>

          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">Monipez</span>
                <span class="time-wrapper"><span class="time">Ene 2020 - Mar 2020</span></span>
              </div>
              <div class="desc">
                Desarrollé la aplicación móvil híbrida haciendo uso de tecnologías como <span className='bold'>React Native, Redux,
                  Javascript, Native-Base y Java.</span>
              </div>
            </div>
          </li>

          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">ULimaExpo</span>
                <span class="time-wrapper"><span class="time">Ago 2020 - Dic 2020</span></span>
              </div>
              <div class="desc">
                Presenté el diseño y desarrollé la App Móvil UlimaExpo sobre la plataforma de desarrollo de
                videojuegos <span className='bold'>Unity</span> cuyas principales funcionalidades incluyen la generación dinámica del
                entorno 3D de acuerdo con la información brindada por un servicio web, descarga de
                archivos al storage local del dispositivo y movilidad de un personaje virtual en primera
                persona.
              </div>
            </div>
          </li>
        </ul>
        <br />
        <FibButton href={process.env.PUBLIC_URL + "CV - Jorge Ramón.pdf"} download={"CV-Jorge_Ramón.pdf"}>
          Descargar CV
        </FibButton>
      </Col>
    </Row>
  )
}