using Fighters.Models;

namespace Fighters.Models.Weapons;

public interface IWeapon
{
    public enum DamageType
    {
        physical = 0,
        magical,
        pure
    }

    public string Name { get; }
    public int Damage { get; }
    public IWeapon.DamageType DmgType { get; }
}
