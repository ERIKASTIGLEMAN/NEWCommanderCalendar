import React from 'react'
import './custom.scss'
import { Route, Switch } from 'react-router-dom'
import { MonthlyCalendarPages } from './pages/MonthlyCalendarPages'
import { AddNewEvent } from './pages/AddNewEvent'
import { EventDetailsPopup } from './pages/EventDetailsPopup'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <MonthlyCalendarPages />
      </Route>

      <Route exact path="/addnewevent">
        <AddNewEvent />
      </Route>

      <Route exact path="/eventdetailspopup/:id">
        <EventDetailsPopup />
      </Route>
    </Switch>
  )
}
