import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { format } from 'date-fns'

// import EventDatePicker from '../pictures/EventDatePicker.jpg'
// const dateFormat = format(eventDate, 'EEEE, MMM d, yyyy, h:m a..aa')

// console.log(dateFormat)

export function AddNewEvent() {
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    eventDate: '',
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

  return (
    <div className="AddNewEvent">
      <header className="newEvent">
        <button>
          <Link to="/">X</Link>
        </button>
        <h1>New Event</h1>
      </header>
      <br></br>
      <form>
        <p className="error">{errorMessage}</p>
        <input
          id="NewEventh1"
          type="text"
          name="eventName"
          placeholder="Create a life altering event..."
          value={newEvent.eventName}
          onChange={handleAllFieldChanges}
        />

        {/* <h3 id="AllDayEvent">All DAY</h3>
        <p className="Y">
          <label htmlFor="Y">YES</label>
          <input type="radio" />
        </p>
        <p>
          <label htmlFor="N">NO</label>
          <input type="radio" />
        </p> */}

        <label id="StartTime">Starts</label>

        <label id="StartDate" />
        {/* <input
          type="image"
          src="EventDatePicker.jpg"
          alt="Monthly Calendar Dates"
          name="eventDate"
          value={format(newEvent.eventDate, 'EEEE, MMM d, yyyy, h:m a..aa')}
          onChange={handleAllFieldChanges}
        /> */}
        <input
          type="datetime-local"
          name="eventDate"
          value={newEvent.eventDate}
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

        <label id="save" />
        <button onClick={handleFormSubmit}>SAVE</button>
      </form>
    </div>
  )
}
