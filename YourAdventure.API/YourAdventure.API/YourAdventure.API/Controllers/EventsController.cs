using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourAdventure.API.Models;
using YourAdventure.API.Repository;

namespace YourAdventure.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class EventsController : ControllerBase
	{
		private readonly FaceBookRepository fbRepo;
		private readonly AdventuresRepository adventuresRepository;

		public EventsController(FaceBookRepository fbRepo, AdventuresRepository adventuresRepository)
		{
			this.fbRepo = fbRepo ?? throw new ArgumentNullException(nameof(fbRepo));
			this.adventuresRepository = adventuresRepository ?? throw new ArgumentNullException(nameof(adventuresRepository));
		}

		[HttpGet]
		public IEnumerable<dynamic> Get()
		{
			//return ((IEnumerable<dynamic>)this.fbRepo.GetFBGroupEvents().data).
			//Where(ev => Facebook.DateTimeConvertor.FromIso8601FormattedDateTime(ev.start_time) > DateTime.Now);
			return this.adventuresRepository.AllAdventures();
		}

		[HttpPost]
		public Adventure Create(Adventure adventure) => this.adventuresRepository.CreateAdventure(adventure);

		[HttpPost("/api/Events/{id}/join")]
		public string JoinAdventure(string id, string userId, string userName)
		{
			return Guid.NewGuid().ToString();
		}
	}
}
