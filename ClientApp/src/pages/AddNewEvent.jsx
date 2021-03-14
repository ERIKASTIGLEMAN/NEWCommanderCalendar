import React { useState } from 'react';
// import EventDatePicker from '../pictures/EventDatePicker.jpg'

export function AddNewEvent() {
  const [addNewEvent, setAddNewEvent] = useState([
    {
      id: 13,
      eventName: 'Dogs to Groomers',
      dateOfEvent: 'March 28,2021',
      timeOfEvent: '10:00am',
      typeOfEvent: 'Daily',
      colorTag: 'Yellow',
      image: 'png',
      url: 'url',
      notes: 'Do not forget leashes',
    },
    {
      id: 14,
      eventName: 'VolleyBall Practice',
      dateOfEvent: 'March 18,2021',
      timeOfEvent: '6:30pm',
      typeOfEvent: 'Daily',
      colorTag: 'Green',
      image: 'png',
      url: 'url',
      notes: 'Volunteer Hours Due',
    },
    {
      id: 15,
      eventName: 'Tennis Practice',
      dateOfEvent: 'March 21,2021',
      timeOfEvent: '5:00pm',
      typeOfEvent: 'Daily',
      colorTag: 'Green',
      image: 'png',
      url: 'url',
      notes: 'Set up additional lessons',
    },
    {
      id: 16,
      eventName: 'No School',
      dateOfEvent: 'March 27,2021',
      timeOfEvent: 'ALL DAY',
      typeOfEvent: 'Daily',
      colorTag: 'Green',
      image: 'png',
      url: 'url',
      notes: 'Teacher Conferences',
    },
    {
      id: 17,
      eventName: 'St Paddys Day',
      dateOfEvent: 'March 17,2021',
      timeOfEvent: 'time null',
      typeOfEvent: 'Holiday',
      colorTag: 'Red',
      image: 'png',
      url: 'url',
      notes: 'null',
    },
    {
      id: 18,
      eventName: 'Lightening vs Red Wings',
      dateOfEvent: 'March 30,2021',
      timeOfEvent: '7:30pm',
      typeOfEvent: 'Sport',
      colorTag: 'Blue',
      image: 'png',
      url: 'url',
      notes: 'grab jersey for gift',
    },
    {
      id: 19,
      eventName: 'Weather',
      dateOfEvent: 'each day',
      timeOfEvent: 'time null',
      typeOfEvent: 'Weather',
      colorTag: 'null',
      image: 'png',
      url: 'url',
      notes: 'null',
    },
  ])

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
