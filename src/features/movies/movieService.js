import axios from "axios"

const API_URL = 'https://sore-pear-hermit-crab-ring.cyclic.cloud/movies/'

//añadir pelicula
const addMovie = async (movieData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, movieData, config)
    return response.data
}

//eliminar pelicula
const deleteMovie = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)
    return response.data
}

//obtener todas las peliculas (solo usuarios logueados)
const getMovies = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

//modificar likes de una pelicula
const updateLikes = async (likes, id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + id, likes, config)
    return response.data
}

const movieService = {
    addMovie,
    deleteMovie,
    getMovies,
    updateLikes
}

export default movieService