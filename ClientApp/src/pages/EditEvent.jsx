import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

export function EditEvent() {
  const params = useParams()
  const id = params.id
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  const [newEvent, setNewEvent] = useState({
    eventName: '',
    eventDateTime: '',
    typeOfEvent: '',
    notes: '',
  })

  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`/api/Events/${id}`)
      const apiData = await response.json()

      setNewEvent(apiData)
    }
    fetchEvent()
  }, [id])

  function handleAllFieldChanges(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedEvent = { ...newEvent, [fieldName]: value }

    setNewEvent(updatedEvent)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Events/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newEvent),
    })

    if (response.status === 400) {
      const json = await response.json()

      setErrorMessage(Object.values(json.errors).join(' '))
    } else {
      history.push('/')
    }
  }

  return (
    <div className="editEventDiv">
      <header className="editEvent">
        <button className="editX">
          <Link to="/">X</Link>
        </button>
        <h1 className="h1edit">{newEvent.eventName}</h1>
      </header>
      <br></br>
      <form className="edit">
        {errorMessage && <p className="error">{errorMessage}</p>}
        <input
          id="EditEvent"
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

        <label id="save" />
        <button onClick={handleFormSubmit}>SAVE</button>
      </form>
    </div>
  )
}