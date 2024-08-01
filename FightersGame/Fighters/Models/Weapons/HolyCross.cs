namespace Fighters.Models.Weapons;
public class HolyCross : IWeapon
{
    public string Name => "Holy cross";
    public int Damage => 77;
    public IWeapon.DamageType DmgType => IWeapon.DamageType.magical;
}
