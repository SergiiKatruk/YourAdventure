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
		private readonly FaceBookRepository _fbRepo;
		private readonly AdventuresRepository _adventuresRepository;

		public EventsController(FaceBookRepository fbRepo, AdventuresRepository adventuresRepository)
		{
			_fbRepo = fbRepo ?? throw new ArgumentNullException(nameof(fbRepo));
			_adventuresRepository = adventuresRepository ?? throw new ArgumentNullException(nameof(adventuresRepository));
		}

		[HttpGet]
		public IEnumerable<dynamic> Get() => _adventuresRepository.AllAdventures();

		[HttpGet("/api/Events/Fb")]
		public IEnumerable<dynamic> GetFbEvents() => _fbRepo.GetFBGroupEvents().data;

		[HttpPost]
		public Adventure Create(Adventure adventure) => _adventuresRepository.CreateAdventure(adventure);

		[HttpPost("/api/Events/{id}/join")]
		public string JoinAdventure(string id, string userId, string userName)
		{
			return Guid.NewGuid().ToString();
		}
	}
}
