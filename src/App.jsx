import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { WalletProvider } from '@/services/useWallet'
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
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <WalletProvider>
            <AppRouter />
          </WalletProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
