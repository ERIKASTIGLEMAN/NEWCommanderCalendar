import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import EventDatePicker from '../pictures/EventDatePicker.jpg'

export function AddNewEvent() {
  // const [newEvents, setNewEvents] = useState()

  return (
    <div className="AddNewEvent">
      <header className="newEvent">
        <button>
          <Link to="/">X</Link>
        </button>
        <h1>New Event</h1>
      </header>
      <br></br>
      <main>
        {/* {
          newEvents.map(function(newEvents){
            return(

            )
          })
        } */}
        <input
          type="text"
          className="eventName"
          placeholder="Create a life altering event..."
        />
        <section id="all-day">
          <p>All DAY</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </section>
        <section id="starts">
          <p>Starts</p>
          <label className="StartDate">
            <img src="EventDatePicker.jpg" alt="Monthly Calendar Dates" />
            <input
              type="time"
              id="timeOfEvent"
              min="1:00"
              max="23:59"
              required
            />
          </label>
        </section>
        <section id="ends">
          <p>ENDS</p>
          <label className="EndDate">
            <img http="EventDatePicker.jpg" alt="Monthly Calendar Dates" />
            <input
              type="time"
              id="timeOfEvent"
              min="1:00"
              max="23:59"
              required
            />
          </label>
        </section>
        <p>Type of Event</p>
        <select>Daily, Holiday, Sports</select>
        {/* <section id="color">
          <label htmlFor="tags">ColorTag</label>
          <input name="tags" type="radio" value="red" />
          <input name="tags" type="radio" value="yellow" />
          <input name="tags" type="radio" value="green" />
          <input name="tags" type="radio" value="blue" />
        </section> */}
        <section id="img">
          <img src=".../pictures/EventDatePicker.jpg" alt="logo" />
          <a href="url">link text</a>
        </section>

        <section id="notes">
          <textarea>Notes</textarea>
        </section>
      </main>
      <footer>
        <button id="Save">SAVE</button>
      </footer>
    </div>
  )
}
