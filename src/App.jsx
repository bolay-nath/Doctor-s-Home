import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Appointment from "./component/pages/appointment/Appointment"


function TotalComponent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/appointment' element={<Appointment />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default TotalComponent;