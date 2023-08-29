import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from '../features/auth/authSlice'

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
    return <h1>Loading</h1>
  }


  return (
    <>
      <section>
        <h4>Login</h4>
        <p>Please input your credentials.</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Please write your email"
              onChange={onChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Please write your password"
              onChange={onChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
