import axios from "axios"
import {createContext, useContext, useEffect, useState} from "react"
import {baseUrl} from "../api/api"

const MessageContext = createContext()

const MessageProvider = ({children}) => {
  const [messagesData, setMessagesData] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/messages`)
  //     .then((res) => setMessagesData(res.data))
  //     .catch((e) => console.log("error", e))
  // }, [])

  const addPost = (author, text, date = "16/05/2022") => {
    const id = "id" + new Date().getTime()
    const obj = {id, author, date, text}

    axios
      .post(`${baseUrl}/messages`, obj)
      .then(() => {
        setMessagesData((prev) => [obj, ...prev])
      })
      .catch((e) => console.log("oops", e))
  }

  // const deletePost = (id) => {
  //   axios
  //     .delete(`${baseUrl}/messages/${id}`)
  //     .then(() => {
  //         const fileredData = messagesData.filter(item => item.id !== id)
  //         setMessagesData(fileredData)
  //     }) 
  //     .catch((e) => console.log("oops", e))
  // }

  return (
    <MessageContext.Provider
      value={{messagesData, setMessagesData, addPost}}
    >
      {children}
    </MessageContext.Provider>
  )
}

export const useMessages = () => useContext(MessageContext)

export default MessageProvider
