import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getMovies, reset } from "../features/movies/movieSlice"
import Spinner from '../components/Spinner'
import MovieCard from "../components/MovieCard"

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { movies, isLoading, isError, message } = useSelector((state) => state.movie)
  const [ moviesLoading, setMoviesLoading ] = useState(true)

  const getAllMovies = async () => {
    await dispatch(getMovies())
    setMoviesLoading(false)
  }

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    } else {
      getAllMovies()
    }

    return ()=> {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])

  if(moviesLoading) {
    return <Spinner/>
  }


  return (
    <div className="container">
      <h1>Oura Movies</h1>
      <section>
        {movies.length > 0 ? (
          <div className="d-flex row">
            {movies.map((movie)=>(
              <MovieCard movie={movie} key={movie._id} />
            ))}
          </div>
        ) : (
          <h3>Oops! Looks like there are not movies, add one</h3>
        )}
      </section>
    </div>
  )
}

export default Home
