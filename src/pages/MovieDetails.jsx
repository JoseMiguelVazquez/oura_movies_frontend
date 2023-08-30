import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getOneMovie, reset } from "../features/movies/movieSlice"
import Spinner from '../components/Spinner'
import { useSelector, useDispatch } from "react-redux"

const MovieDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { movie, isLoading } = useSelector((state) => state.movie)

  useEffect(() => {
    dispatch(getOneMovie(id))

    return ()=> {
      dispatch(reset())
    }

  }, [])

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <div className="d-flex align-items-center">
        <img src={movie.poster_url} className="col-6" alt="poster" />
        <div>
            <h4>Release Date: {movie.release_date}</h4>
            <h5>Likes: {movie.likes}</h5>
            <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
