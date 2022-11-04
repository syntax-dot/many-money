import axios from 'axios'

const now = new Date().toLocaleDateString().replaceAll('.', '/')

// export const baseURL = `http://www.cbr.ru/scripts/XML_daily.asp?date_req=${now}`

export const baseURL = 'https://www.cbr-xml-daily.ru/daily_json.js'

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
})

// export const instance = axios.create({
//   method: 'get',
//   baseURL,
//   withCredentials: false,
// })
