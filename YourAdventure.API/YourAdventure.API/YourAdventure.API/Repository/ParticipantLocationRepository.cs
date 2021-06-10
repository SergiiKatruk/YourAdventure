using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourAdventure.API.Models;
using YourAdventure.API.Repository.Settigns;

namespace YourAdventure.API.Repository
{
	public class ParticipantLocationRepository
	{
		private readonly IMongoCollection<ParticipantLocation> _participantLocations;

		public ParticipantLocationRepository(IStoreDatabaseSettings settings)
		{
			var client = new MongoClient(settings.ConnectionString);
			var database = client.GetDatabase(settings.DatabaseName);

			_participantLocations = database.GetCollection<ParticipantLocation>("ParticipantLocations");
		}

		public List<ParticipantLocation> AllLocations() => _participantLocations.AsQueryable().ToList();

		public ParticipantLocation LogLocation(ParticipantLocation participantLocation)
		{
			participantLocation.id = Guid.NewGuid().ToString();
			_participantLocations.InsertOne(participantLocation);
			return participantLocation;
		}

		public void DeleteLocation(string id) => _participantLocations.DeleteOne(participantLocation => participantLocation.id == id);

		public ParticipantLocation EditLocation(ParticipantLocation updatedParticipantLocation)
		{
			var replaceResult = _participantLocations.ReplaceOne(participantLocation => participantLocation.id == updatedParticipantLocation.id, updatedParticipantLocation);

			return _participantLocations.Find(g => g.id == replaceResult.UpsertedId.AsString).FirstOrDefault();
		}
	}
}
