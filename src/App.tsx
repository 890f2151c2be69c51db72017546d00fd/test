import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoadExchangeRates } from './components/LoadExchangeRates/LoadExchangeRates'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadExchangeRates />
    </QueryClientProvider>
  )
}
