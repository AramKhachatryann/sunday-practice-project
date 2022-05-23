import axios from "axios"
import {useState} from "react"
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux"
import {baseUrl} from "../../api/api"
import {AUTH_TABS} from "../../helpers/constants"
import { setAuthRoute } from "../../redux/slices/authTabSlice"
import classes from "./Register.module.css"

const [LOGIN] = AUTH_TABS

const Register = () => {
  const [isRegisterSucceed, setIsRegisterSucceed] = useState(false)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()



  const onSubmit = (data) => {
    if (data.password === data.rePassword) {
      const user = {name: data.login, password: data.password}
      axios.post(`${baseUrl}/users`, user).then(() => {
        setIsRegisterSucceed(true)
        setTimeout(() => {
          dispatch(setAuthRoute(LOGIN))
        }, 2000)
      })
    } else {
      console.log("Passwords are not the same!")
    }
  }


  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <label className={classes.label}>
          LOGIN
          <input
            {...register("login", {
              required: true,
              minLength: 4,
            })}
            type="text"
          />
          <div>{errors?.login?.type}</div>
        </label>

        <label className={classes.label}>
          PASSWORD
          <input
            {...register("password", {
              required: true,
              minLength: 4,
            })}
            type="password"
          />
          <div>{errors?.password?.type}</div>
        </label>

        <label className={classes.label}>
          RESET PASSWORD
          <input
            {...register("rePassword", {required: true})}
            type="password"
          />
          <div>{errors?.rePassword?.type}</div>
        </label>
        <button type="submit">register</button>
      </form>
      <button onClick={() => dispatch(setAuthRoute(LOGIN))}>go to Login</button>
      {isRegisterSucceed && <p>Registration succeed!</p>}
    </div>
  )
}

export default Register
