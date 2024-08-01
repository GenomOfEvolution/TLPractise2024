using Fighters.Models.Weapons;
using static GlobalRandom.RandomGlobal;

namespace Fighters.Models.Speciality;
public class Nerd : ISpeciality
{
    public string Name => "Nerd";
    public int CalculateDamage(Fighter you, Fighter enemy)
    {
        IWeapon yourWeapon = you.GetWeapon();

        int yourDamage = you.CalcWhiteDamage() + yourWeapon.Damage;
        yourDamage = (int)((1 - NextDouble(-0.3, 0.3)) * yourDamage);

        int CritChance = you.GetCritChance();
        if (yourWeapon.DmgType != IWeapon.DamageType.physical)
        {
            CritChance = 0;
        }

        // Nerd ability
        if ((int)NextDouble(1, 100) <= CritChance)
        {
            Console.WriteLine($"{you.Name} says: Uhm actually √... It's not critical damage...");
            int NerdDamage = (you.GetIntellegence() - enemy.GetIntellegence() + (int)NextDouble(5, 10)) * 10;
            yourDamage += NerdDamage;
            if (NerdDamage > 0)
            {
                Console.WriteLine($"Nerd increased his attack by {NerdDamage} - very intellegent!");
            }
            else
            {
                Console.WriteLine($"Ooops nerd isn't smart enough! Nerd damage decreased by {Math.Abs(NerdDamage)}");
            }
        }

        Console.WriteLine($"{you.Name} strikes {enemy.Name} with {yourWeapon.Name}!");
        Console.WriteLine($"Dealing {yourDamage} damage!");

        return yourDamage;
    }
}
