import React from 'react';
import { Row, Container, Col, Card, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import promo1 from '../media/carpromo1.jpg';
import promo2 from '../media/carpromo2.jpg';
import promo3 from '../media/carpromo3.jpg';
import '../styles/Promos.scss';


const Promos = () => {

  const bounceAnimation = keyframes`${bounceIn}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  return (
    <div className='promos'>
      <Container fluid='sm'>
        <h1>Promos</h1>
        <BouncyDiv>
          <Row>
            <Col sm={4} className='cardarea'>
              <Card style={{ width: '19rem' }} className='card'>
                <Card.Img variant="top" src={promo1} />
                <Card.Body>
                  <Card.Title>Summer Promo</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button className='button'>See Promo</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4} className='cardarea'>
            <Card style={{ width: '19rem' }} className='card'>
                <Card.Img variant="top" src={promo2} />
                <Card.Body>
                  <Card.Title>May Promo</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button className='button'>See Promo</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4} className='cardarea'>
            <Card style={{ width: '19rem' }} className='card'>
                <Card.Img variant="top" src={promo3} />
                <Card.Body>
                  <Card.Title>Birthday Promo</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button className='button'>See Promo</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </BouncyDiv>
        
      </Container>

    </div>
  )
}

export default Promos