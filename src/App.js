import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Footer from './Components/Footer';
import Register from './Components/Patient/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Patient/Login';
import DrLogin from './Components/Doctor/DrLogin';
import DrRegister from './Components/Doctor/DrRegister';
import PatientHome from './Components/Patient/PatientHome';
import PatientProfile from './Components/Patient/PatientProfile';
import BookAppoinment from './Components/Patient/BookAppoinment';
import PatientAppoinment from './Components/Patient/PatientAppoinment';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<>
          <Banner />
          <About />
        </>} />
        <Route path='/patient-login' element={<Login />} />
        <Route path='/patient-Register' element={<Register />} />
        <Route path='/doctor-login' element={<DrLogin />} />
        <Route path='/doctor-Register' element={<DrRegister />} />
        <Route path='/patient-Home' element={<PatientHome />} />
        <Route path='/patient-profile' element={<PatientProfile />} />
        <Route path='/book-appoinment' element={<BookAppoinment />} />
        <Route path='/view-appoinment' element={<PatientAppoinment />} />
        
      </Routes>
      <Footer />

    </>
  );
}

export default App;
