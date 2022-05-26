import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Booking from './Booking';
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
                    <Booking/>
                </Container>
            </div>

            <Footer/>
        </div>
    )
}

export default Reservation