import { RouterProvider } from "react-router"
import appRouter from "./navigation/appRouter"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./api/tanstackConf"
import { SocketProvider } from "./context/SocketContext"
import { AuthProvider } from "./context/AuthContext"

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SocketProvider>
          <RouterProvider router={appRouter} />
        </SocketProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
