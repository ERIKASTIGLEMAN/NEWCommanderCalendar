import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

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

  return (
    <div className="detailsBrowser">
      <span id="details">
        <section className="Buttons">
          <div className="home">
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
          </div>
          <div className="edit">
            <Link to={`/events/${id}/edit`}>
              <i className="fas fa-edit"></i>
            </Link>
          </div>
          <div className="delete" onClick={handleDeleteEvent}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </section>
        <section className="detailsInfo">
          <h1 id="detail-name">{eventDetails.eventName}</h1>
          <h4>Date/Time:</h4>

          <p>{eventDetails.eventDateTime}</p>

          <h4>Event Type:</h4>

          <p>{eventDetails.typeOfEvent}</p>

          <h4> Notes:</h4>
          <p className="notes"> {eventDetails.notes}</p>
        </section>
      </span>
    </div>
  )
}
