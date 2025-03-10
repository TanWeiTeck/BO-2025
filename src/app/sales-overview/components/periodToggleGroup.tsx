import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group'
import { ChartPeriod } from '@/app/hooks/useGenerateSampleData'
import { cn } from '@/lib/utils'

type Period = {
  value: ChartPeriod
  label: string
}

type PeriodToggleGroupProps = {
  value: ChartPeriod
  onValueChange: (value: ChartPeriod) => void
  periods?: Period[]
  className?: string
}

export function PeriodToggleGroup({
  value,
  onValueChange,
  periods = [
    { value: '12months', label: '12 months' },
    { value: '3months', label: '3 months' },
    { value: '30days', label: '30 days' },
    { value: '7days', label: '7 days' },
    { value: '24hours', label: '24 hours' }
  ],
  className
}: PeriodToggleGroupProps) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(value) => value && onValueChange(value as ChartPeriod)}
      className={cn('gap-2', className)}
    >
      {periods.map((period) => (
        <ToggleGroupItem
          key={period.value}
          value={period.value}
          className="max-w-fit rounded-md px-3 py-2 font-semibold"
        >
          {period.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
