import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function EventDetailsPopup() {
  const [eventDetails, setEventDetails] = useState([])

  useEffect(function () {
    async function fetchData() {
      const response = await fetch('api/Events')
      const json = await response.json()

      setEventDetails(json)
    }
    fetchData()
  }, [])

  return (
    <div id="EventDetailsPopup">
      <header className="EventDetailsPopup">
        <button>
          <Link to="/">X</Link>
        </button>

        <button>
          <Link to="/addnewevent">Edit</Link>
        </button>
      </header>

      {eventDetails.map(function (eventDetail) {
        return (
          <body key={eventDetail.id} className="eventDetail">
            <h1 id="detail-name">{eventDetail.eventName}</h1>
            <h5>Date/Time</h5>
            <p>{eventDetail.eventDateTime}</p>

            <h5>Event Type:</h5>
            <p>{eventDetail.typeOfEvent}</p>

            <h5> Notes:</h5>
            <p> {eventDetail.notes}</p>
            <img src="../pictures/bolt.png" alt="Logo" />
            <a href="url">link text</a>
          </body>
        )
      })}
    </div>
  )
}
