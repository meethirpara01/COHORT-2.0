import { RouterProvider } from "react-router"
import { router } from "./routes/app.routes"
import { useAuth } from "../features/auth/hook/useAuth"
import { useEffect } from "react"
import { useSelector } from "react-redux"


const App = () => {

  const { handleGetMe } = useAuth()

  const user = useSelector(state => state.auth.user)

  useEffect(() => {
    handleGetMe()
    console.log(user);
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App