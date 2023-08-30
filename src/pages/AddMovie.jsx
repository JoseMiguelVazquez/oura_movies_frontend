import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addMovie } from "../features/movies/movieSlice"

const AddMovie = () => {
    const initialMovieData = {
        title: '',
        overview: '',
        backdrop_url: '',
        poster_url: '',
        release_date: ''
    }
    const [movieData, setMovieData] = useState(initialMovieData)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (e) => {
        setMovieData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addMovie(movieData))
        setMovieData(initialMovieData)
        navigate('/')
    }

    return (
        <div className="container">
          <section>
            <h1>Add a New Movie</h1>
            <h4>Please input the movie information.</h4>
          </section>
          <section>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={movieData.title}
                  placeholder="Movie title"
                  onChange={onChange}
                  className="form-control mb-3"
                  required
                />
                <label htmlFor="overview" className="form-label">Overview</label>
                <textarea
                  type="text"
                  id="overview"
                  name="overview"
                  value={movieData.overview}
                  placeholder="Movie overview"
                  onChange={onChange}
                  className="form-control mb-3"
                  required
                />
                <label htmlFor="backdrop_url" className="form-label">Backdrop URL</label>
                <input
                  type="text"
                  id="backdrop_url"
                  name="backdrop_url"
                  value={movieData.backdrop_url}
                  placeholder="Movie backdrop URL image"
                  onChange={onChange}
                  className="form-control mb-3"
                  required
                />
                <label htmlFor="poster_url" className="form-label">Poster URL</label>
                <input
                  type="text"
                  id="poster_url"
                  name="poster_url"
                  value={movieData.poster_url}
                  placeholder="Movie poster URL image"
                  onChange={onChange}
                  className="form-control mb-3"
                  required
                />
                <label htmlFor="release_date" className="form-label">Release Date</label>
                <input
                  type="text"
                  id="release_date"
                  name="release_date"
                  value={movieData.release_date}
                  placeholder="YYYY-MM-DD"
                  onChange={onChange}
                  className="form-control mb-3"
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn btn-secondary">Submit</button>
              </div>
            </form>
          </section>
        </div>
      )
}

export default AddMovie
