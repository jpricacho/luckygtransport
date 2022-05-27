import { Row, Col, Form, } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'
// import booking from '../components/booking.php';


const API_PATH = 'http://localhost/contact/'


function Booking() {
    // constructor(props) {
    //     super(props);
    //     const [toSend, setToSend] = useState({
    //         puDate: '',
    //         reDate: '',
    //         puLoc: '',
    //         reLoc: '',
    //         name: '',
    //         email: '',
    //         phone: '',
    //         flType: '',
    //         srType: ''
    //     })
    // }
    const [toSend, setToSend] = useState({
        puDate: '',
        reDate: '',
        puLoc: '',
        reLoc: '',
        name: '',
        email: '',
        phone: '',
        flType: '',
        srType: ''
    })
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_er31r8c',
            'template_92555s5',
            toSend,
            'P3xxVXzGNU-4KqMT4'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            <Alert variant='primary'>Thank You!</Alert>
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label>Pick-up Date/ Time</Form.Label>
                        <Form.Control type='datetime-local' name='puDate' id='puDate' value={toSend.puDate} onChange={handleChange} required/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label>Return Date/ Time</Form.Label>
                        <Form.Control type='datetime-local' name='reDate' id='reDate' value={toSend.reDate} onChange={handleChange} required/>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label>Pick-up Location</Form.Label>
                        <Form.Control type='text' name='puLoc' id='puLoc' value={toSend.puLoc} onChange={handleChange} required/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label>Return Location</Form.Label>
                        <Form.Control type='text' name='reLoc' id='reLoc' value={toSend.reLoc} onChange={handleChange} required/>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col sm>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name*</Form.Label>
                        <Form.Control type='text' name='name' id='name' value={toSend.name} onChange={handleChange} required/>
                    </Form.Group>
                </Col>

                <Col sm>
                    <Form.Group className='mb-3'>
                        <Form.Label>E-Mail*</Form.Label>
                        <Form.Control type='text' name='email' id='email' value={toSend.email} onChange={handleChange} required/>
                    </Form.Group>
                </Col>

                <Col sm>
                    <Form.Group className='mb-3'>
                        <Form.Label>Phone Number*</Form.Label>
                        <Form.Control type='text' name='phone' id='phone' value={toSend.phone} onChange={handleChange} required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <Form.Label>Fleet Type</Form.Label>
                    <Form.Select aria-label="Default" className='p-2' name='flType' id='flType' value={toSend.flType} onChange={handleChange} required>
                        <option>Please Select Fleet Type</option>
                        <option value="GroupA">Group A - Hatchback A/T</option>
                        <option value="GroupB">Group B - Sedan M/T</option>
                        <option value="GroupC">Group C - Sedan A/T</option>
                        <option value="GroupD">Group D - Premium sedan A/T</option>
                        <option value="GroupE">Group E - AUV: 7 seater M/T</option>
                        <option value="GroupF">Group F - SUV: 7 seater A/T</option>
                    </Form.Select>
                </Col> 
                <Col sm>
                    <Form.Label>Service Type</Form.Label>
                    <Form.Select aria-label="Default" className='p-2' name='srType' id='srType' value={toSend.srType} onChange={handleChange} required>
                        <option>Please Select Service Type</option>
                        <option value="Self_Drive">Self Drive</option>
                        <option value="With_Drive">With Driver</option>
                        <option value="Shuttle">Shuttle Service</option>
                    </Form.Select>
                </Col> 
            </Row>

            <Row>
                <Col className='button'>
                    {/* <input type='submit' value='GET A QUOTE NOW' className='btn' onClick={e => this.handleFormSubmit(e)}/> */}
                    <input type='submit' value='GET A QUOTE NOW' className='btn' onClick={onSubmit}/>
                </Col>
            </Row>
        </Form>
        
    )
}

export default Booking
