import { useState } from 'react'
import {
  generateHoursData,
  generateDaysData,
  generateMonthsData
} from '@/lib/utils'

type ChartDataType = {
  month?: string
  day?: string
  hour?: string
  A?: number
  B?: number
}

export type ChartPeriod =
  | '12months'
  | '3months'
  | '30days'
  | '7days'
  | '24hours'

export function useChartData(initialPeriod: ChartPeriod = '3months') {
  const [selectedPeriod, setSelectedPeriod] =
    useState<ChartPeriod>(initialPeriod)

  const getData = (period: ChartPeriod): ChartDataType[] => {
    switch (period) {
      case '12months':
        return generateMonthsData()
      case '3months':
        return generateMonthsData(3)
      case '30days':
        return generateDaysData(30)
      case '7days':
        return generateDaysData(7)
      case '24hours':
        return generateHoursData(24)
      default:
        return []
    }
  }

  const xAxisKey = {
    '12months': 'month',
    '3months': 'month',
    '30days': 'day',
    '7days': 'day',
    '24hours': 'hour'
  }[selectedPeriod]

  const data = getData(selectedPeriod)

  return {
    selectedPeriod,
    setSelectedPeriod,
    data,
    xAxisKey
  }
}
