namespace Fighters.Models.Races;
public class Elf : IRace
{
    public string Name => "Elf";
    public int Strength => 5;
    public int Dexterity => 20;
    public int Intellegence => 5;
    public IRace.Attribute MainAttribute => IRace.Attribute.dexterity;
}
