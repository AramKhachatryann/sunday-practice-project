import {NavLink} from "react-router-dom"
import classes from "./Header.module.css"
import {LINKS} from "../../helpers/constants"
import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { removeUser, userSelector } from "../../redux/slices/userSlice"

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  // mer uzac state stanum enq mer grac selectori mijocov
  //dispatch-ov dimum enq tvyal slice-i reducer-in
  

  const logOut = () => {
    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
    dispatch(removeUser())
  }


  return (
    <header className={classes.header}>
      <ul className={classes.ul}>
        {LINKS.map((link) => {
          if (link.title === "Auth" && user) {
              return null
           }
          else if(link.title === "OurProfile" && !user){
            return null
          }
          else {
            return (
              <li key={link.id}>
                <NavLink
                  className={({isActive}) =>
                    classNames(classes.link, {
                      [classes.active]: isActive,
                    })
                  }
                  to={link.to}
                >
                  {link.title}
                </NavLink>
              </li>
            )
          }
        })}
      </ul>
      {user && (
        <div className={classes.headerInfo}>
          <div className={classes.logo}>{user}</div>
          <button className={classes.link} onClick={logOut}>
            Log out
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
