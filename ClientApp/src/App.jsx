import React from 'react'
import './custom.scss'
import { Route, Switch } from 'react-router-dom'
import { MonthlyCalendarPages } from './pages/MonthlyCalendarPages'

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
          <label for="htmlF4">ColorTag</label>
          <input type="radio">
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
          <input type="text" />
        </section>
      </main>
      <footer>
        <button className="newEventSave">SAVE</button>
      </footer>
    </div>
  )
}
export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <MonthlyCalendarPages />
      </Route>

      <Route exact path="/addnewevent">
        <AddNewEvent />
      </Route>
    </Switch>
  )
}
