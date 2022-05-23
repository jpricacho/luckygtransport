import React from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Review from '../media/carreview.jpg'
import '../styles/Reviews.scss';

const Reviews = () => {


    return (
        <div className='reviewarea'>
            <Container fluid='sm' className='m-5 pt-5 pb-5'>
                <Row className='reviews'>
                    <Col sm={6}>
                        <div className='img'>
                            <img src={Review} />
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div className='feedback'>
                            <h3>Customer Experience</h3>
                            <h1>"A very reliable company for renting a car"</h1>
                            <p>fast transactions with quality cars to choose from! also the website is simple and easy to use. would definitely recommend and will be renting a car again</p>
                        </div>
                    </Col>
                </Row>

                <Row className='otherreview justify-content-center'>
                        <Col sm={4}>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title>
                                        <Rating name="rating" defaultValue={4} precision={4} />
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">John Doe</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={4}>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title>
                                        <Rating name="rating" defaultValue={5} precision={5} />
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">John Doe</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={4}>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title>
                                        <Rating name="rating" defaultValue={4} precision={4} />
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">John Doe</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Reviews