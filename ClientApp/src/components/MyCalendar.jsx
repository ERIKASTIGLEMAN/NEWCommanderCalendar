import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// @ts-ignore

import { useEffect, useState } from 'react'

const localizer = momentLocalizer(moment)
// const formatLocalizer = moment().format("ddd,MMM D YYYY, h:m A");

export function MyCalendar(props) {
  // make a useState
  const [eventList, setEventList] = useState([])

  useEffect(function () {
    async function fetchData() {
      const response = await fetch('api/Events')
      const json = await response.json()

      setEventList(json)
    }
    fetchData()
  }, [])

  function handleSelectEvent(calendarEvent, browserEvent) {
    window.location.href = 'http://localhost:5000/eventdetailspopup'
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="eventDateTime"
        endAccessor="eventDateTime"
        titleAccessor="eventName"
        style={{ height: 1000 }}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  )
}
