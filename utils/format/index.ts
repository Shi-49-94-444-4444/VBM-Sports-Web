import { FormatDateProps, FormatTimeProps } from '@/types/format'
import { format, parse } from 'date-fns'
import { vi } from 'date-fns/locale'
import Decimal from 'decimal.js'
import currency from 'currency.js'

export const FormatDate: React.FC<FormatDateProps> = ({ dateString }) => {
  const dateParts = dateString.split('/')
  const day = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10)
  const year = parseInt(dateParts[2], 10)

  const date = new Date(year, month - 1, day)

  const formattedDate = format(date, "cccc, 'ngày' dd 'tháng' MM, yyyy", { locale: vi })

  return formattedDate
}

export function formatDateFunc(dateString: string): string {
  const dateParts = dateString.split('/')
  const day = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10)
  const year = parseInt(dateParts[2], 10)

  const date = new Date(year, month - 1, day)

  const formattedDate = format(date, "cccc 'ngày' dd 'tháng' MM 'năm' yyyy", { locale: vi })

  return formattedDate
}

export function getDates(dateString: string): string[] {
  const [days, months, years] = dateString.split(":").map(part => part.split(";"))
  const dates = []
  let lastDay = 0
  let currentMonthIndex = 0

  for (let i = 0; i < days.length; i++) {
    let day = parseInt(days[i])
    let month = parseInt(months[currentMonthIndex])
    const year = years[i % years.length]

    if (day < lastDay) {
      currentMonthIndex++
      month = parseInt(months[currentMonthIndex % months.length])
    }

    const parsedDate = parse(`${day}/${month}/${year}`, "dd/MM/yyyy", new Date())
    dates.push(format(parsedDate, "dd/MM/yyyy"))

    lastDay = day
  }

  return dates
}

export const GetFirstDate: React.FC<FormatDateProps> = ({ dateString }) => {
  const [days, months, years] = dateString.split(":").map(part => part.split(";"))
  const dates = []
  let lastDay = 0
  let currentMonthIndex = 0

  for (let i = 0; i < days.length; i++) {
    let day = parseInt(days[i])
    let month = parseInt(months[currentMonthIndex])
    const year = years[i % years.length]

    if (day < lastDay) {
      currentMonthIndex++
      month = parseInt(months[currentMonthIndex % months.length])
    }

    const parsedDate = parse(`${day}/${month}/${year}`, "dd/MM/yyyy", new Date())
    dates.push(format(parsedDate, "dd/MM/yyyy"))

    lastDay = day
  }

  const firstDate = dates[0]

  return firstDate
}


export const FormatTime: React.FC<FormatTimeProps> = ({ timeString }) => {
  const formattedTime = timeString.replace(":", "h")

  return formattedTime
}

export function formatMoney(data: Decimal): string {
  const numberValue = data.toNumber()
  const roundedNumber = Math.round(numberValue)
  const formattedNumber = currency(roundedNumber, { symbol: "", separator: ".", decimal: ",", precision: 0  }).format()
  return formattedNumber + " đ"
}

export function formatAddress(data: string): string[] {
  const address = data.split(",")

  return address
}

export function formatURL(data: string): string[] {
  const url = data.split(";").filter(item => item !== "")

  return url
}
