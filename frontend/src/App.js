import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import AdminPanel from './components/AdminPanel';
import ApplicationForm from './components/ApplicationForm';
import './App.css';

function App() {
    const [isFormOpen, setFormOpen] = useState(false);

    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home openForm={openForm} />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
            <Footer />
            {isFormOpen && <ApplicationForm closeForm={closeForm} />}
        </Router>
    );
}

export default App;
