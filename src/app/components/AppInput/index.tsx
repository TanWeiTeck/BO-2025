import React, { forwardRef } from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const DefaultInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <Input ref={ref} {...props} />
})

const AppInputSearch = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="relative flex items-center">
      <SearchIcon className="absolute left-3 h-4 w-4 text-gray-500" />
      <Input
        placeholder="Search"
        ref={ref}
        {...props}
        className={cn('pl-8', props.className)}
      />
    </div>
  )
})

DefaultInput.displayName = 'AppInput'
AppInputSearch.displayName = 'AppInput.Search'

const AppInput = Object.assign(DefaultInput, {
  Search: AppInputSearch
})

export default AppInput
