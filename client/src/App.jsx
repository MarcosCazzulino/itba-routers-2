import { Routes, Route, Link } from 'react-router-dom'; // ! Quitamos Browser Router
import HomePage from './pages/HomePage'; // ! Cambiamos componente Home por página HomePage
import RegisterPage from './pages/RegisterPage'; // ! Cambiamos componente Register por página RegisterPage
import PersonalInfo from './components/PersonalInfo'; // ! cambiamos la ruta (decía /register/personal...)
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
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />}/> {/* ! Error de cierre de etiqueta */}
        <Route path="/register/personal" element={<PersonalInfo />} /> {/* ! Cambio de rutas*/}
        <Route path="/register/contact" element={<ContactInfo />} />
        <Route path="/register/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App
