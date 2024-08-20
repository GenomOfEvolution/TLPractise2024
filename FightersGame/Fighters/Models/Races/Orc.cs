namespace Fighters.Models.Races;
public class Orc : IRace
{
    public string Name => "Orc";
    public int Strength => 20;
    public int Dexterity => 5;
    public int Intellegence => 5;
    public IRace.Attribute MainAttribute => IRace.Attribute.strength;
}
