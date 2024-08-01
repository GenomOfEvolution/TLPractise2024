using Fighters.Models.Weapons;
using static GlobalRandom.RandomGlobal;

namespace Fighters.Models.Speciality;

// Monk - specaial ability "Carate" - if fighting with his bare hands - deal up to 2.5 more damage
public class Monk : ISpeciality
{
    public string Name => "Monk";
    public int CalculateDamage(Fighter you, Fighter enemy)
    {
        IWeapon yourWeapon = you.GetWeapon()
;
        int yourDamage = you.CalcWhiteDamage() + yourWeapon.Damage;
        if (yourWeapon is Fists)
        {
            yourDamage = (int)(yourDamage * NextDouble(1.5, 2.5));
        }

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
