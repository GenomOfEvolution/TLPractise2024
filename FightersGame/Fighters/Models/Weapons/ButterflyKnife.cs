namespace Fighters.Models.Weapons;
public class ButterflyKnife : IWeapon
{
    public string Name => "Butterfly knife";
    public int Damage => 36;
    public IWeapon.DamageType DmgType => IWeapon.DamageType.physical;

}
