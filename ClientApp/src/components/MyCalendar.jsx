import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { useEffect, useState } from 'react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const localizer = momentLocalizer(moment)

export function MyCalendar(props) {
  const history = useHistory()

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
    history.push(`/eventdetailspopup/${calendarEvent.id}`)
  }

  return (
    <div>
      {/* <ul>
        {eventList.map(function (event) {
          return (
            <li>
              <Link to="/eventdetailspopup">{event.eventName}</Link>
            </li>
          )
        })}
      </ul> */}
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
