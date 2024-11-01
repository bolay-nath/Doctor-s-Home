import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Appointment from "./component/pages/appointment/Appointment"
import LogIn from './component/pages/loginpage/LogIn';
import AppointmentHistory from './component/pages/appointmentHistroy/AppointmentHistory';
import DashBoard from './component/pages/DashBoard/DashBoard';
import AddDoctor from './component/pages/addDoctor/AddDoctor';
import { AuthProvider, PrivateRoute } from './component/pages/loginpage/AuthProvider';


function TotalComponent() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/appointment' element={<Appointment />} />
                    <Route path='/login' element={<LogIn />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<DashBoard />} />
                    </Route>
                    <Route path='/appointmentHistory' element={<AppointmentHistory />} />
                    <Route path='/addDoctor' element={<AddDoctor />} />

                </Routes>
            </BrowserRouter>

        </AuthProvider>
    );
}

export default TotalComponent;