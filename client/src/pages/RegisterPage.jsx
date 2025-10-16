import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import '../App.css'

const Register = () => {
    const location = useLocation();
    const steps = [
        { path: 'personal', label: 'Información Personal' },
        { path: 'contact', label: 'Información de Contacto' },
        { path: 'confirmation', label: 'Confirmación' }
    ];

    let currentStep = steps.findIndex(step => // ! Cambiamos const por let para modificar el valor
        location.pathname.includes(step.path)
    );

    if (currentStep === -1){ // ! Si no encuentra ninguna ruta, forzamos a activar el primer paso
        currentStep = 0;
    }

    return (
        <div className='container-register'>
            <h1>Registro de Usuario</h1>
            {/* Indicador de pasos */}
            <div>
                {steps.map((step, index) => (
                    <Link key={step.path} to={`${step.path}`} style={{ textAlign: 'center', flex: 1 }}> {/* ! Cambiamos div por <Link/> */}
                        <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: index <= currentStep ? '#eec' : '#555',
                        color: 'black',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 10px'
                        }}
                        >
                            {index + 1}
                        </div>
                        <span style={{ fontSize: '12px' }}>{step.label}</span>
                    </Link>
                ))}
            </div>
            {/* Formulario actual */}
            <Outlet />
        </div>
    );
};

export default Register;