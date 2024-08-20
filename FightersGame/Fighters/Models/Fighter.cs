using System;
using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;
using GlobalRandom;
using static Fighters.Models.Weapons.IWeapon;
using static GlobalRandom.RandomGlobal;
using Fighters.Models.Speciality;

namespace Fighters.Models;

public class Fighter
{
    public Fighter(string name, IRace race, ISpeciality speciality, IArmor armor, IWeapon weapon)
    {
        Name = name;
        _race = race;
        _speciality = speciality;
        _armor = armor;
        _weapon = weapon;
        _currentHealth = GetMaxHealth();
        Initiative = (int)NextDouble(1, _race.Dexterity);
    }

    public string Name { get; set;  }
    public int Initiative;

    private IRace _race = new Human();
    private ISpeciality _speciality = new Hobo();
    private IArmor _armor = new NoArmor();
    private IWeapon _weapon = new Fists();
    private int _currentHealth;
    private int _criticalHitChance = 10;

    private int CalculateArmor() => _armor.Armor + _race.Dexterity / 6;
    public int GetCurrentHealth() => _currentHealth;
    public int GetMaxHealth() => _race.Strength * 22 + 110;
    public int GetCritChance() => _criticalHitChance;
    public int GetIntellegence() => _race.Intellegence;

    public IWeapon GetWeapon() => _weapon;

    public void SetArmor(IArmor armor)
    {
        _armor = armor;
    }

    public void SetWeapon(IWeapon weapon)
    {
        _weapon = weapon;
    }

    public void SetSpeciality(ISpeciality speciality)
    {
        _speciality = speciality;
    }

    public void TakeDamage(int damage, DamageType damageType)
    {
        float damageRes = 0.0f;
        string dmgTypeName = "dark";

        switch (damageType)
        {
            case DamageType.physical:
                damageRes = 0.06f * CalculateArmor() / (1 + 0.06f * Math.Abs(CalculateArmor()));
                dmgTypeName = "physical";
                break;
            case DamageType.magical:
                damageRes = 0.25f + _race.Intellegence * 0.001f;
                dmgTypeName = "magical";
                break;
            case DamageType.pure:
                damageRes = 0.0f;
                dmgTypeName = "pure";
                break;
            default:
                damageRes = 0.5f;
                break;
        }

        float damageMult = 1 - damageRes;
        int newHealth = _currentHealth - (int)(damage * damageMult);

        Console.WriteLine($"Fighter {Name} took {(int)(damage * damageMult)} {dmgTypeName} damage!");

        if (newHealth < 0)
        {
            newHealth = 0;
        }

        _currentHealth = newHealth;
    }

    public int CalcWhiteDamage()
    {
        int whiteDamage = 0;
        switch (_race.MainAttribute)
        {
            case IRace.Attribute.strength:
                whiteDamage = _race.Strength;
                break;
            case IRace.Attribute.intellegence:
                whiteDamage = _race.Intellegence;
                break;
            case IRace.Attribute.dexterity:
                whiteDamage = _race.Dexterity;
                break;
            case IRace.Attribute.universal:
                whiteDamage = (int)(_race.Strength * 0.7 + _race.Dexterity * 0.7 + _race.Intellegence * 0.7);
                break;
            default:
                whiteDamage = 10;
                break;
        }
        return whiteDamage;
    }

    public void ShowInfo()
    {
        Console.WriteLine($"Fighter name: {Name}, HP: {_currentHealth}");
        Console.WriteLine($"Race: {_race.Name}, Speciality: {_speciality.Name}");
        Console.WriteLine($"Fighter's weapon: {_weapon.Name}");
    }

    public void Attack(Fighter enemy)
    {
        enemy.TakeDamage(_speciality.CalculateDamage(this, enemy), _weapon.DmgType);
    }
}
