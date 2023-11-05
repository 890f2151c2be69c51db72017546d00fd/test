export function parseExchangeRates(rates: string) {
    const lines = rates.split('\n')
      const exchangeRates = lines
        .map((line) => {
          //'Country', 'Currency', 'Amount', 'Code', 'Rate'
          const values = line.split('|')
          return {
            country: values[0],
            currency: values[1],
            amount: parseFloat(values[2]),
            code: values[3],
            rate: parseFloat(values[4]),
          }
        })
        .slice(2, -1)
        exchangeRates.push({
          country: 'Czech Republic',
          currency: 'koruna',
          amount: 1,
          code: 'CZK',
          rate: 1,
        })
      exchangeRates.sort((a, b) => a.country.localeCompare(b.country))
      return exchangeRates
}