/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export default function DrLogin() {
    const [showPassword, setShowPassword] = React.useState(true);
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={8} className="d-flex justify-content-center align-items-center" style={{ margin: 'auto' }}>
                        <img src={'https://img.freepik.com/premium-vector/doctor-medical-center-cartoon_24877-2083.jpg?w=2000'} id='img'  />
                    </Col>
                    <Col md={4} className='px-5'>
                        <h3 className='mt-5 text-center'>Doctor Login</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input id="email"
                                name="email"
                                type="email"

                                className="form-control" placeholder="Enter email" />

                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <div className="input-group mb-3">
                                <input name="password" type={!showPassword ? 'text' : 'password'}
                                    id="password" className="form-control" placeholder="Enter password"
                                />
                                <span className="input-group-text" onClick={(e) => {  setShowPassword(!showPassword)}}>
                                    {showPassword
                                        ? <VisibilityOffIcon />
                                        : <VisibilityIcon />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="d-grid mt-2">
                            <button type="submit" className="btn btn-dark btn-md"
                            >Login</button>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className="forgot-password text-right mt-2">
                                <Link component={''} to="/doctor-register" style={{ textDecoration: 'none', marginLeft: '5px' }}>Create New Account ? Sign Up</Link>
                            </p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
