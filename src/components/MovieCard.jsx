import { useDispatch } from "react-redux"
import { updateLikes, deleteMovie } from "../features/movies/movieSlice"
import { Link } from "react-router-dom"


const MovieCard = ({movie}) => {
  const dispatch = useDispatch()

  const onLike = () => {
    const updatedLikes = movie.likes + 1
    dispatch(updateLikes({likes: {likes: updatedLikes}, id: movie._id}))
  }

  return (
    <div className="card col-3 m-2 bg-body-tertiary dark-color-text" style={{'width': '18rem'}}>
      <Link to={`/movies/${movie._id}`} className="d-flex justify-content-center align-items-center">
        <img src={movie.backdrop_url} className="card-img-top m-1" alt="backdrop" />
      </Link>
      <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          {/* <p className="card-text">{movie.overview}</p> */}
          <div>
            <button className="btn btn-primary mx-2" onClick={onLike}>Like: {movie.likes}</button>
            <button className="btn btn-danger mx-2" onClick={() => dispatch(deleteMovie(movie._id))}>Delete</button>
          </div>
      </div>
    </div>
  )
}

export default MovieCard
