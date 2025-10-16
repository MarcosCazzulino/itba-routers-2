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

module.exports = route