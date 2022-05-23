import axios from "axios"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {AUTH_TABS} from "../../helpers/constants"
import classes from "./Login.module.css"
import {baseUrl} from "../../api/api"
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/userSlice"
import { setAuthRoute } from "../../redux/slices/authTabSlice"

const [, REGISTRATION] = AUTH_TABS

const Login = () => {
  const [isLoginFailed, setIsLoginFailed] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    axios.get(`${baseUrl}/users`)
     .then((res) => {
      const user = res.data.find(
        (item) => item.name === data.login && item.password === data.password
      )

      if (user) {
        if (data.save) {
          localStorage.setItem("user", data.login)
        } else {
          sessionStorage.setItem("user", data.login)
        }
        dispatch(setUser(data.login))
        navigate("../messages", {replace: true})
      } else {
        setIsLoginFailed(true)
        console.log("user is not found!")
      }
    })
  }

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <label className={classes.label}>
          LOGIN
          <input {...register("login", {required: true})} type="text" />
          <div>{errors?.login?.type}</div>
        </label>

        <label className={classes.label}>
          PASSWORD
          <input {...register("password", {required: true})} type="password" />
          <div>{errors?.password?.type}</div>
        </label>

        <label>
          <input type="checkbox" {...register("save")} />
          Remember me?
        </label>

        <button type="submit">log in</button>
      </form>

      {(isLoginFailed || errors.login || errors.password) && (
        <button onClick={() => dispatch(setAuthRoute(REGISTRATION))}>
          go to registration
        </button>
      )}
    </div>
  )
}

export default Login
