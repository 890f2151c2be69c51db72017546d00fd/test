import { useState } from 'react'
import { ExchangeRate } from '../../types/ExchangeRate'
import { CurrencyCodeSelector } from '../CurrencyCodeSelector/CurrencyCodeSelector'
import { Left, Middle, Right, Wrapper } from './styled'
import { SwapOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'

interface Props {
  exchangeRates: ExchangeRate[]
}

export function Convertor(props: Props) {
  const [leftCurrencyCode, setLeftCurrencyCode] = useState('CZK')
  const [rightCurrencyCode, setRightCurrencyCode] = useState('USD')
  const [leftAmount, setLeftAmount] = useState(100)
  const [rightAmount, setRightAmount] = useState<number | null>(() => {
    const leftExchangeRate = getExchangeRate(leftCurrencyCode)
    const rightExchangeRate = getExchangeRate(rightCurrencyCode)
    return calculateAmount(leftAmount, rightExchangeRate, leftExchangeRate)
  })

  const handleLeftCurrencyCodeChange = (value: string) => {
    setLeftCurrencyCode(value)
    const leftExchangeRate = getExchangeRate(value)
    const rightExchangeRate = getExchangeRate(rightCurrencyCode)
    setRightAmount(
      calculateAmount(leftAmount, rightExchangeRate, leftExchangeRate),
    )
  }

  const handleLeftAmountChange = (value: number | null) => {
    if (value) {
      setLeftAmount(value)
      const leftExchangeRate = getExchangeRate(leftCurrencyCode)
      const rightExchangeRate = getExchangeRate(rightCurrencyCode)
      setRightAmount(
        calculateAmount(value, rightExchangeRate, leftExchangeRate),
      )
    }
  }

  const handleRighttAmountChange = (value: number | null) => {
    if (value) {
      setRightAmount(value)
      const leftExchangeRate = getExchangeRate(leftCurrencyCode)
      const rightExchangeRate = getExchangeRate(rightCurrencyCode)
      setLeftAmount(calculateAmount(value, leftExchangeRate, rightExchangeRate))
    }
  }

  const handleRightCurrencyCodeChange = (value: string) => {
    setRightCurrencyCode(value)
    const leftExchangeRate = getExchangeRate(leftCurrencyCode)
    const rightExchangeRate = getExchangeRate(value)
    setLeftAmount(
      calculateAmount(rightAmount, leftExchangeRate, rightExchangeRate),
    )
  }

  function calculateAmount(
    value: number | null,
    exchangeRateFrom?: ExchangeRate,
    exchangeRateTo?: ExchangeRate,
  ) {
    if (!exchangeRateFrom || !exchangeRateTo || !value) {
      return 0
    }

    return Number(
      (
        (value / (exchangeRateFrom.rate / exchangeRateFrom.amount)) *
        (exchangeRateTo.rate / exchangeRateTo.amount)
      ).toFixed(3),
    )
  }

  function getExchangeRate(code: string) {
    const exchangeRate = props.exchangeRates.find((it) => it.code === code)
    return exchangeRate
  }

  return (
    <Wrapper>
      <Left>
        <CurrencyCodeSelector
          exchangeRates={props.exchangeRates}
          value={leftCurrencyCode}
          onChange={handleLeftCurrencyCodeChange}
        />
        <InputNumber
          min={0}
          value={leftAmount}
          onChange={handleLeftAmountChange}
          style={{ width: 200 }}
        />
      </Left>
      <Middle>
        <SwapOutlined />
      </Middle>
      <Right>
        <CurrencyCodeSelector
          exchangeRates={props.exchangeRates}
          value={rightCurrencyCode}
          onChange={handleRightCurrencyCodeChange}
        />
        <InputNumber
          min={0}
          value={rightAmount}
          onChange={handleRighttAmountChange}
          style={{ width: 200 }}
        />
      </Right>
    </Wrapper>
  )
}
