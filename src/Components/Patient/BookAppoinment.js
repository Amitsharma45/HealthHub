import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';    
export default function BookAppoinment() {
    return (
        <div>
            <h2 className='mt-2  text-center'>Patient Dashboard</h2>
            <div>
                <ul>
                    <li ><Link to='/book-appoinment' style={{ color: 'red' }}>Book Appoinment</Link></li>
                    <li><Link to='/view-appoinment'>View Appoinment</Link></li>
                    <li ><Link to='/patient-profile'> View Profile</Link></li>
                </ul>
            </div>
            <Container >

                <Table striped bordered hover size="sm" className='text-center '>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Dr. Name</th>
                            <th>Timing</th>
                            <th>Specialist</th>
                            <th>Book Appoinment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dr. Amit Sharma</td>
                            <td>10:00AM to 01:00PM</td>
                            <td>Dentist</td>
                            <td><Button size='sm'>Book Appoinment</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dr. Anil Verma</td>
                            <td>05:00PM to 09:00PM</td>
                            <td>Cardiologist</td>
                            <td><Button size='sm'>Book Appoinment</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >Dr. Arun Kumar</td>
                            <td >02:00PM to 07:00PM</td>
                            <td>Anesthesiologist</td>
                            <td><Button size='sm'>Book Appoinment</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>


        </div>
    )
}
