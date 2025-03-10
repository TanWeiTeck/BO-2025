'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
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
    label: 'Product A',
    color: 'hsl(var(--chart-1))'
  },
  B: {
    label: 'Product B',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig

const SalesReportGraph = () => {
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
          Sales report
          <Button variant="outline" size="sm">
            View Report
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
          <AreaChart
            accessibilityLayer
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillA" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-A)"
                  stopOpacity={0.5}
                />
                <stop offset="75%" stopColor="var(--color-A)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillB" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-B)"
                  stopOpacity={0.5}
                />
                <stop offset="75%" stopColor="var(--color-B)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              dataKey="B"
              type="natural"
              fill="url(#fillB)"
              fillOpacity={0.4}
              stroke="var(--color-B)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="A"
              type="natural"
              fill="url(#fillA)"
              fillOpacity={0.4}
              stroke="var(--color-A)"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default SalesReportGraph
