namespace YourAdventure.API.Repository.Settigns
{
    public interface IStoreDatabaseSettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
