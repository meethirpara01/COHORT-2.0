import { AuthProvider } from "./features/auth/auth.context"
import AppRoutes from "./routes/AppRoutes.jsx"
import "./style.scss"

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App