import { useDispatch } from "react-redux"
import { updateLikes } from "../features/movies/movieSlice"


const MovieCard = ({movie}) => {
  const dispatch = useDispatch()

  const onLike = () => {
    const updatedLikes = movie.likes + 1
    dispatch(updateLikes({likes: {likes: updatedLikes}, id: movie._id}))
  }

  return (
    <div className="card col-3" style={{'width': '18rem'}}>
        <img src={movie.backdrop_url} className="card-img-top" alt="backdrop" />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <button className="btn btn-primary" onClick={onLike}>Like: {movie.likes}</button>
            </div>
    </div>
  )
}

export default MovieCard
