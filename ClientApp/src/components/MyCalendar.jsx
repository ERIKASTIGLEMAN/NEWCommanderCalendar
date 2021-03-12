import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export function MyCalendar(props) {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1000 }}
      />
      <h1>HEllO</h1>
    </div>
  )
}
