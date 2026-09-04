import { RouterProvider } from "react-router"
import router from "./app/routes/appRoutes"

const App = () => {
  return (
    <RouterProvider router = {router} />
  )
}

export default App

