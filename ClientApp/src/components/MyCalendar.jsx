import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import eventList from '../pages/fakedata.json'
import { useEffect, useState } from 'react'

const localizer = momentLocalizer(moment)

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
    console.log(calendarEvent)
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
