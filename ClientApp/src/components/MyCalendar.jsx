import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useEffect, useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom'

// dateFormat: 'dddd, MMMM Do YYYY, h:mm: a',

const localizer = momentLocalizer(moment)

export function MyCalendar(props) {
  const history = useHistory()

  // make a useState
  const [eventList, setEventList] = useState([])

  useEffect(function () {
    async function fetchData() {
      const response = await fetch('api/Events')
      const json = await response.json()
      // const jsonDates = await json.map((events) => moment(events).toDate())
      setEventList(json)
    }

    fetchData()
  }, [])

  function handleSelectEvent(calendarEvent, browserEvent) {
    history.push(`/eventdetailspopup/${calendarEvent.id}`)
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
        views={['month', 'agenda']}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  )
}
