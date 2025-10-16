const express = require('express')
const route = express()

let contadorId = 1
let users = []

route.get('/', (req, res) => {
    res.json(users)
})

route.post('/', (req, res) => {
    const {firstName, lastName, dateOfBirth, gender, email, phone, address, city} = req.body

    if (!firstName || !lastName || !dateOfBirth || !gender || !email || !phone || !address || !city){
        return res.status(400).json({error: 'Faltan campos requeridos'})
    }

    const nuevoUsuario = {
        id: contadorId++,
        firstName,
        lastName,
        dateOfBirth,
        gender,
        email,
        phone,
        address,
        city
    }

    users.push(nuevoUsuario)

    console.log('Usuario creado correctamente: ', nuevoUsuario)
    res.status(201).json({
        mensaje: 'Usuario creado con éxito',
        user: nuevoUsuario
    })
})

route.put('/:id', (req, res) => {
    const { id } = req.params
    const userIndex = users.findIndex(user => user.id === parseInt(id))

    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    const {firstName, lastName, dateOfBirth, gender, email, phone, address, city} = req.body

    if (!firstName || !lastName || !dateOfBirth || !gender || !email || !phone || !address || !city){
        return res.status(400).json({error: 'Faltan campos requeridos'})
    }

    users[userIndex] = {
        id: parseInt(id),
        firstName,
        lastName,
        dateOfBirth,
        gender,
        email,
        phone,
        address,
        city
    }

    console.log('Usuario actualizado: ', users[userIndex])
    res.json({
        mensaje: 'Usuario actualizado con éxito',
        user: users[userIndex]
    })
})

route.delete('/:id', (req, res) => {
    const { id } = req.params
    const userIndex = users.findIndex(user => user.id === parseInt(id))

    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    const deletedUser = users.splice(userIndex, 1)[0]
    console.log('Usuario eliminado: ', deletedUser)
    res.json({
        mensaje: 'Usuario eliminado con éxito',
        user: deletedUser
    })
})

module.exports = route
