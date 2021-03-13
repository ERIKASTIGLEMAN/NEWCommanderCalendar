using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NEWCommanderCalendar.Models;

namespace NEWCommanderCalendar.Controllers
{
    // All of these routes will be at the base URL:     /api/Events
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case EventsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public EventsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Events
        //
        // Returns a list of all your Events
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetEvents()
        {
            // Uses the database context in `_context` to request all of the Events, sort
            // them by row id and return them as a JSON array.
            return await _context.Events.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Events/5
        //
        // Fetches and returns a specific @event by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEvent(int id)
        {
            // Find the @event in the database using `FindAsync` to look it up by id
            var @event = await _context.Events.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (@event == null)
            {
                // Return a `404` response to the client indicating we could not find a @event with this id
                return NotFound();
            }

            //  Return the @event as a JSON object.
            return @event;
        }

        // PUT: api/Events/5
        //
        // Update an individual @event with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Event
        // variable named @event. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Event POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvent(int id, Event @event)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != @event.id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in @event to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from @event
            _context.Entry(@event).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!EventExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(@event);
        }

        // POST: api/Events
        //
        // Creates a new @event in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Event
        // variable named @event. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Event POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Event>> PostEvent(Event @event)
        {
            // Indicate to the database context we want to add this new record
            _context.Events.Add(@event);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetEvent", new { id = @event.id }, @event);
        }

        // DELETE: api/Events/5
        //
        // Deletes an individual @event with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            // Find this @event by looking for the specific id
            var @event = await _context.Events.FindAsync(id);
            if (@event == null)
            {
                // There wasn't a @event with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Events.Remove(@event);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(@event);
        }

        // Private helper method that looks up an existing @event by the supplied id
        private bool EventExists(int id)
        {
            return _context.Events.Any(@event => @event.id == id);
        }
    }
}
