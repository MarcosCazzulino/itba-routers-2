import React, { useState, useEffect } from 'react';
import './EditUserModal.css';

const EditUserModal = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        city: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                dateOfBirth: user.dateOfBirth || '',
                gender: user.gender || '',
                email: user.email || '',
                phone: user.phone || '',
                address: user.address || '',
                city: user.city || ''
            });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(user.id, formData);
        onClose();
    };

    if (!user) return null;

    return (
        <div className="modal-overlay" role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <h3>Editar Usuario</h3>
                    <button onClick={onClose} aria-label="Cerrar">✕</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group full">
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Dirección</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Ciudad</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Fecha de Nacimiento</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Género</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Femenino</option>
                                    <option value="other">Otro</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="form-actions">
                    <button className="btn btn-cancel" onClick={onClose}>Cancelar</button>
                    <button className="btn btn-save" onClick={handleSubmit}>Guardar Cambios</button>
                </div>
            </div>
        </div>
    );
};

export default EditUserModal;
