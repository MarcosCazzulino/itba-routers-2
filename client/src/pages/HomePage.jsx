import React from 'react';

function HomePage(){
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/users');
            if (!response.ok) {
                throw new Error('Error al cargar los usuarios');
            }
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        if (!window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/api/users/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el usuario');
            }

            // Actualizar la lista de usuarios después de eliminar
            setUsers(users.filter(user => user.id !== id));
            alert('Usuario eliminado exitosamente');
        } catch (err) {
            alert('Error al eliminar el usuario: ' + err.message);
        }
    };

    if (loading) {
        return (
            <div className="container">
                <h1>Bienvenido a la página de inicio</h1>
                <p>Cargando usuarios...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <h1>Bienvenido a la página de inicio</h1>
                <p>Error: {error}</p>
            </div>
        );
    }

    return(
        <div className="container">
            <h1>Bienvenido a la página de inicio</h1>
            <h2>Usuarios Registrados</h2>
            {users.length === 0 ? (
                <p>No hay usuarios registrados aún.</p>
            ) : (
                <div className="registrations-list">
                    {users.map((user) => (
                        <div key={user.id} className="registration-card">
                            <h3>{user.firstName} {user.lastName}</h3>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Teléfono:</strong> {user.phone}</p>
                            <p><strong>Ciudad:</strong> {user.city}</p>
                            <p><strong>Fecha de Nacimiento:</strong> {user.dateOfBirth}</p>
                            <p><strong>Género:</strong> {user.gender}</p>
                            <p><strong>Dirección:</strong> {user.address}</p>
                            <button
                                onClick={() => deleteUser(user.id)}
                                className="btn-danger"
                                style={{ marginTop: '10px' }}
                            >
                                Eliminar Usuario
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HomePage
