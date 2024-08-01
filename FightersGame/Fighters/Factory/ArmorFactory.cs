using Fighters.Models.Armors;
namespace Fighters.Factory;

public static class ArmorFactory
{
    private static List<IArmor> _armors = [new NoArmor(), new LeatherArmor(), new Chainmail(), new ShivaGuard(), new AssaultCuirass()];
    public static IArmor CreateArmor()
    {
        for (int index = 0; index < _armors.Count; index++)
            Console.WriteLine($"[{index}] - {_armors[index].Name}");

        Console.Write("Choose fighter's armor: ");
        int armorIndex = 0;
        while (!int.TryParse(Console.ReadLine(), out armorIndex) || !((armorIndex >= 0) && (armorIndex < _armors.Count)))
        {
            Console.WriteLine("Incorrect armor type!");
            Console.Write("Choose fighter's armor: ");
        }

        return _armors[armorIndex];
    }
}
