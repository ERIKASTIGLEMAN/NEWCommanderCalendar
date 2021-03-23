import React from 'react'
import { Link } from 'react-router-dom'
import { MyCalendar } from '../components/MyCalendar'

export function MonthlyCalendarPages() {
  return (
    <>
      <header className="addEventBIG">
        <div id="addEventBIG">
          <Link to="/addnewevent">Add Event</Link>
        </div>
      </header>
      <MyCalendar />
    </>
  )
}
