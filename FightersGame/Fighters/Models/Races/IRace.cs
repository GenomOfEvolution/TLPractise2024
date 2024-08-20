namespace Fighters.Models.Races;

public interface IRace
{
    public enum Attribute
    {
        strength = 0,
        dexterity,
        intellegence,
        universal
    }
    public string Name { get; }
    public int Strength { get; }
    public int Dexterity { get; }
    public int Intellegence { get; }
    public IRace.Attribute MainAttribute { get; }
}
