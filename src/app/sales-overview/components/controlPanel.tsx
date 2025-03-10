'use client'

import React from 'react'
import { Filter, Plus } from 'lucide-react'
import { AppDateRangePicker } from '@/app/components/AppDateRangePicker'
import { Button } from '@/app/components/ui/button'
import { Checkbox } from '@/app/components/ui/checkbox'
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/app/components/ui/dropdown-menu'
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group'

const Controls = () => {
  const Notification = () => (
    <div className="h-2 w-2 rounded-full bg-green-500"></div>
  )
  return (
    <div className="flex justify-between">
      <ToggleGroup
        type="single"
        className="border"
        defaultValue="default"
        onValueChange={(value) => {
          console.log(value)
        }}
      >
        <ToggleGroupItem value="default" className="max-w-fit border-r px-4">
          Default
        </ToggleGroupItem>
        <ToggleGroupItem value="saved" className="max-w-fit border-r px-4">
          <Notification />
          Saved view
        </ToggleGroupItem>
        <ToggleGroupItem value="sdr" className="max-w-fit border-r px-4">
          SDR view
        </ToggleGroupItem>
        <ToggleGroupItem value="add" className="max-w-fit px-4">
          <Plus />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="flex items-center gap-2">
        <AppDateRangePicker />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter /> Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
              }}
            >
              <Checkbox id="orange" />
              <label htmlFor="orange">Orange</label>
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
              }}
            >
              <Checkbox id="apple" />
              <label htmlFor="apple">Apple</label>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="brand" className="w-full">
                Apply
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Controls
