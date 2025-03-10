import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Just simulate data for the chart
export const generateMonthsData = (period = 12) => {
  const now = new Date()
  const data = []
  for (let i = period - 1; i >= 0; i--) {
    const date = new Date(now)
    date.setMonth(date.getMonth() - i)
    data.push({
      month: date.toLocaleString('en-US', { month: 'long' }),
      A: Math.floor(Math.random() * 500 + 200),
      B: Math.floor(Math.random() * 300 + 100)
    })
  }
  return data
}

// Just simulate data for the chart
export const generateDaysData = (period = 30) => {
  const now = new Date()
  const data = []
  for (let i = period - 1; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    data.push({
      day: date.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
      A: Math.floor(Math.random() * 100 + 50),
      B: Math.floor(Math.random() * 60 + 30)
    })
  }
  return data
}

// Just simulate data for the chart
export const generateHoursData = (period = 24) => {
  const now = new Date()
  const data = []
  for (let i = period - 1; i >= 0; i--) {
    const date = new Date(now)
    date.setHours(date.getHours() - i)
    data.push({
      hour: date.toLocaleString('en-US', {
        hour: 'numeric',
        hour12: true
      }),
      A: Math.floor(Math.random() * 20 + 10),
      B: Math.floor(Math.random() * 15 + 5)
    })
  }
  return data
}
