import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './components/Register';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="app">
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
        <Link to="/register">Registrarse</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/> {/* ! Error de cierre de etiqueta */}
        <Route path="personal" element={<PersonalInfo />} />
        <Route path="contact" element={<ContactInfo />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App
