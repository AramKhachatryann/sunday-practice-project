import dayjs from "dayjs"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userSelector } from "../../redux/slices/userSlice"
import { axiosPostThunk } from "../../redux/thunks/axiosPostThunk"
import classes from "./PostCreator.module.css"

const PostCreator = () => {
  const user = useSelector(userSelector)
  const [areaText, setAreaText] = useState('')      
  const dispatch = useDispatch()

  const handlePostSending = (text) => {
     const date = Date.now()
     const formattedDate = dayjs(date).format('DD/MM/YYYY hh:mm')
    
     console.log(text);
    dispatch(axiosPostThunk({user, text, formattedDate}))
      setAreaText('')
  }

  const handleTextAdding = e => {
    setAreaText(e.target.value)
  }

  return (
    <div className={classes.newPost}>
      <p>Write Your Post!</p>
      <div className={classes.newPostInput}>
        <textarea 
        value={areaText}
        onChange={handleTextAdding}
        className={classes.newPostArea}
        />
      </div>
      <button onClick={() => handlePostSending(areaText)}>send Post</button>
    </div>
  )
}

export default PostCreator
