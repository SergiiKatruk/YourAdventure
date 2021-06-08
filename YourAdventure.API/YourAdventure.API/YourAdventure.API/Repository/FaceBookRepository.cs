using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourAdventure.API.Repository
{
	public class FaceBookRepository
	{
		private static string currentToken = string.Empty;

		private static void RefreshToken()
		{
			var appId = "922302211175164";
			var appSecret = "8e238a10634e17196c459d7cb3fcdf4f";
			var shortLivedToken = "EAANG1DesMvwBAKbU3Qo5AYlOLrEaIr7qh8YpZCsF5LHZCwBZBZAHqD2zUJet3HrU5nUR26GehQ9u4pqOkBy66V5ZBMxZAENf8b4X52KzIeq2ytqDTaYDMVkL4ZAox35fVfXqSXF5fPfYB2B0RgyqAYZBccJQUnlPw0FtjZAmcthOsj0XnA1r8kMMC5tb8KoAwZCQZCxGueX0VN4tEfvGZB4ZCOhXpI4HCz8Bd5BEZD";
			var fbclient = new Facebook.FacebookClient();
			dynamic tokenResponse = fbclient.Get($"oauth/access_token?grant_type=fb_exchange_token&client_id={appId}&client_secret={appSecret}&fb_exchange_token={shortLivedToken}");
			currentToken = tokenResponse.access_token;
		}

		private dynamic MakeRequest(string uri, int retry = 0)
		{
			if (retry > 5)
				throw new Exception("Cannot make FB request!");
			if (string.IsNullOrWhiteSpace(currentToken))
				RefreshToken();
			var fbclient = new Facebook.FacebookClient(currentToken);
			try
			{
				return fbclient.Get(uri);
			}
			catch
			{
				RefreshToken();
				return MakeRequest(uri, retry++);
			}
		}

		public dynamic GetFBGroupEvents()
		{
			var groupId = "802789417021794";
			var uri = $"{groupId}/events?fields=description, name, id, start_time, end_time, cover";
			return this.MakeRequest(uri);
		}
	}
}
