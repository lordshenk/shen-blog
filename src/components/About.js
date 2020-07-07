import React from 'react';
import Header from './Header';
import { Container, Row, Col } from 'reactstrap';

export default function About(props) {
  return(
    <div className='about'>
      <Header />
      <Container className='mt-3'>
        <Row>
          <Col className='sm-8 d-flex flex-column align-items-center'>
            <h1 className='mb-3 text-center'>About Me</h1>
            <img className='my-4' src='https://picsum.photos/300/300/' alt='avatar'/>
            <p>Duy Khanh</p>
            <a target='_blank' href='https://github.com/lordshenk' className='text-info' rel="noopener noreferrer">
              <h5 className='d-inline-block'>Github</h5>
            </a>
          </Col>
        </Row>
      </Container>
      <p>Stay Hungry, Stay foolish</p>
    </div>
  )
}