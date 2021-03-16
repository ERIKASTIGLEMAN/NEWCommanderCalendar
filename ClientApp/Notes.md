Monthly Funnies

Add New Event.jsx - file
code for setting up end time of and event

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

    code for color tag (i think i might eliminate this and connect colors to event type)
       <section id="color">
          <label htmlFor="tags">ColorTag</label>
          <input name="tags" type="radio" value="red" />
          <input name="tags" type="radio" value="yellow" />
          <input name="tags" type="radio" value="green" />
          <input name="tags" type="radio" value="blue" />
        </section>
