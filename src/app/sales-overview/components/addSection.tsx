import { Button } from '@/app/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

type AddSectionProps = {
  onAdd: () => void
}

const AddSection = ({ onAdd }: AddSectionProps) => {
  return (
    <div className="flex items-center gap-4">
      <hr className="w-full" />
      <Button variant="outline" className="text-sm" onClick={onAdd}>
        <Plus />
        Add
      </Button>
      <hr className="w-full" />
    </div>
  )
}

export default AddSection
