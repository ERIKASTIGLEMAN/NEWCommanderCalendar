import React from 'react'
import './custom.scss'
import { Route, Switch } from 'react-router-dom'
import { MonthlyCalendarPages } from './pages/MonthlyCalendarPages'
import { AddNewEvent } from './pages/AddNewEvent'

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
