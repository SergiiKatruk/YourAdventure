namespace YourAdventure.API.Repository.Settigns
{
    public class StoreDatabaseSettings : IStoreDatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
