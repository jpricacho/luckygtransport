import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Row, Container, Col, Carousel } from 'react-bootstrap';
import About1 from '../media/about1.jpg';
import About2 from '../media/about2.jpg';
import '../styles/About.scss'

const About = () => {
    return (
        <div className='about'>
            <Header />
            <div className='aboutbanner'>
                <div className='bannerbg'>
                    <h1>
                        About Us
                    </h1>
                </div>
            </div>

            <div>
                <Container fluid='sm' className='mt-3'>
                    <Row className='p-3'>
                        <Col sm>
                            <img src={About1} className='aboutpic' />
                        </Col>

                        <Col sm>
                            <div className='text mt-sm-4 mx-sm-5'>
                                <p>
                                    <span className='h2'>Our Company</span>
                                </p>
                                <p>
                                    <b>LuckyG Transport</b> is a fresh transport company that provides top quality service for all types of clients. Although the company just started, its proprietors is not new to business, they have been in the industry for 10 years.
                                </p>
                            </div>                                
                            <div className='text m-sm-5'>
                                <p>
                                    <span className='h2'>Our Vision</span>
                                </p>
                                <p>
                                    To be the "Best" in the business while setting the standard in the industry, to provide only the best for our partners and clients. 
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='p-3'>
                        <Col sm>
                            <div className='text mx-sm-5'>
                                <p>
                                    <span className='h2'>Our Promise</span>
                                </p>
                                <p>
                                    To provide Transparent, Safe, Reliable, Best Prices and High Quality services to everyone.
                                </p>
                            </div> 
                            <div className='text m-sm-5'>
                                <p>
                                    <span className='h2'>Our Values</span>
                                </p>
                                <ul>
                                    <li>
                                        Transparency
                                    </li>
                                    <li>
                                        Integrity
                                    </li>
                                    <li>
                                        Accountability
                                    </li>
                                    <li>
                                        Passion
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col sm>
                            <img src={About2} className='aboutpic' />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            {/* <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=First slide&bg=373940"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Second slide&bg=282c34"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Third slide&bg=20232a"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> */}
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer/>
        </div>
    )
}

export default About