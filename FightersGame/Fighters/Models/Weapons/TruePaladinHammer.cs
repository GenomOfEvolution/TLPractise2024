using Fighters.Models;

namespace Fighters.Models.Weapons;
public class TruePaladinHammer : IWeapon
{ 
    public string Name => "Triactis' True Paladinian Mage-Hammer of Might";
    public int Damage => 777;
    public IWeapon.DamageType DmgType => IWeapon.DamageType.pure;

}
