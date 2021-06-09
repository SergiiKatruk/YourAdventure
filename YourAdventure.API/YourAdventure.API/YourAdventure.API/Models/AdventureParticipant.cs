using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourAdventure.API.Models
{
	public class AdventureParticipant
	{
		public string id { get; set; }
		public string phoneNumber { get; set; }
		public string phoneName { get; set; }
		public DateTime startDate { get; set; }
		public string name { get; set; }
		public string adventureId { get; set; }
		public string trekId { get; set; }
	}
}
