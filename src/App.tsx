import { RouterProvider } from "react-router"
import appRouter from "./navigation/appRouter"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./api/tanstackConf"

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />
    </QueryClientProvider>
  )
}

export default App
