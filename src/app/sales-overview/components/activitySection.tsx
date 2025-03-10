import React from 'react'
import Link from 'next/link'
import ActivityCard from './activityCard'

const ActivitySection = () => {
  return (
    <div className="flex max-h-full flex-col gap-6 overflow-hidden">
      <div className="flex justify-between">
        <div className="text-lg font-semibold">Activity</div>
        <Link
          href="/activity"
          className="text-tertiary hover:text-brand text-sm font-semibold"
        >
          View all
        </Link>
      </div>
      <div className="flex flex-col gap-3 overflow-y-scroll">
        {activityList.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
        {activityList.length < 1 ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-xs text-gray-300">
              No activities found
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-xs text-gray-300">
              You have viewed all activities
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivitySection

const activityList = [
  {
    id: 1,
    user: {
      name: 'Demi Wikinson',
      avatar: 'https://i.pravatar.cc/301'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: false
  },
  {
    id: 2,
    user: {
      name: 'Aliah Lane',
      avatar: 'https://i.pravatar.cc/302'
    },
    type: 'Purchased',
    description: 'SEO Masterclass',
    read: true
  },
  {
    id: 3,
    user: {
      name: 'User 3',
      avatar: 'https://i.pravatar.cc/303'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 4,
    user: {
      name: 'User 4',
      avatar: 'https://i.pravatar.cc/304'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 5,
    user: {
      name: 'User 5',
      avatar: 'https://i.pravatar.cc/305'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 6,
    user: {
      name: 'User 6',
      avatar: 'https://i.pravatar.cc/306'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 7,
    user: {
      name: 'User 7',
      avatar: 'https://i.pravatar.cc/307'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 8,
    user: {
      name: 'User 8',
      avatar: 'https://i.pravatar.cc/308'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 9,
    user: {
      name: 'User 9',
      avatar: 'https://i.pravatar.cc/309'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 10,
    user: {
      name: 'User 10',
      avatar: 'https://i.pravatar.cc/310'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 11,
    user: {
      name: 'User 11',
      avatar: 'https://i.pravatar.cc/311'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 12,
    user: {
      name: 'User 12',
      avatar: 'https://i.pravatar.cc/312'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 13,
    user: {
      name: 'User 13',
      avatar: 'https://i.pravatar.cc/313'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 14,
    user: {
      name: 'User 14',
      avatar: 'https://i.pravatar.cc/314'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 15,
    user: {
      name: 'User 15',
      avatar: 'https://i.pravatar.cc/315'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 16,
    user: {
      name: 'User 16',
      avatar: 'https://i.pravatar.cc/316'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 17,
    user: {
      name: 'User 17',
      avatar: 'https://i.pravatar.cc/317'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 18,
    user: {
      name: 'User 18',
      avatar: 'https://i.pravatar.cc/318'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 19,
    user: {
      name: 'User 19',
      avatar: 'https://i.pravatar.cc/319'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 20,
    user: {
      name: 'User 20',
      avatar: 'https://i.pravatar.cc/320'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 21,
    user: {
      name: 'User 21',
      avatar: 'https://i.pravatar.cc/321'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 22,
    user: {
      name: 'User 22',
      avatar: 'https://i.pravatar.cc/322'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  },
  {
    id: 23,
    user: {
      name: 'User 23',
      avatar: 'https://i.pravatar.cc/323'
    },
    type: 'Purchased',
    description: 'Webflow 101',
    read: true
  }
]
