namespace Fighters.Models.Speciality;
public interface ISpeciality
{
    string Name { get; }
    public int CalculateDamage(Fighter you, Fighter enemy);
}
