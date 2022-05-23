import React from 'react';
import Header from './Header';
import '../styles/Reservation.scss';
import { Row, Container, Col, Form, } from 'react-bootstrap';

const Reservation = () => {
    return (
        <div className='reservation'>
            <Header />
            <div className='resbanner'>
                <div className='bannerbg'>
                    <h1>
                        Rent a Car
                    </h1>
                </div>
            </div>

            <div className='form'>
                <Container fluid='sm'>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Pick-up Date/ Time</Form.Label>
                                    <Form.Control type='datetime-local' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Return Date/ Time</Form.Label>
                                    <Form.Control type='datetime-local' />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Pick-up Location</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Return Location</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                            </Col>

                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>E-Mail*</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                            </Col>

                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='button'>
                                <input type='button' value='GET A QUOTE NOW' className='btn'/>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default Reservation