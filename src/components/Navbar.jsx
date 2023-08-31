import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

  return (
    <>
      <nav className='navbar navbar-expand-sm bg-body-tertiary position-absolute top-0 w-100 dark-color-text'>
        <div className='container-fluid'>
            <NavLink to='/' className='navbar-brand'>Oura Movies</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className='navbar-nav'>
                    {user ? (
                        <div className='d-flex flex-column align-items-sm-center flex-sm-row'>
                            <li>
                                <NavLink to='/newMovie' className='nav-link'>Add Movie</NavLink>
                            </li>
                            <li className='nav-item'>
                                <button onClick={onLogout} className='nav-link'>Logout</button>
                            </li>
                            <div className='d-flex align-items-center position-absolute end-0 me-3 mt-3 mt-sm-0'>
                                <p className='nav-item m-0'>
                                    Hello, {user.name}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <li className='nav-item'>
                                <NavLink to='/login' className='nav-link'>Login</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/signup' className='nav-link'>Sign Up</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
