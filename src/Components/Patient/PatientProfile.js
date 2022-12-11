import React from 'react'
import './PatientHome.css'
import { Link } from 'react-router-dom'
export default function PatientProfile() {
    return (
        <>
            <h2 className='mt-2  text-center'>Patient Dashboard</h2>
            <div>
                <ul>
                    <li><Link to='/book-appointment'>Book appointment</Link></li>
                    <li><Link to='/view-appointment'>View appointment</Link></li>
                    <li ><Link style={{ color: 'red' }} to='/patient-profile'> View Profile</Link></li>
                </ul>
            </div>
            <div className='container'>
                <p className='my-2'>Name: Amit Sharma</p>
                <p className='my-2'>Mobile No: 9634870380</p>
                <p className='my-2'>Age: 22</p>
                <p className='my-2'>Email: sharma.amit20111@gmail.com</p>
                <p className='my-2'>City: Aligarh</p>
            </div>
        </>
    )
}
