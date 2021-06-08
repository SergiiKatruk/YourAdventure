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

		public EventsController(FaceBookRepository fbRepo) =>
			this.fbRepo = fbRepo ?? throw new ArgumentNullException(nameof(fbRepo));

		[HttpGet]
		public IEnumerable<dynamic> Get() =>
			((IEnumerable<dynamic>)this.fbRepo.GetFBGroupEvents().data).
			Where(ev => Facebook.DateTimeConvertor.FromIso8601FormattedDateTime(ev.start_time) > DateTime.Now);
	}
}
