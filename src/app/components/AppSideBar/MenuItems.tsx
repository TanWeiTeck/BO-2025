'use client'
import React from 'react'
import {
  ChartArea,
  FileStack,
  Home,
  ListCheck,
  PieChart,
  User
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const MenuItems = () => {
  const pathname = usePathname()
  const defaultExpandedItemsArray = Items.filter((item) =>
    item.items.some((subItem) => subItem.href === pathname)
  ).map((item) => item.label)

  return (
    <Accordion type="multiple" defaultValue={defaultExpandedItemsArray}>
      {Items.map(({ label, icon, items }) => (
        <AccordionItem value={label} key={label}>
          <AccordionTrigger className="group">
            <div
              className={cn(
                'flex items-center gap-2 font-bold',
                items.some((subItem) => subItem.href === pathname) &&
                  'text-brand'
              )}
            >
              <div
                className={cn(
                  'text-muted-foreground group-hover:text-brand',
                  items.some((subItem) => subItem.href === pathname) &&
                    'text-brand'
                )}
              >
                {icon}
              </div>
              {label}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {items.map((subItem, index) => (
                <Link
                  key={`${subItem.label}-${index}`}
                  href={subItem.href}
                  className={cn(
                    'cursor-pointer pl-8',
                    pathname === subItem.href
                      ? 'text-brand'
                      : 'text-muted-foreground hover:text-brand'
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default MenuItems

const Items = [
  {
    label: 'Home',
    icon: <Home />,
    items: [
      {
        label: 'lalala',
        href: '/'
      }
    ]
  },
  {
    label: 'Dashboard',
    icon: <ChartArea />,
    items: [
      {
        label: 'Sales Overview',
        href: '/sales-overview'
      },
      {
        label: 'Other',
        href: '/other'
      },
      {
        label: 'Home',
        href: '/home'
      }
    ]
  },
  {
    label: 'Projects',
    icon: <FileStack />,
    items: [
      {
        label: 'Home',
        icon: <Home />,
        href: '/home'
      }
    ]
  },
  {
    label: 'Tasks',
    icon: <ListCheck />,
    items: [
      {
        label: 'Home',
        icon: <Home />,
        href: '/home'
      }
    ]
  },
  {
    label: 'Reporting',
    icon: <PieChart />,
    items: [
      {
        label: 'Home',
        icon: <Home />,
        href: '/home'
      }
    ]
  },
  {
    label: 'Users',
    icon: <User />,
    items: [
      {
        label: 'Home',
        icon: <Home />,
        href: '/home'
      }
    ]
  }
]
