import React from 'react'
import './custom.scss'
import { MyCalendar } from './components/MyCalendar'

export function App() {
  return (
    <>
      <header className="monthly-giggles">
        <blockquote>
          After I drink coffee I like to show the empty mug to the IT guy to
          tell him that I've successfully installed Java. He hates me...
        </blockquote>
      </header>
      {/* Need to add button to toolbar to create newEvent */}

      {/* NEW EVENT PAGE
      <div className="AddNewEvent">
        <header className="newEvent">
          <button>X</button>
          <h1>Create A Life Altering Decision...</h1>
        </header>
        <body>
          <input className="eventName">Craft Festival</input>

          <section>
            <p>All DAY</p>
            <label className="newEventSwitch">
              <input>type="checkbox"</input>
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
              ></input>
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
              ></input>
            </label>
          </section>
          <section>
            <div>Color Tag</div>
            <input>
              <div>Red</div>
              <div>Yellow</div>
              <div>Green</div>
              <div>Blue</div>
            </input>
            <div>Img</div>
            <div>URL</div>
          </section>
          <section>
            <p>Notes</p>
            <input type="text"></input>
          </section>
        </body>
        <footer>
          <button className="newEventSave">SAVE</button>
        </footer>
      </div> */}
      <MyCalendar />
    </>
  )
}
