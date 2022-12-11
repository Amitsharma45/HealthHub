import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap/';
import Card from 'react-bootstrap/Card';
import img1 from './Img/1.jpg'
import img2 from './Img/2.jpg'
import img3 from './Img/3.jpg'
import img4 from './Img/4.jpg'
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div >
            <Container>
                <Row className='mt-2 '>
                    <Col xs={12} md={6} className='mt-2'>
                        <Link to='/patient-login'>
                            <Button style={{ width: '100%', fontSize: '20px' }} variant="primary">Register/Login as Patient</Button>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} className='mt-2'>
                        <Link to='/doctor-login'>
                            <Button style={{ width: '100%', fontSize: '20px' }} variant="primary">Register/Login as Doctor</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className=''>
                    <Col md={6} xs={6} lg={3} className='mt-5 d-flex justify-content-center '>
                        <Card className='card' >
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Lab Test</Card.Title>
                                <Card.Text>
                                    Confirmend appointments
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col md={6} xs={6} lg={3} className='mt-5 d-flex justify-content-center'>
                        <Card className='card'>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Surgeries</Card.Title>
                                <Card.Text>
                                    Sample pickup at your home.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xs={6} lg={3} className='mt-5 d-flex justify-content-center '>
                        <Card className='card'>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Find Doctor Near You</Card.Title>
                                <Card.Text>
                                    Essentails at your doorsteps
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xs={6} lg={3} className='mt-5 d-flex justify-content-center '>
                        <Card className='card'>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Medicines</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>

                </Row>
                <Row id='about'>
                    <h1 className='mt-5 text-center'>About Us</h1>
                    <div>
                        Health Hub is the largest multi-channel digital healthcare platform in India, created with a vision of eliminating flexibility blockages from the healthcare industry. We believe in making healthcare affordable to everyone by combining analytic excellence, affordable cost, and extensive research with advanced technology. Health Hub 24|7 is a single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home. We also provide expert solutions for chronic conditions and COVID-care with a secured digital vault, where you can safely upload all your medical reports.
                    </div>
                    <h6>Make the best decision for your health by choosing Apollo 24|7. Here’s why you can count on us:</h6>
                    <ul >
                        <li >2 years of legacy in the healthcare industry</li>
                        <li>24x7 availability of doctors</li>
                        <li>More than 3.5 million diagnostic tests each year</li>
                        <li>700+ collection centres and 100+ laboratories</li>
                        <li>High quality and affordable diagnostic solutions </li>
                        <li>everal medical specialties under one roof</li>
                    </ul>
                </Row>
            </Container>
        </div >
    )
}
