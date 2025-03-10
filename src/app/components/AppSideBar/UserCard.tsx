import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

const UserCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="text-sm font-bold">Wei Teck</div>
          <div className="text-muted-foreground text-xs">
            weiteck@example.com
          </div>
        </div>
      </div>
      <Link href="/logout">
        <LogOut className="text-muted-foreground hover:text-brand h-4 w-4" />
      </Link>
    </div>
  )
}

export default UserCard
