using Microsoft.AspNetCore.Mvc;
using System;
using YourAdventure.API.Models;
using YourAdventure.API.Repository;

namespace YourAdventure.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class GeoLocationController : ControllerBase
	{
		private readonly ParticipantLocationRepository _repository;

		public GeoLocationController(ParticipantLocationRepository repository) =>
			_repository = repository ?? throw new ArgumentNullException(nameof(repository));

		[HttpPost]
		public void LogLocation(ParticipantLocation participantLocation) =>
			_repository.LogLocation(participantLocation);
	}
}
