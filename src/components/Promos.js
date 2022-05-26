import React from 'react';
import { Row, Container, Col, Card, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import promo1 from '../media/sum_promo.jpg';
import promo2 from '../media/carpromo2.jpg';
import promo3 from '../media/carpromo3.jpg';
import '../styles/Promos.scss';


const Promos = () => {

  return (
    <div className='promos' id='promos'>
      <Container fluid='sm' className='m-5 p-5'>
        <h1 style={{color: "black"}}>Promos</h1>
        
          <Row>
            <Col sm={4} className='cardarea'>
              <Card style={{ width: 'auto' }} className='card'>
                <Card.Img variant="top" src={promo1} />
                <Card.Body>
                  <Card.Title className='title'>Summer Promo</Card.Title>
                  <Card.Text>
                    P200 OFF for this SUMMER! Book Now!
                  </Card.Text>
                  <Button href="/reservation" className='button'>Book Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4} className='cardarea'>
              <Card style={{ width: 'auto' }} className='card'>
                <Card.Img variant="top" src={promo1} />
                <Card.Body>
                  <Card.Title className='title'>Summer Promo</Card.Title>
                  <Card.Text>
                    P200 OFF for this SUMMER! Book Now!
                  </Card.Text>
                  <Button href="/reservation" className='button'>Book Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4} className='cardarea'>
              <Card style={{ width: 'auto' }} className='card'>
                <Card.Img variant="top" src={promo1} />
                <Card.Body>
                  <Card.Title className='title'>Summer Promo</Card.Title>
                  <Card.Text>
                    P200 OFF for this SUMMER! Book Now!
                  </Card.Text>
                  <Button href="/reservation" className='button'>Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        
      </Container>

    </div>
  )
}

export default Promos