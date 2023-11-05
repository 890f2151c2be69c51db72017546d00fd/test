import https = require("https")
import {setGlobalOptions} from "firebase-functions/v2"
import {onRequest} from "firebase-functions/v2/https"

setGlobalOptions({region: "europe-west1"})

export const exchangeRates = onRequest((_, response) => {
  https
  .get("https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt", (resp) => {
    let data = ""
    resp.on("data", (chunk) => {
      data += chunk
    })
    resp.on("end", () => {
      response.header("Access-Control-Allow-Origin", "https://prevadec-spojitosti.web.app");
      response.send(data)
    })
  })
  .on("error", (err) => {
    response.status(500).send(err.message)
  })
})
