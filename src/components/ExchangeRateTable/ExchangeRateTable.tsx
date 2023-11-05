import type { ColumnsType } from 'antd/es/table'
import { ExchangeRate } from '../../types/ExchangeRate'
import { ExchangeTable } from './styled'

const columns: ColumnsType<ExchangeRate> = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    sorter: (a, b) => a.country.localeCompare(b.country),
    width: '20%',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    sorter: (a, b) => a.currency.localeCompare(b.currency),
    width: '20%',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    sorter: (a, b) => a.code.localeCompare(b.code),
    width: '20%',
  },
  {
    title: 'Rate',
    key: 'rate',
    dataIndex: 'rate',
    sorter: (a, b) => a.rate - b.rate,
    width: '20%',
  },
  {
    title: 'Amount',
    key: 'amount',
    dataIndex: 'amount',
    sorter: (a, b) => a.amount - b.amount,
    width: '20%',
  },
]

interface Props {
  exchangeRates: ExchangeRate[]
}

export function ExchangeRateTable(props: Props) {
  const data = props.exchangeRates
    .filter((it) => it.code !== 'CZK')
    .map((exchangeRate) => {
      return {
        key: exchangeRate.country,
        ...exchangeRate,
      }
    })

  return <ExchangeTable columns={columns} dataSource={data} />
}
