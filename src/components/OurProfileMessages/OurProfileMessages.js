import { useDispatch, useSelector } from "react-redux"
import { useMessages } from "../../contexts/MessageProvider"
import { OUR_PROFILE } from "../../helpers/constants"
import { setOurProfileRoute } from "../../redux/slices/ourProfileSlice"
import { userSelector } from "../../redux/slices/userSlice"
import classes from "../Messages/Messages.module.css"

const [, CHANGEUSER] = OUR_PROFILE

const OurProfileMessages = () => {
    const {messagesData, deletePost} = useMessages()
    const user = useSelector(userSelector)
    const dispatch = useDispatch()

  return (
    <div>
      <label>
        CHANGE USER
        <button onClick={() => dispatch(setOurProfileRoute(CHANGEUSER))}>  CHANGE USER</button>
      </label>

      {messagesData.map(({id, author, date, text}) => {
        if (user === author) {
          return (
            <div key={id} className={classes.messageItem}>
              <p>{author}</p>
              <p>{date}</p>
              <p>{text}</p>
              <p>{id}</p>
              {user === author && (
                <button onClick={() => deletePost(id)}>delete</button>
              )}
            </div>
          )
        }
      })}
    </div>
  )
}

export default OurProfileMessages
