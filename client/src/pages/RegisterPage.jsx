import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

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
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Registro de Usuario</h1>
            {/* Indicador de pasos */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                {steps.map((step, index) => (
                    <Link key={step.path} to={`${step.path}`} style={{ textAlign: 'center', flex: 1 }}> {/* ! Cambiamos div por <Link/> */}
                        <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: index <= currentStep ? '#007bff' : '#ccc',
                        color: 'white',
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