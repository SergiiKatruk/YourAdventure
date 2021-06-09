using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using YourAdventure.API.Models;
using YourAdventure.API.Repository.Settigns;

namespace YourAdventure.API.Repository
{
	public class AdventuresRepository
	{
		private readonly IMongoCollection<Adventure> _adventures;

		public AdventuresRepository(IStoreDatabaseSettings settings)
		{
			var client = new MongoClient(settings.ConnectionString);
			var database = client.GetDatabase(settings.DatabaseName);

			_adventures = database.GetCollection<Adventure>("Adventures");
		}

		public List<Adventure> AllAdventures() => _adventures.AsQueryable().ToList();

		public Adventure CreateAdventure(Adventure adventure)
		{
			adventure.id = Guid.NewGuid().ToString();
			_adventures.InsertOne(adventure);
			return adventure;
		}

		public void DeleteAdventure(string id) => _adventures.DeleteOne(adventure => adventure.id == id);

		public Adventure EditAdventure(Adventure updatedAdventure)
		{
			var replaceResult = _adventures.ReplaceOne(goods => goods.id == updatedAdventure.id, updatedAdventure);

			return _adventures.Find(g => g.id == replaceResult.UpsertedId.AsString).FirstOrDefault();
		}
	}
}
