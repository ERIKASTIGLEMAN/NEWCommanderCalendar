import React from 'react'

export function AddNewEvent() {
  return (
    <div className="AddNewEvent">
      <header className="newEvent">
        <button>X</button>
        <h1>Create A Life Altering Decision...</h1>
      </header>
      <main>
        <input className="eventName" />
        <section>
          <p>All DAY</p>
          <label className="newEventSwitch">
            <input type="checkbox" />
            <span>
              <span>OFF</span>
              <span>ON</span>
            </span>
          </label>
        </section>
        <section>
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
        <section>
          <label className="EndDate">
            <p>ENDS</p>
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
        <section>
          {/* <label htmlFor="tags">ColorTag</label>
          <input name="tags" type="radio" value="red" /> */}

          <div>Img</div>
          <div>URL</div>
        </section>
        <section>
          <p>Notes</p>
          <input type="text" />
        </section>
      </main>
      <footer>
        <button className="newEventSave">SAVE</button>
      </footer>
    </div>
  )
}
