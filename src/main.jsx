import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/navbarComponent/navbar.jsx";
import Legends from "./Legends.jsx";
import Footer from "./Components/footerComponent/Footer.jsx";
import Facts from "./Facts.jsx";


createRoot(document.getElementById('root')).render(
    <Router>
        <div className="container" data-bs-theme="dark">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/legends" element={<Legends/>} />
                <Route path={"/facts"} element={<Facts/>}></Route>

            </Routes>
            <Footer />
        </div>

    </Router>

)


