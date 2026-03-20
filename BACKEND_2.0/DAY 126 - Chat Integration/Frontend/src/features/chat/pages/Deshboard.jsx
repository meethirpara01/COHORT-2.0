import { useSelector } from "react-redux"
import { useChat } from "../hook/useChat";
import { useEffect } from "react";

const Deshboard = () => {

  const chat = useChat()

  const user = useSelector((state) => state.auth.user)

  console.log(user);

  useEffect(() => {
    chat.initializeSocketConnection()
  }, [])
  
  return (
    <div>Deshboard</div>
  )
}

export default Deshboard