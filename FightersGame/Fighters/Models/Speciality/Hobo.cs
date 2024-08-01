using Fighters.Models.Weapons;
using static GlobalRandom.RandomGlobal;

namespace Fighters.Models.Speciality;

// Hobo - default class, no specail abilities
public class Hobo : ISpeciality
{
    public string Name => "Hobo";
    public int CalculateDamage(Fighter you, Fighter enemy)
    {
        IWeapon yourWeapon = you.GetWeapon()
;       int yourDamage = you.CalcWhiteDamage() + yourWeapon.Damage;
        yourDamage = (int)((1 - NextDouble(-0.3, 0.3)) * yourDamage);

        int CritChance = you.GetCritChance();
        if (yourWeapon.DmgType != IWeapon.DamageType.physical)
        {
            CritChance = 0;
        }

        if ((int)NextDouble(1, 100) <= CritChance)
        {
            Console.Write("Critical Hit! 2x Damage! ");
            yourDamage *= 2;
        }

        Console.WriteLine($"{you.Name} strikes {enemy.Name} with {yourWeapon.Name}!");
        Console.WriteLine($"Dealing {yourDamage} damage!");

        return yourDamage;
    }
}
