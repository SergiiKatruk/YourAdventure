using System;
using System.Collections.Generic;

namespace YourAdventure.API.Models
{
	public class Adventure
	{
		public DateTime? start_time { get; set; }
		public DateTime? end_time { get; set; }
		public string name { get; set; }
		public string description { get; set; }
		public int? interested_count { get; set; }
		public int? attending_count { get; set; }
		public int? maybe_count { get; set; }
		public Cover cover { get; set; }
		public List<Trek> Treks { get; set; }
		public string id { get; set; }
		public string ticket_uri { get; set; }
		public Place place { get; set; }
	}
}
