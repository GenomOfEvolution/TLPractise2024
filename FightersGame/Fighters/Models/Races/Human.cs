namespace Fighters.Models.Races;

public class Human : IRace
{
    public string Name => "Human";
    public int Strength => 10;
    public int Dexterity => 10;
    public int Intellegence => 10;
    public IRace.Attribute MainAttribute => IRace.Attribute.universal;
}
