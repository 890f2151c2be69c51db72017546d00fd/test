import { useQuery } from '@tanstack/react-query'
import { ExchangeRateTable } from '../ExchangeRateTable/ExchangeRateTable'
import { Convertor } from '../Convertor/Convertor'
import { Header, Header2, Message, Subheader } from './styled'
import { fetchExchangeRates } from './fetchExchangeRates'

export function LoadExchangeRates() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchExchangeRates,
  })

  if (isPending) {
    return <Message>Loading...</Message>
  }

  if (isError) {
    return <Message>{error.message}</Message>
  }

  return (
    <>
      <Header>Exchange</Header>
      <Subheader type="secondary">Based on CZK rates</Subheader>
      <Convertor exchangeRates={data} />
      <Header2 level={2}>CZK Rates</Header2>
      <ExchangeRateTable exchangeRates={data} />
    </>
  )
}
