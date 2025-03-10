'use client'

import React from 'react'
import Header from './components/header'
import Controls from './components/controlPanel'
import StateCard from './components/stateCard'
import SalesReportGraph from './components/salesReportGraph'
import StoreTrafficBarChart from './components/storeTrafficBarChart'
import ActivityList from './components/activityList'
import AddSection from './components/addSection'

const SalesOverview = () => {
  return (
    <div className="flex max-h-full flex-col gap-6 overflow-hidden">
      <Header />
      <Controls />
      <div className="flex max-h-full gap-10 overflow-hidden">
        <div className="flex flex-grow flex-col gap-6 overflow-y-scroll">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {states.map((state) => (
              <StateCard key={state.id} {...state} />
            ))}
          </div>
          <SalesReportGraph />
          <StoreTrafficBarChart />
          <AddSection onAdd={() => console.log('add section')} />
        </div>
        <div className="max-h-full w-[240px] flex-col gap-6">
          <ActivityList />
        </div>
      </div>
    </div>
  )
}

export default SalesOverview

const states = [
  {
    id: 1,
    title: "Today's revenue",
    value: '$1,280',
    percentage: 10
  },
  {
    id: 2,
    title: "Today's orders",
    value: '14',
    percentage: 12
  },
  {
    id: 3,
    title: 'Avg. order value',
    value: '$91.42',
    percentage: -2
  }
]
