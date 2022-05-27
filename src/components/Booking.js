import { Row, Col, Form, } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
// import booking from '../components/booking.php';


// const API_PATH = 'http://localhost:3000/booking.php'


class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            puDate: '',
            reDate: '',
            puLoc: '',
            reLoc: '',
            name: '',
            email: '',
            phone: '',
            flType: '',
            srType: ''
        }
    }
    handleFormSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/test.php',
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    }
    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Pick-up Date/ Time</Form.Label>
                            <Form.Control type='datetime-local' id='puDate' value={this.state.puDate} onChange={e => this.setState({puDate: e.target.value})} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Return Date/ Time</Form.Label>
                            <Form.Control type='datetime-local' id='reDate' value={this.state.reDate} onChange={e => this.setState({reDate: e.target.value})} required/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Pick-up Location</Form.Label>
                            <Form.Control type='text' id='puLoc' value={this.state.puLoc} onChange={e => this.setState({puLoc: e.target.value})} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Return Location</Form.Label>
                            <Form.Control type='text' id='reLoc' value={this.state.reLoc} onChange={e => this.setState({reLoc: e.target.value})} required/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name*</Form.Label>
                            <Form.Control type='text' id='name' value={this.state.name} onChange={e => this.setState({name: e.target.value})} required/>
                        </Form.Group>
                    </Col>

                    <Col sm>
                        <Form.Group className='mb-3'>
                            <Form.Label>E-Mail*</Form.Label>
                            <Form.Control type='text' id='email' value={this.state.email} onChange={e => this.setState({email: e.target.value})} required/>
                        </Form.Group>
                    </Col>

                    <Col sm>
                        <Form.Group className='mb-3'>
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control type='text' id='phone' value={this.state.phone} onChange={e => this.setState({phone: e.target.value})} required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <Form.Label>Fleet Type</Form.Label>
                        <Form.Select aria-label="Default" className='p-2' id='flType' value={this.state.flType} onChange={e => this.setState({flType: e.target.value})} required>
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
                        <Form.Select aria-label="Default" className='p-2' id='srType' value={this.state.srType} onChange={e => this.setState({srType: e.target.value})} required>
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
                        <input type='submit' value='GET A QUOTE NOW' className='btn'/>
                    </Col>
                </Row>
            </Form>
            
        )
    }
}

export default Booking
