import { RouterProvider } from "react-router"
import appRouter from "./navigation"

function App() {

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
