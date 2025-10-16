const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const cors = require('cors')
const logger = require('./logger')
const usersRoute = require('./routes/usersRoute')

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(logger)

app.use('/api/users', usersRoute)

app.get('/', (req, res) => {
    res.send('Esta es la API de usuarios de nuestra actividad')
})

app.use((req, res, next) => {
    const error = new Error(`Ruta no encontrada: ${req.originalUrl}`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    const statusCode = err.status || 500

    console.error(err.message, err.stack)

    res.status(statusCode).json({
        message: err.message || 'Error inesperado',
        stack: process.env.NODE_ENV === 'production' ? '.' : err.stack
    })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})