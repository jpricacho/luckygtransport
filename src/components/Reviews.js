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
                                    Really great service. We urgently needed a car because our car broke down and we needed a car for a day to attend an interment. I saw their site and was able to chat with a rep right away. I got a quote with all the details within the next hour. The car was ready on the day itself, in tip top shape. I highly recommend Anis to anyone who needs urgent transport at a low price.
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
                                    <Card.Subtitle className="mb-2 text-muted">Dough Not</Card.Subtitle>
                                    <Card.Text>
                                    It's our 1st time to rent for their month-long promo and we truly enjoyed the service they offer. Staff were friendly and accommodating, making sure that precautionary measures were provided. Price wise? Affordable. Our daughter liked it so much. We used the car for doing mission to less privileged children and VIOS did it well! We hope to rent again... 
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
                                    <Card.Subtitle className="mb-2 text-muted">Tina Pay</Card.Subtitle>
                                    <Card.Text>
                                    The service/process is simple and fast. I loved how easy it is to rent a car, from someone who drives before but currently have no car to drive, I don't need to buy one for a roadtrip or an outing. Thank you so much. I hope you guys expand and have a more accessible place so cars can be returned faster. Plus, prices were very reasonable, and the staff were great, thank you again.
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