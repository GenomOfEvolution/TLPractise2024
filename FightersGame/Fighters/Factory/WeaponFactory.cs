using Fighters.Models.Weapons;
namespace Fighters.Factory;

public static class WeaponFactory
{
    private static List<IWeapon> _weapons = [new Fists(), new TruePaladinHammer(), new ButterflyKnife(), new HolyCross(), new StiflingDagger()];
    public static IWeapon CreateWeapon()
    {
        for (int index = 0; index < _weapons.Count; index++)
            Console.WriteLine($"[{index}] - {_weapons[index].Name}");

        Console.Write("Choose fighter's weapon: ");
        int weaponIndex = 0;
        while (!int.TryParse(Console.ReadLine(), out weaponIndex) || !((weaponIndex >= 0) && (weaponIndex < _weapons.Count)))
        {
            Console.WriteLine("Incorrect weapon type!");
            Console.Write("Choose fighter's weapon: ");
        }

        return _weapons[weaponIndex];
    }
}
