import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/ContactUs.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Row, Container, Col, Form,  } from 'react-bootstrap';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'

function ContactUs() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_er31r8c',
            'template_sjjbl6d',
            toSend,
            'P3xxVXzGNU-4KqMT4'
        )
        .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
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
        <div className='contact'>
            <Header />
            <div>
                <div className='contactbanner'>
                    
                        <div className='bannerbg'>
                            <h1>
                                Contact Us
                            </h1>
                        </div>

                </div>
                <Container fluid='sm' className='details'>
                    <Row>
                        <Col sm={6}>
                            <div className='contact1'>
                                <div>
                                    <p><LocationOnIcon /> 54A/78 Hauck Island Apt. 937, Poblacion, Tabuk 1692 Metro Manila</p>
                                </div>

                                <div>
                                    <p><EmailIcon />  LuckyG_transport@gmail.com</p>
                                </div>

                                <div>
                                    <p><LocalPhoneIcon />  +638178392992</p>
                                </div>
                            </div>

                            <div className='maps'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247138.77446289113!2d120.88055762603398!3d14.568086719185446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8d26026386d%3A0x5fed23daac9278d0!2sMetro%20Manila!5e0!3m2!1sen!2sph!4v1653056062465!5m2!1sen!2sph"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </Col>

                        <Col sm={6}>
                            <div className='form'>
                                <Form>
                                    <Form.Group className='mb-3'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type='text' name='email' id='email' value={toSend.email} onChange={handleChange} required/>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='text' name='name' id='name' value={toSend.name} onChange={handleChange} required/>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type='text' name='phone' id='phone' value={toSend.phone} onChange={handleChange} required/>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as='textarea' rows='3' name='message' id='message' value={toSend.message} onChange={handleChange} required/>
                                    </Form.Group>
                                    <input type='submit' value='Send' className='submit' onClick={onSubmit}/>
                                </Form>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs