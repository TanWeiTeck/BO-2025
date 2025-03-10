import React from 'react'
import { Download, Plus } from 'lucide-react'
import { Button } from '@/app/components/ui/button'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Sales Overview</h1>
        <p className="text-tertiary">
          Your current sales summary and activity.
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline">
          <Download />
          Export
        </Button>
        <Button variant="brand">
          <Plus />
          Invite
        </Button>
      </div>
    </div>
  )
}

export default Header
