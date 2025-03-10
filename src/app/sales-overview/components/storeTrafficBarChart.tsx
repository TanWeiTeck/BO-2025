'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/app/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/app/components/ui/chart'
import { Button } from '@/app/components/ui/button'
import { useChartData } from '@/app/hooks/useGenerateSampleData'
import { PeriodToggleGroup } from '@/app/sales-overview/components/periodToggleGroup'

const chartConfig = {
  A: {
    label: 'Walk-in',
    color: 'hsl(var(--chart-4))'
  },
  B: {
    label: 'Online',
    color: 'hsl(var(--chart-3))'
  }
} satisfies ChartConfig

const StoreTrafficBarChart = () => {
  const {
    selectedPeriod,
    setSelectedPeriod,
    data: filteredData,
    xAxisKey
  } = useChartData('12months')

  return (
    <Card className="hover:bg-brand/5 transition-colors duration-200">
      <CardHeader>
        <CardTitle className="flex justify-between">
          Store Traffic
          <Button variant="outline" size="sm">
            View report
          </Button>
        </CardTitle>
        <CardDescription>
          <PeriodToggleGroup
            value={selectedPeriod}
            onValueChange={setSelectedPeriod}
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={filteredData}
            height={200}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={2}
              tickFormatter={(value) => {
                if (xAxisKey === 'hour') {
                  return value.slice(0, 5)
                }
                if (xAxisKey === 'day') {
                  return value
                }
                return value.slice(0, 3)
              }}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="A"
              fill="var(--color-A)"
              radius={[0, 0, 0, 0]}
              stackId="a"
            />
            <Bar
              dataKey="B"
              fill="var(--color-B)"
              radius={[4, 4, 0, 0]}
              stackId="a"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default StoreTrafficBarChart
