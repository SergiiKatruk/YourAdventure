using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Facebook;

namespace YourAdventure.API.Repository
{
	public class FaceBookRepository
	{
		private static string currentToken = "EAANG1DesMvwBAIsQhWTfzTP9SnErHeApSo6Ba3xeDRhgZCgz46Qi9Fq3WluFMAdPeoY8Qsr9Ec22b1Urcxvg0C1E0rSk0MG2kPOcidgYg3n0sBwi6c8kJVuI825ZBDJOQIk5ZAvqZCkZAnqTWgR53uZCZB67IGmgI5Lv0lI3VYirNiC4oGk58z4";

		private static void RefreshToken()
		{
			var appId = "922302211175164";
			var appSecret = "8e238a10634e17196c459d7cb3fcdf4f";
			var fbclient = new Facebook.FacebookClient();
			dynamic tokenResponse = fbclient.Get($"oauth/access_token?client_id={appId}&client_secret={appSecret}&grant_type=client_credentials&redirect_uri=http://localhost:5000/api/events/fb");
			currentToken = GetLongLivedAccessToken(tokenResponse.access_token);
		}

		public static string GetLongLivedAccessToken(string shortLivedAccessToken)
		{
			var appId = "922302211175164";
			var appSecret = "8e238a10634e17196c459d7cb3fcdf4f";
			var fbclient = new Facebook.FacebookClient();
			dynamic tokenResponse = fbclient.Get($"oauth/access_token?grant_type=fb_exchange_token&" +
				$"client_id={appId}&" +
				$"client_secret={appSecret}&" +
				$"fb_exchange_token={shortLivedAccessToken}");
			return tokenResponse.access_token;
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
			catch(FacebookOAuthException)
			{
				RefreshToken();
				return MakeRequest(uri, retry++);
			}
		}

		public dynamic GetFBGroupEvents()
		{
			var groupId = "802789417021794";
			var appId = "922302211175164";
			var appSecret = "8e238a10634e17196c459d7cb3fcdf4f";
			var uri = $"{groupId}/events?fields=description,name,id,start_time,end_time,cover,ticket_uri,parent_group,place,owner,interested_count,attending_count,maybe_count";
			return this.MakeRequest(uri);
		}
	}
}
