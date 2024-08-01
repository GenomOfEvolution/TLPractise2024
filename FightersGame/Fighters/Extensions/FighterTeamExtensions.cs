using Fighters.Models;
namespace Fighters.Extensions;
public static class FighterTeamExtensions
{
    public static bool IsTeamAlive(this FighterTeam team) => (team.fighters.Count > 0);
}
