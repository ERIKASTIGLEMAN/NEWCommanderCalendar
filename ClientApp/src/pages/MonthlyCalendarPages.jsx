import React from 'react'
import { MyCalendar } from '../components/MyCalendar'

export function MonthlyCalendarPages() {
  return (
    <>
      <header className="monthly-giggles">
        <blockquote>
          After I drink coffee I like to show the empty mug to the IT guy to
          tell him that I've successfully installed Java. He hates me...
        </blockquote>
      </header>
      <MyCalendar />

      {/* Need to add button to toolbar to create newEvent */}
    </>
  )
}
