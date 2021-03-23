import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// import EventDatePicker from '../pictures/EventDatePicker.jpg'

export function AddNewEvent() {
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    eventDateTime: '',
    typeOfEvent: '',
    notes: '',
  })

  const [errorMessage, setErrorMessage] = useState('')

  const history = useHistory()

  function handleAllFieldChanges(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedEvent = { ...newEvent, [fieldName]: value }

    setNewEvent(updatedEvent)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Events', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newEvent),
    })

    const json = await response.json()

    if (response.status === 400) {
      setErrorMessage(Object.values(json.errors).join(' '))
    } else {
      history.push('/')
    }
  }
  // const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

  return (
    <div className="newEventFlex">
      <span className="AddNewEvent">
        <header className="newEventHeader">
          <Link to="/">
            <i className="far fa-times-circle"></i>{' '}
          </Link>
        </header>
        <section id="event">
          <h1 className="titleLabel">New Event</h1>

          <br></br>
          <form className="eventForm">
            {errorMessage === '' ? '' : <p className="error">{errorMessage}</p>}
            <input
              id="NewEventh1"
              type="text"
              name="eventName"
              placeholder="Create a life event..."
              value={newEvent.eventName}
              onChange={handleAllFieldChanges}
            />

            <label id="StartTime">Starts</label>
            <input
              type="datetime-local"
              // dateFormat={dateFormat}
              name="eventDateTime"
              value={newEvent.eventDateTime}
              onChange={handleAllFieldChanges}
            />

            <label id="Type Of Event">Type of Event</label>
            <select
              name="typeOfEvent"
              value={newEvent.typeOfEvent}
              onChange={handleAllFieldChanges}
            >
              <option value="Daily">Daily</option>
              <option value="Sports">Sports</option>
              <option value="Holiday">Holiday</option>
            </select>

            <label id="notes">Notes</label>
            <textarea
              name="notes"
              value={newEvent.notes}
              onChange={handleAllFieldChanges}
            ></textarea>

            <label />
            <button id="save" onClick={handleFormSubmit}>
              SAVE
            </button>
          </form>
        </section>
      </span>
    </div>
  )
}
