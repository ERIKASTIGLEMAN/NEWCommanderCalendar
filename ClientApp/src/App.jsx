import React from 'react'
import './custom.scss'
import { MyCalendar } from './components/MyCalendar'

export function App() {
  return (
    <>
      <header className="monthly-giggles">
        <p>
          After I drink coffee I like to show the empty mug to the IT guy to
          tell him that I've successfully installed Java. He hates me...
        </p>
      </header>

      <MyCalendar />
    </>
  )
}
