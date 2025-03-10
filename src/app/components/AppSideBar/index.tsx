import React from 'react'
import AppInput from '../AppInput'
import { Earth } from 'lucide-react'
import MenuItems from './MenuItems'
import SecondaryMenuItems from './SecondaryMenuItems'
import UserCard from './UserCard'

const AppSideBar = () => {
  return (
    <div className="flex h-full w-[312] flex-col gap-6 p-6">
      {/* Just to simulate company logo as figma export blocked */}
      <Earth className="text-brand min-h-6 w-6" />
      <AppInput.Search />
      <div className="scrollbar-hide flex-grow overflow-y-auto">
        <MenuItems />
      </div>
      <SecondaryMenuItems />
      <hr />
      <UserCard />
    </div>
  )
}

export default AppSideBar
