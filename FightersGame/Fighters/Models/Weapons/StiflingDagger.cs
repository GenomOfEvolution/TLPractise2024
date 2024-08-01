namespace Fighters.Models.Weapons;
public class StiflingDagger : IWeapon
{
    public string Name => "Stifling daggers";
    public int Damage => 35;
    public IWeapon.DamageType DmgType => IWeapon.DamageType.physical;

}
