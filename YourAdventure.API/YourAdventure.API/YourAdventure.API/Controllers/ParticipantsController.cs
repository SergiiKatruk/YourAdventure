using Microsoft.AspNetCore.Mvc;
using System;
using YourAdventure.API.Models;
using YourAdventure.API.Repository;

namespace YourAdventure.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ParticipantsController : ControllerBase
	{
		private readonly AdventureParticipantRepository _repository;

		public ParticipantsController(AdventureParticipantRepository repository) =>
			_repository = repository ?? throw new ArgumentNullException(nameof(repository));

		[HttpPost]
		public AdventureParticipant AddParticipant(AdventureParticipant participant) =>
			_repository.AddParticipant(participant);
	}
}
