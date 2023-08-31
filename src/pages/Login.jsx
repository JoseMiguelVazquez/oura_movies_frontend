import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(login(formData))
  }

  useEffect(() => {
    if(isError) {
        toast.error(message)
    }

    if(isSuccess || user) {
        navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, dispatch, navigate])

  if(isLoading) {
    return <Spinner />
  }


  return (
    <div className="container h-100 d-flex flex-column justify-content-center text-center align-items-center">
      <div className="border-light w-75">
        <section className="light-color-text my-2">
          <h1>Login</h1>
          <h4>Please input your credentials.</h4>
        </section>
        <section className="mb-4">
          <form onSubmit={onSubmit}>
            <div className="d-flex flex-column align-items-center">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Please write your email"
                onChange={onChange}
                className="form-control mb-3 w-75"
              />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                placeholder="Please write your password"
                onChange={onChange}
                className="form-control mb-3 w-75"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-secondary w-75">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Login
