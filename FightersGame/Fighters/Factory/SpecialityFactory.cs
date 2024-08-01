using Fighters.Models.Speciality;
namespace Fighters.Factory;

public static class SpecialityFactory
{
    private static List<ISpeciality> _specialities = [new Hobo(), new Assasin(), new Nerd(), new Monk()];
    public static ISpeciality CreateSpeciality()
    {
        for (int index = 0; index < _specialities.Count; index++)
            Console.WriteLine($"[{index}] - {_specialities[index].Name}");

        Console.Write("Choose fighter's speciality: ");
        int specialityIndex = 0;
        while (!int.TryParse(Console.ReadLine(), out specialityIndex) || !((specialityIndex >= 0) && (specialityIndex < _specialities.Count)))
        {
            Console.WriteLine("Incorrect speciality type!");
            Console.Write("Choose fighter's speciality: ");
        }

        return _specialities[specialityIndex];
    }
}
