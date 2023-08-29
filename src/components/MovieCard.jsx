const MovieCard = ({movie}) => {
  return (
    <div className="card col-3" style={{'width': '18rem'}}>
        <img src={movie.backdrop_url} className="card-img-top" alt="backdrop" />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <button className="btn btn-primary" onClick={()=>console.log('like')}>Like</button>
            </div>
    </div>
  )
}

export default MovieCard
