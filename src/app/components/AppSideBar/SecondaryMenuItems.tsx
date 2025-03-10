import { Circle } from 'lucide-react'
import { Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SecondaryMenuItems = () => {
  return (
    <>
      <Link
        href="/support"
        className="group flex items-center gap-2 text-sm font-bold"
      >
        <Circle className="text-muted-foreground group-hover:text-brand" />
        <div>Support</div>
      </Link>
      <Link
        href="/settings"
        className="group flex items-center gap-2 text-sm font-bold"
      >
        <Settings className="text-muted-foreground group-hover:text-brand" />
        <div>Settings</div>
      </Link>
    </>
  )
}

export default SecondaryMenuItems
