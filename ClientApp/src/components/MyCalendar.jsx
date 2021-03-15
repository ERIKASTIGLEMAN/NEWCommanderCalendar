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

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1000 }}
      />
    </div>
  )
}
