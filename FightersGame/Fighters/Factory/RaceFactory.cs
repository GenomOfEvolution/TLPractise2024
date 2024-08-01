using Fighters.Models.Races;
namespace Fighters.Factory;

public static class RaceFactory
{
    private static List<IRace> _races = [new Human(), new Elf(), new DarkElf(), new Orc()];
    public static IRace CreateRace()
    {
        for (int index = 0; index < _races.Count; index++)
            Console.WriteLine($"[{index}] - {_races[index].Name}");

        Console.Write("Choose fighter's race: ");
        int raceIndex = 0;
        while (!int.TryParse(Console.ReadLine(), out raceIndex) || !((raceIndex >= 0) && (raceIndex < _races.Count)))
        {
            Console.WriteLine("Incorrect race type!");
            Console.Write("Choose fighter's race: ");
        }

        return _races[raceIndex];
    }
}
