import React from 'react'
import { Link } from 'react-router-dom'
import { MyCalendar } from '../components/MyCalendar'

export function MonthlyCalendarPages() {
  return (
    <>
      <header className="monthly-giggles">
        <button>
          <Link to="/addnewevent">Add Event</Link>
        </button>
      </header>
      <MyCalendar />
    </>
  )
}
