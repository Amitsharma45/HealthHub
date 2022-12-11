import React from 'react'
import './PatientHome.css'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
export default function PatientAppoinment() {
    return (
        <>
            <h2 className='mt-2  text-center'>Patient Dashboard</h2>
            <div>
                <ul>
                    <li><Link to='/book-appoinment'>Book Appoinment</Link></li>
                    <li > <Link to='/view-appoinment' style={{ color: 'red' }}>View Appoinment</Link></li>
                    <li ><Link to='/patient-profile'> View Profile</Link></li>
                </ul>
            </div>
            <Container >


                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Doctor</th>
                            <th>Appoinment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Amit Sharma</td>
                            <td>Dr. Arun Kumar</td>
                            <td>29/10/2022</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Amit Sharma</td>
                            <td>Dr. Anil Verma</td>
                            <td>11/10/2022</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >Amit Sharma</td>
                            <td >Dr. Arun Kumar</td>
                            <td>30/09/2022</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

        </>
    )
}
