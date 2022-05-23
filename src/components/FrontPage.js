
import { Row, Container, Col, Form } from 'react-bootstrap';

import Promos from './Promos';
import Reviews from './Reviews';
import Pricing from './Pricing';
import '../styles/FrontPage.scss'


const FrontPage = () => {

    return (
        <div className='section'>
            <div className='banner'>

                <div className='bannerbg'>
                    <Container fluid='sm'>
                        <Form>
                            <Row className='m-3'>
                                <Col>
                                    <h1>RENT A CAR</h1>
                                </Col>
                            </Row>
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
                                    <input type='button' value='GET A QUOTE NOW' className='btn' />
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>

            </div>

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
            <Reviews />
            <Pricing />
        </div>

    )
}

export default FrontPage