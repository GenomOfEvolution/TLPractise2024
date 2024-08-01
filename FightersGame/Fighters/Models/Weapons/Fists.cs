using Fighters.Models;

namespace Fighters.Models.Weapons;

public class Fists : IWeapon
{
    public string Name => "fists";
    public int Damage => 0;
    public IWeapon.DamageType DmgType => IWeapon.DamageType.physical;
}
