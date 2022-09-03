const express = require('express')
const movie_routes = express.Router()

/*Crear una nueva pelicula */
movie_routes.post('/movie', (req,res)=>{})
/*Listar todas las peliculas existentes */
movie_routes.get('/movies', (req,res)=>{})
/*Consultar una pelicula en específico */
movie_routes.get('/movies/:idMovie', (req,res)=>{}
/*Actualizar una pelicula en específico */)
movie_routes.put('/movies/:idMovie', (req,res)=>{})
/*Eliminar una pelicula en específico */
movie_routes.delete('/movies/:idMovie', (req,res)=>{})

module.exports = movie_routes