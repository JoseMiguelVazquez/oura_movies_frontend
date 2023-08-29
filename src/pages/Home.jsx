import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getMovies, reset } from "../features/movies/movieSlice"
import Spinner from '../components/Spinner'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { movies, isLoading, isError, message } = useSelector((state) => state.movie)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    } else {
      dispatch(getMovies())
    }

    return ()=> {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner/>
  }


  return (
    <div className="container">
      <h1>Oura Movies</h1>
      <section>
        {movies.length > 0 ? (
          <div>
            {movies.map((movie)=>(
              //comienza el componente
              <div>
                <h2>{movie.title}</h2>
                <img src={movie.backdrop_url} alt="backdrop" />
              </div>
            ))}
          </div>
        ) : (
          <h3>There are not tasks for this user</h3>
        )}
      </section>
    </div>
  )
}

export default Home
