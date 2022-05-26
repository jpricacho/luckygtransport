import { Row, Container, Col, Form, Carousel } from 'react-bootstrap';
import Promos from './Promos';
import Reviews from './Reviews';
import Pricing from './Pricing';
import ford from '../media/ford.png';
import honda from '../media/honda.png';
import hyundai from '../media/hyundai.png';
import isuzu from '../media/isuzu.png';
import kia from '../media/kia.png';
import mitsubishi from '../media/mitsubishi.png';
import nissan from '../media/nissan.png';
import toyota from '../media/toyota.png';
import '../styles/FrontPage.scss';
import Booking from './Booking';


const FrontPage = () => {

    return (
        <div className='section'>
            <div className='banner'>

                <div className='bannerbg'>
                    <Container fluid='sm'>
                        <Row className='m-3'>
                            <Col>
                                <h1>RENT A CAR</h1>
                            </Col>
                        </Row>
                        <Booking/>
                    </Container>
                </div>

            </div>

            <Carousel variant='dark' className='brands' controls={false}>
                <Carousel.Item>
                    <Container fluid='sm'>
                        <Row>
                            <div className='logos'>
                                <Col sm>
                                    <div className='image'>
                                        <img src={ford} />
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className='image'>
                                        <img src={honda} />
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className='image'>
                                        <img src={hyundai} />
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className='image'>
                                        <img src={isuzu} />
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container fluid='sm'>
                        <Row>
                            <div className='logos'>
                                <Col sm>
                                    <div className='image'>
                                        <img src={kia} />
                                    </div>
                                </Col>

                                <Col sm>
                                    <div className='image'>
                                        <img src={mitsubishi} />
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className='image'>
                                        <img src={nissan} />
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className='image'>
                                        <img src={toyota} />
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>

            <Promos />
            <Reviews />
            <Pricing />
        </div>

    )
}

export default FrontPage