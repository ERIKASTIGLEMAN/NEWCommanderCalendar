import React from 'react'

export function AddNewEvent() {
  return (
    <div className="AddNewEvent">
      <header className="newEvent">
        <button>X</button>
        <h1>New Event</h1>
      </header>
      <br></br>
      <main>
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
        <section id="color">
          <label htmlFor="tags">ColorTag</label>
          <input name="tags" type="radio" value="red" />
          <input name="tags" type="radio" value="yellow" />
          <input name="tags" type="radio" value="green" />
          <input name="tags" type="radio" value="blue" />
        </section>
        <section id="img">
          <img src="pictures\EventDatePicker.jpg" />
        </section>

        <div id="url">URL</div>
        <section id="notes">
          <p>Notes</p>
          <input type="text" />
        </section>
      </main>
      <footer>
        <button id="Save">SAVE</button>
      </footer>
    </div>
  )
}
