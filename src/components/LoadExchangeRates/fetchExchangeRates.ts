import { parseExchangeRates } from "./parseExchangeRates"

export async function fetchExchangeRates() {
    const response = await fetch(
      'https://exchangerates-ubuc6z4kwa-ew.a.run.app',
    )
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const rates = await response.text()
    return parseExchangeRates(rates) 
}