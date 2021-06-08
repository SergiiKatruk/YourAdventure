using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourAdventure.API.Models
{
	public class Trek
	{
		public string Name { get; set; }
		public string TrekUrl { get; set; }
		public string Description { get; set; }
		public int MainPhotoId { get; set; }
		public List<int> Photos { get; set; }
	}
}
