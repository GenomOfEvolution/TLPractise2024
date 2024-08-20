using Fighters.Models;

namespace Fighters.Extensions;

public static class FighterExtensions
{
    public static bool IsAlive(this Fighter fighter) => fighter.GetCurrentHealth() > 0;
 }
