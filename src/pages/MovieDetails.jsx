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
    <div className="container h-100 d-flex flex-column justify-content-center text-center w-75 light-color-text">
      <div className="border-light">
        <h1>{movie.title}</h1>
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <img src={movie.poster_url} className="col-10 col-md-7 col-lg-5 col-xl-4 mb-3 mx-lg-2" alt="poster" />
          <div className="mx-lg-2">
              <h5 className="mb-3">Likes: {movie.likes}</h5>
              <p className="text-start">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
