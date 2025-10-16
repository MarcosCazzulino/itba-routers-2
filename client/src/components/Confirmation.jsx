import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

const Confirmation = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [registrationData] = React.useState(() => JSON.parse(localStorage.getItem('registrationData') || '{}'));

    const crearUser = (user) => {
        setUsers([...users, user])
    }

    const handleConfirm = async () => {
        try{
            const response = await fetch('http://localhost:4000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: registrationData.firstName,
                    lastName: registrationData.lastName,
                    dateOfBirth: registrationData.dateOfBirth,
                    gender: registrationData.gender,
                    email: registrationData.email,
                    phone: registrationData.phone,
                    address: registrationData.address,
                    city: registrationData.city
                })
            })

            if (!response.ok) {
                throw new Error('Algo salió mal')
            }

            const data = await response.json()
            crearUser(data.user)

            alert('¡Registro completado exitosamente!');
            localStorage.removeItem('registrationData'); // Limpiar datos
            navigate('/');

        } catch (error){
            console.error(error)
        }
    };

    return (
        <div className='confirmationPage'>
            <h2>Confirmación de Registro</h2>
            <p>Por favor revisa tus datos antes de confirmar:</p>
            <div className="registration-card">
                <h3>Información Personal</h3>
                <p><strong>Nombre:</strong> {registrationData.firstName} {registrationData.lastName}</p>
                <p><strong>Fecha de Nacimiento:</strong> {registrationData.dateOfBirth}</p>
                <p><strong>Género:</strong> {registrationData.gender}</p>
                <h3>Información de Contacto</h3>
                <p><strong>Email:</strong> {registrationData.email}</p>
                <p><strong>Teléfono:</strong> {registrationData.phone}</p>
                <p><strong>Dirección:</strong> {registrationData.address}</p>
                <p><strong>Ciudad:</strong> {registrationData.city}</p>
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    onClick={() => navigate('/register/contact')}
                    className="btn-back"
                    > Anterior
                </button>
                <button
                    type="button"
                    onClick={handleConfirm}
                    className="btn-success"
                    >Confirmar Registro
                </button>
                <Link to="/">
                    <button type="button" className="btn-cancel">Cancelar</button>
                </Link>
            </div>
        </div>
    );
};

export default Confirmation;