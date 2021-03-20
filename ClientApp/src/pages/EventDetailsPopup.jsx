import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
import format from 'date-fns/format'

export function EventDetailsPopup() {
  const history = useHistory()
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

  async function handleDeleteEvent(event) {
    event.preventDefault()

    const response = await fetch(`/api/Events/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    if (response.status === 200 || response.status === 204) {
      history.push('/')
    }
  }
  async function handleEditEvent(event) {
    event.preventDefault()

    const response = await fetch(`/api/Events/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(eventDetails),
    })
  }

  const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

  return (
    <div id="EventDetailsPopup">
      <header className="EventDetailPopup">
        <button>
          <Link to="/">X</Link>
        </button>
        <button>
          <Link to="">Edit</Link>
        </button>
        <button onClick={handleDeleteEvent}>Delete</button>
      </header>

      <h1 id="detail-name">{eventDetails.eventName}</h1>
      <h5>Date/Time</h5>
      <p>{format(new Date(eventDetails.eventDateTime), dateFormat)}</p>

      <h5>Event Type:</h5>
      <p>{eventDetails.typeOfEvent}</p>

      <h5> Notes:</h5>
      <p> {eventDetails.notes}</p>
      <img src="../pictures/bolt.png" alt="Logo" />
      <a href="url">link text</a>
    </div>
  )
}
