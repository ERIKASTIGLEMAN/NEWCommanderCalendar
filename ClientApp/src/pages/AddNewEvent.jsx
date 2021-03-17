import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import format from 'date-fns/format'

// import EventDatePicker from '../pictures/EventDatePicker.jpg'
const dateFormat = 'EEEE, MMM d, yyyy, h:m a..aa'

export function AddNewEvent() {
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    eventDate: '',
    typeOfEvent: '',
    notes: '',
  })

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
    console.log(json)
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
      <form action="#" onSubmit={handleFormSubmit}>
        <input
          id="NewEventh1"
          type="text"
          name="eventName"
          placeholder="Create a life altering event..."
          value={newEvent.eventName}
          onChange={handleAllFieldChanges}
        />

        <label id="AllDayEvent">All DAY</label>

        <label id="StartTime">Starts</label>

        <label id="StartDate" />
        <input
          type="image"
          src="EventDatePicker.jpg"
          alt="Monthly Calendar Dates"
          name="eventDate"
          value={newEvent.eventDate}
          onChange={handleAllFieldChanges}
        />
        <input
          type="time"
          name="timeOfEvent"
          min="1:00"
          max="23:59"
          value={newEvent.eventDate}
          onChange={handleAllFieldChanges}
          // required
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

        <label id="save">
          <input type="submit" value="SAVE" />
        </label>
      </form>
    </div>
  )
}
