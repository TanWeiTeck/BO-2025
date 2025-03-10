import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

type ActivityType = {
  id: number
  user: {
    name: string
    avatar: string
  }
  type: string
  description: string
  read: boolean
}

const ActivityCard = ({ id, user, type, description, read }: ActivityType) => {
  return (
    <div
      className="hover:bg-muted relative flex cursor-pointer items-center gap-2 rounded-lg py-1"
      id={id.toString()}
    >
      <div className="flex items-center gap-3">
        <Avatar className="bg-muted flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="text-sm font-medium">{user.name}</div>
          <div className="text-muted-foreground text-sm">
            {type}{' '}
            <span className="text-brand font-semibold">{description}</span>
          </div>
        </div>
      </div>
      {!read ? (
        <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-600" />
      ) : null}
    </div>
  )
}

export default ActivityCard
