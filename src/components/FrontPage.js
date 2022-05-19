import React, { useState } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Promos from './Promos';
import Reviews from './Reviews';
import Pricing from './Pricing';
import '../styles/FrontPage.scss'


const FrontPage = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className='section'>
            <Carousel  activeIndex={index} onSelect={handleSelect} controls={false} interval={null}>
                <Carousel.Item className='intro'>
                    <Container fluid className='introbg'>
                        <Row className='row'>
                            <Col sm={6} className='title'>
                                <div className='description'>
                                    <div className='text'>
                                        <h1 className='display-3'>Lucky G <br />transport</h1>
                                        <p>description goes here</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item className='formbg'>
                    <Container fluid='sm' className='form1'>
                        <Row className='row'>
                           
                            <Col sm>
                            <h1>Pick up Details</h1>
                                <Form>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Pick-up Date and Time</Form.Label>
                                        <Form.Control type='datetime-local' />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Pick-up Location</Form.Label>
                                        <Form.Select>
                                            <option>Select</option>
                                            <option value='QC'>Quezon City Branch</option>
                                            <option value='Manila'>Manila Branch</option>
                                            <option value='Makati'>Makati Branch</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Select>
                                            <option>Car Type:</option>
                                            <option value='standard'>Standard Car</option>
                                            <option value='convertible'>Convertible</option>
                                            <option value='luxury'>Luxury Car</option>
                                            <option value='van'>Van</option>
                                            <option value='suv'>SUVs</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form>

                            </Col>

                            <Col sm>
                            <h1>Return Details</h1>
                                <Form>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Return Date and Time</Form.Label>
                                        <Form.Control type='datetime-local' />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Drop-off Location</Form.Label>
                                        <Form.Select>
                                            <option>Select</option>
                                            <option value='QC'>Quezon City Branch</option>
                                            <option value='Manila'>Manila Branch</option>
                                            <option value='Makati'>Makati Branch</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Control type='button' value='Check Price and Availability' className='button'/>
                                    </Form.Group>

                                </Form>

                            </Col>
                        </Row>

                    </Container>
                </Carousel.Item>

            </Carousel>

            <Container fluid='sm'>
                <Row className='brands'>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>

            <Promos />
            <Reviews/>
            <Pricing/>
        </div>

    )
}

export default FrontPage