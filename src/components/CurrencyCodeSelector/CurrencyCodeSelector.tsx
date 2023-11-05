import { ExchangeRate } from '../../types/ExchangeRate'
import { CurrencySelect } from './styled'

interface Props {
  exchangeRates: ExchangeRate[]
  onChange: (value: string) => void
  value: string
}

const filterOption = (
  input: string,
  option?: { label: string; value: string },
) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

export function CurrencyCodeSelector(props: Props) {
  const options = props.exchangeRates.map((exchangeRate) => {
    return {
      value: exchangeRate.code,
      label: `${exchangeRate.code} (${exchangeRate.country})`,
    }
  })

  return (
    <CurrencySelect
      showSearch
      placeholder="Select a currency code"
      optionFilterProp="children"
      onChange={props.onChange}
      filterOption={filterOption}
      options={options}
      value={props.value}
    />
  )
}
