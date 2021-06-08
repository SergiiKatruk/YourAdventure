using System;
using System.Collections.Generic;

namespace YourAdventure.API.Models
{
	public class Event
	{
		public DateTime? Date { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public int MainPhotoId { get; set; }
		public List<int> Photos { get; set; }
		public List<Trek> Treks { get; set; }
	}
}
