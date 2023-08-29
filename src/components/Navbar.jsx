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
      <nav>
        <div>
            <NavLink to='/'>Oura Movies</NavLink>
        </div>
        <ul>
            {user ? (
                <>
                    <li>
                        Hello, {user.name}
                    </li>
                    <li>
                        <button onClick={onLogout}>Logout</button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </li>
                </>
            )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
