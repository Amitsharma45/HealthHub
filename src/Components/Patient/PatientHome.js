import React from 'react'
import { Link } from 'react-router-dom'
import './PatientHome.css'
export default function PatientHome() {
    return (
        <>
            <h2 className='mt-2  text-center'>Patient Dashboard</h2>
            <div>
                <ul>
                    <li><Link to='/book-appointment'>Book appointment</Link></li>
                    <li><Link to='/view-appointment'>View appointment</Link></li>
                    <li><Link to='/patient-profile'> View Profile</Link></li>
                </ul>

            </div>
        </>
    )
}
