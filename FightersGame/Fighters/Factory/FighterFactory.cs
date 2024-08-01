using Fighters.Models;
using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Speciality;
using Fighters.Models.Weapons;
using static Fighters.Factory.WeaponFactory;
using static Fighters.Factory.RaceFactory;
using static Fighters.Factory.SpecialityFactory;
using static Fighters.Factory.ArmorFactory;

public static class FighterFactory
{
    public static Fighter CreateFighter()
    {
        Console.Write("Choose your fighter name: ");
        string Name = Console.ReadLine().Trim();
        while (string.IsNullOrWhiteSpace(Name))
        {
            Console.WriteLine("Fighter name must not be empty!");
            Console.Write("Choose your fighter name: ");
            Name = Console.ReadLine().Trim();
        }

        IRace race = CreateRace();
        ISpeciality speciality = CreateSpeciality();
        IArmor armor = CreateArmor();
        IWeapon weapon = CreateWeapon();
        
        return new Fighter(Name, race, speciality, armor, weapon);
    }
}
