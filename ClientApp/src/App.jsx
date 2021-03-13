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
      {/* <div className=".rbc-row-segment .rbc-event-content">
        <p className="createEvent">
          Name="Dogs to Groomers"; Date="Date" Time="time" TypeofEvent="Sports"
          Color="Blue" Img="png" URL="" Notes="Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Integer nec odio. Praesent libero. Se."
        </p>
      </div> */}
      <MyCalendar />
    </>
  )
}
