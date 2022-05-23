import React from 'react';
import { Row, Container, Col, Card, Button } from 'react-bootstrap';
import '../styles/Pricing.scss';
import car from '../media/carpromo1.jpg';
import { Carousel } from 'react-bootstrap';

const Pricing = () => {
  return (
    <div className='pricing'>
      <Carousel variant="dark" className='p-5'>
        <Carousel.Item>
          <Container fluid='sm' >
            <Row>
              <Col sm>
                <Card className='card'>
                  <Card.Img variant="top" src={car} />
                  <Card.Body>
                    <Card.Title>Group A</Card.Title>
                    <Card.Text>
                      From <strong>₱ 1,050</strong> To 2,250
                    </Card.Text>
                    <Button className='btn'>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm>
                <Card className='card'>
                  <Card.Img variant="top" src={car} />
                  <Card.Body>
                    <Card.Title>Group B</Card.Title>
                    <Card.Text>
                      From <strong>₱ 1,550</strong> To 2,950
                    </Card.Text>
                    <Button className='btn'>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm>
                <Card className='card'>
                  <Card.Img variant="top" src={car} />
                  <Card.Body>
                    <Card.Title>Group C</Card.Title>
                    <Card.Text>
                      From <strong>₱ 2,450</strong> To 4,000
                    </Card.Text>
                    <Button className='btn'>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container fluid='sm' >
            <Row>
              <Col sm>
                <Card className='card'>
                  <Card.Img variant="top" src={car} />
                  <Card.Body>
                    <Card.Title>Group D</Card.Title>
                    <Card.Text>
                      From <strong>₱ 1,050</strong> To 2,250
                    </Card.Text>
                    <Button className='btn'>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm>
                <Card className='card'>
                  <Card.Img variant="top" src={car} />
                  <Card.Body>
                    <Card.Title>Group E</Card.Title>
                    <Card.Text>
                      From <strong>₱ 1,550</strong> To 2,950
                    </Card.Text>
                    <Button className='btn'>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm>
                <Card className='card'>
                  <Card.Img variant="top" src={car} />
                  <Card.Body>
                    <Card.Title>Group F</Card.Title>
                    <Card.Text>
                      From <strong>₱ 2,450</strong> To 4,000
                    </Card.Text>
                    <Button className='btn'>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Pricing