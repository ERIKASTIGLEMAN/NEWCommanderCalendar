using System;
using System.ComponentModel.DataAnnotations;

namespace NEWCommanderCalendar.Models
{
    public class Event
    {
        public int id {get; set;}

        [Required]     
        public string EventName {get; set;}
        
        [Required]
        public DateTime EventDateTime {get; set;}
        public string TypeOfEvent {get; set;}
        public string ColorTag {get; set;}
        public string Image {get; set;}
        public string URL {get; set;}
        public string Notes {get; set;}
        
        
    }
}