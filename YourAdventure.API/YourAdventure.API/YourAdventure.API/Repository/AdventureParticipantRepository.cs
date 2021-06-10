using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using YourAdventure.API.Models;
using YourAdventure.API.Repository.Settigns;

namespace YourAdventure.API.Repository
{
	public class AdventureParticipantRepository
	{
		private readonly IMongoCollection<AdventureParticipant> _adventureParticipants;
		
		public AdventureParticipantRepository(IStoreDatabaseSettings settings)
		{
			var client = new MongoClient(settings.ConnectionString);
			var database = client.GetDatabase(settings.DatabaseName);

			_adventureParticipants = database.GetCollection<AdventureParticipant>("AdventureParticipants");
		}

		public List<AdventureParticipant> AllParticipants() => _adventureParticipants.AsQueryable().ToList();

		public AdventureParticipant AddParticipant(AdventureParticipant participant)
		{
			participant.id = Guid.NewGuid().ToString();
			_adventureParticipants.InsertOne(participant);
			return participant;
		}

		public void DeleteParticipant(string id) => _adventureParticipants.DeleteOne(participant => participant.id == id);

		public AdventureParticipant EditParticipant(AdventureParticipant updatedParticipant)
		{
			var replaceResult = _adventureParticipants.ReplaceOne(participant => participant.id == updatedParticipant.id, updatedParticipant);

			return _adventureParticipants.Find(g => g.id == replaceResult.UpsertedId.AsString).FirstOrDefault();
		}
	}
}
