import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

export function EventDetailsPopup() {
  const params = useParams()
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDateTime: '',
    typeOfEvent: '',
    notes: '',
  })
  const id = params.id

  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`/api/Events/${id}`)
      const apiData = await response.json()

      setEventDetails(apiData)
    }
    fetchEvent()
  }, [id])

  // function handleEditEvent(event){
  //   event.preventDefault()

  //   const response = await fetch(`/api/Events`,{
  //     method: 'GET',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(eventDetails),
  //   })

  }

  return (
    <div id="EventDetailsPopup">
      <header className="EventDetailPopup">
        <button>
          <Link to="/">X</Link>
        </button>

        <button>
          <Link to="/addnewevent">Edit</Link>
        </button>
        <button>
          <Link to="/addnewevent">Delete</Link>
        </button>
      </header>
      <h1 id="detail-name">{eventDetails.eventName}</h1>
      <h5>Date/Time</h5>
      <p>{eventDetails.eventDateTime}</p>

      <h5>Event Type:</h5>
      <p>{eventDetails.typeOfEvent}</p>

      <h5> Notes:</h5>
      <p> {eventDetails.notes}</p>
      <img src="../pictures/bolt.png" alt="Logo" />
      <a href="url">link text</a>
    </div>
  )
}
