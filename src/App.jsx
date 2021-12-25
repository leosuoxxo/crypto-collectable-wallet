import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppRouter } from './router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
