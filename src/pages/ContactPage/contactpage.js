import React from 'react';
import { Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import "./contactpage.css"

export default function ContactPage() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m6mo241', 'template_w74f0n4', e.target, 'user_rLLzygHvLwJENtcUMgLj5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <Row style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <h2 className='subtitle bold' style={{textAlign:'center'}}>
          Comuníquese conmigo
        </h2>
        <form onSubmit={sendEmail}>
          <div className='row pt-5 mx-auto'>
            <div className='col-8 form-group mx-auto'>
              <input type={'text'} className='form-control' placeholder='Nombre' name='name' />
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
              <input type={'email'} className='form-control' placeholder='Correo' name='email' />
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
              <input type={'text'} className='form-control' placeholder='Asunto' name='subject' />
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
              <textarea className='form-control' id="" cols={"30"} rows={"8"} placeholder='Mensaje' name='message' />
            </div>
            <div className='col-8 pt-3 mx-auto'>
              <input type={'submit'} className='slide' value={"Enviar mensaje"} />
            </div>
          </div>
        </form>
      </Col>
    </Row>
  )
}