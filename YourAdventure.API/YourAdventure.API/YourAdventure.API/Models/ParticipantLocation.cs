using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourAdventure.API.Models
{
	public class ParticipantLocation
	{
		public string participantId { get; set; }
		public string adventureId { get; set; }
		public DateTime logDate { get; set; }
		public double latitude { get; set; }
		public double longitude { get; set; }
	}
}
