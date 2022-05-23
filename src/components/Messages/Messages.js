import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { messageDataSelector } from "../../redux/slices/messageSlice"
import { userSelector } from "../../redux/slices/userSlice"
import { axiosDeleteThunk } from "../../redux/thunks/axiosDeleteThunk"
import { axiosGetThunk } from "../../redux/thunks/axiosGetThunk"
import PostCreator from "../PostCreator/PostCreator"
import classes from "./Messages.module.css"

const Messages = () => {
  const user = useSelector(userSelector)
  const messageData = useSelector(messageDataSelector)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(axiosGetThunk())
  }, [])

  return (
    <main>
      {
        user && <PostCreator />
      }
      
      {messageData.map(({id, author, date, text}) => {
        console.log('zzzzzz', id, author, date, text)
        return (
          <div key={id} className={classes.messageItem}>
            <p>{author}</p>
            <p>{date}</p>
            <p>{text}</p>
            <p>{id}</p>
            {
              user === author && <button onClick={() => dispatch(axiosDeleteThunk({id}))}>delete</button>
            }
          </div>
        )
      })}
    </main>
  )
}

export default Messages
