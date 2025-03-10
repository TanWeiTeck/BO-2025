import React from 'react'
import { ArrowDownIcon, ArrowUpIcon, EllipsisVertical } from 'lucide-react'
import { Badge } from '@/app/components/ui/badge'
import { Card, CardContent } from '@/app/components/ui/card'

type StateCardProps = {
  title: string
  value: string
  percentage: number
}

const StateCard = ({ title, value, percentage }: StateCardProps) => {
  return (
    <Card className="hover:bg-brand/5 transition-colors duration-200">
      <CardContent className="flex flex-col gap-2">
        <div className="text-tertiary relative flex items-end justify-between">
          <p className="text-tertiary text-sm">{title}</p>
          <EllipsisVertical
            size={16}
            className="text-muted-foreground absolute top-0 right-0 float-start cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-muted-foreground text-sm">
            {percentage > 0 ? (
              <Badge variant="positive">
                <ArrowUpIcon />
                {percentage}%
              </Badge>
            ) : (
              <Badge variant="negative">
                <ArrowDownIcon />
                {Math.abs(percentage)}%
              </Badge>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default StateCard
