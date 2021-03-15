import React from 'react'

export function EventDetailsPopup() {
  return (
    <div id="EventDetailsPopup">
      <header className="EventDetailsPopup">
        <button>X</button>
        <button>Edit</button>
      </header>
      <body>
        <h1>EventName</h1>
        <br></br>
        <del>EventDateTime</del>
        <select>TypeOfEvent</select>
        <img src="../pictures/bolt.png" alt="Logo" />
        <textarea> Notes </textarea>
        <a href="url">link text</a>
      </body>
    </div>
  )
}
