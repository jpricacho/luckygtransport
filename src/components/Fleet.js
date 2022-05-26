import React from 'react';
import Header from './Header';
import '../styles/Fleet.scss';
import Footer from './Footer';
import GroupA from '../media/wigo-02-white.jpeg';
import GroupB from '../media/honda city.jpeg';
import GroupC from '../media/hyundaiaccent.png';
import GroupD from '../media/Hondacivic.jpeg';
import GroupE from '../media/isuzu-mux.jpeg';
import GroupF from '../media/Nissan.jpeg';
import { Row, Container, Col, Button } from 'react-bootstrap';

const Fleet = () => {
  return (
    <div className='fleet'>
      <Header />
      <div className='fleetbanner'>
        <div className='bannerbg'>
          <h1>
            Our Fleet
          </h1>
        </div>
      </div>

      <div>
        <Container fluid='sm'>
          <Row className='area'>
            <Col sm>
              <div className='fleetphoto'>
                <img src={GroupA} />
              </div>
            </Col>

            <Col sm>
              <Container className='p-4'>
                <div className='content'>
                  <Row>
                    <Col>
                      <h1>Group A - Hatchback A/T </h1>
                      <p>Price from:  ₱ 1,450</p>
                    </Col>
                    <Col>
                      <div className='btn'>
                        <Button className='button'>BOOK NOW</Button>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <ul>
                        <li>Electric windows</li>
                        <li>USB port</li>
                        <li>Electric door lock</li>
                      </ul>
                    </Col>

                    <Col>
                      <ul>
                        <li>Audio System</li>
                        <li>Driver's Airbag</li>
                        <li>Fuel Type-Gasoline</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Group A cars are small economy car with extremely low fuel consumption. If you want to save fuel and convinient parking, choose this group car rental.
                        Our cars on this category are Mitsubishi Mirage, Toyota Wigo and Honda Brio</p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>

          <Row className='area'>
            <Col sm>
              <div className='fleetphoto'>
                <img src={GroupB} />
              </div>
            </Col>

            <Col sm>
              <Container className='p-4'>
                <div className='content'>
                  <Row>
                    <Col>
                      <h1>Group B - Sedan M/T </h1>
                      <p>Price from:  ₱ 1,650</p>
                    </Col>
                    <Col>
                      <div className='btn'>
                        <Button className='button'>BOOK NOW</Button>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <ul>
                        <li>Electric windows</li>
                        <li>USB port</li>
                        <li>Electric door lock</li>
                        <li>Passenger Air Bag</li>
                      </ul>
                    </Col>

                    <Col>
                      <ul>
                        <li>Audio System</li>
                        <li>Driver's Airbag</li>
                        <li>Fuel Type-Gasoline</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Group B cars are sedans and are a little bigger than our group A models.
                        Choose this group car rental if you want to have a great fuel saving with sufficient space for 5 persons.
                        Our cars on this category are Toyota Vios and Honda City</p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>

          <Row className='area'>
            <Col sm>
              <div className='fleetphoto'>
                <img src={GroupC} />
              </div>
            </Col>

            <Col sm>
              <Container className='p-4'>
                <div className='content'>
                  <Row>
                    <Col>
                      <h1>Group C - Sedan A/T </h1>
                      <p>Price from:  ₱ 2,000</p>
                    </Col>
                    <Col>
                      <div className='btn'>
                        <Button className='button'>BOOK NOW</Button>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <ul>
                        <li>Electric windows</li>
                        <li>USB port</li>
                        <li>Electric door lock</li>
                        <li>Passenger Air Bag</li>
                      </ul>
                    </Col>

                    <Col>
                      <ul>
                        <li>Audio System</li>
                        <li>Driver's Airbag</li>
                        <li>Fuel Type-Gasoline</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Group C cars are A/T sedans and are at the same size as our group B models.
                        Choose this group car rental if you want to have a comfortable driving of A/T sedan with sufficient space for 5 persons.
                        Our cars on this category are Toyota Vios, Hyudai Accent and Honda City</p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>

          <Row className='area'>
            <Col sm>
              <div className='fleetphoto'>
                <img src={GroupD} />
              </div>
            </Col>

            <Col sm>
              <Container className='p-4'>
                <div className='content'>
                  <Row>
                    <Col>
                      <h1>Group D - Premium sedan A/T </h1>
                      <p>Price from:  ₱ 2,350</p>
                    </Col>
                    <Col>
                      <div className='btn'>
                        <Button className='button'>BOOK NOW</Button>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <ul>
                        <li>Cruise control</li>
                        <li>USB port</li>
                        <li>Electric door lock</li>
                        <li>Passenger Air Bag</li>
                      </ul>
                    </Col>

                    <Col>
                      <ul>
                        <li>Electric windows</li>
                        <li>Driver's Airbag</li>
                        <li>Fuel Type-Gasoline</li>
                        <li>Crash Sensor</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Group D cars are A/T premium sedans.
                        Choose this group car rental if you want to have a comfortable driving of A/T luxury/manager style sedan with sufficient space for 5 persons.
                        Our car on this category is Honda Civic A/T.</p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>

          <Row className='area'>
            <Col sm>
              <div className='fleetphoto'>
                <img src={GroupF} />
              </div>
            </Col>

            <Col sm>
              <Container className='p-4'>
                <div className='content'>
                  <Row>
                    <Col>
                      <h1>Group E - AUV: 7 seater M/T </h1>
                      <p>Price from:  ₱ 2,650</p>
                    </Col>
                    <Col>
                      <div className='btn'>
                        <Button className='button'>BOOK NOW</Button>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <ul>
                        <li>Electric windows</li>
                        <li>USB port</li>
                        <li>Electric door lock</li>
                        <li>Fuel Type-Gasoline or Diesel</li>
                      </ul>
                    </Col>

                    <Col>
                      <ul>
                        <li>Audio System</li>
                        <li>Driver's Airbag</li>
                        <li>Passenger Air Bag</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Group E cars are AUVs and are very comfortable and spacious
                        Choose this group car rental if you want to have a great fuel saving with sufficient space for 7 persons including the driver.
                        Our cars on this category are KIA Kicks M/T</p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>

          <Row className='area'>
            <Col sm>
              <div className='fleetphoto'>
                <img src={GroupE} />
              </div>
            </Col>

            <Col sm>
              <Container className='p-4'>
                <div className='content'>
                  <Row>
                    <Col>
                      <h1>Group F - SUV: 7 seater A/T </h1>
                      <p>Price from:  ₱ 2,950</p>
                    </Col>
                    <Col>
                      <div className='btn'>
                        <Button className='button'>BOOK NOW</Button>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <ul>
                        <li>ABS</li>
                        <li>Audio System</li>
                        <li>Driver's Airbag</li>
                        <li>Passenger Airbag</li>
                      </ul>
                    </Col>

                    <Col>
                      <ul>
                        <li>Electric windows</li>
                        <li>USB port</li>
                        <li>Electric door lock</li>
                        <li>Fuel Type - Diesel</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Group F cars are SUVs and are very comfortable and spacious
                        Choose this group car rental if you want to have a comfortable driving experience with a sufficient space for 7 persons including the driver.
                        Our cars on this category are Isuzu MU-X A/T</p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default Fleet