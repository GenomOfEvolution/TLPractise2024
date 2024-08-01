namespace Fighters.Models.Races;
public class DarkElf : IRace
{
    public string Name => "Dark Elf";
    public int Strength => 2;
    public int Dexterity => 3;
    public int Intellegence => 25;
    public IRace.Attribute MainAttribute => IRace.Attribute.intellegence;
}
