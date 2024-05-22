const express = require('express')
const logger = require('morgan')
const PORT = 5005

const app = express()

app.use(logger('dev'))

// Route params
// http://localhost:5005/api/movies/756
app.get('/api/movies/:movieId', (req, res) => {
    const { movieId } = req.params
    res.send(`Debes buscar la peli con ID ${movieId}`)          // Debes buscar la peli con ID 756
})


// Search params (query strings)
// http://localhost:5005/api/movies?from_year=1995&to_year=2005&genre=Fantasy
app.get('/api/movies', (req, res) => {
    const { from_year, to_year, genre } = req.query
    // res.send(`Debes buscar pelis del ${from_year} al ${to_year} del rollo ${genre}`)      
    // Debes buscar pelis del 1995 al 2005 del rollo Fantasy
    res.json(req.headers)
})



app.listen(PORT, () => {
    console.log('Servidor levantado')
})