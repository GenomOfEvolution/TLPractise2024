using Fighters.Extensions;
using static GlobalRandom.RandomGlobal;

namespace Fighters.Models;
public class FighterTeam
{
    public List<Fighter> fighters = new List<Fighter>();
    public string teamName;
    private int _maxInitiativity { get; set; }

    public void CalcMaxInitiativity()
    {
        _maxInitiativity = fighters.Max(fighter => fighter.Initiative);
    }

    public int GetMaxInitiativity()
    {
        return _maxInitiativity;
    }

    public void Attack(FighterTeam enemyTeam)
    {
        foreach (Fighter fighter in fighters)
        {
            int randIndex = (int)NextDouble(0, enemyTeam.fighters.Count);
            if (enemyTeam.IsTeamAlive())
                fighter.Attack(enemyTeam.fighters[randIndex]);
        }
    }

    public void RemoveDeadFighters()
    {
        fighters.RemoveAll(fighter => fighter.IsAlive() == false);
    }

    public void ShowTeam()
    {
        Console.WriteLine($"Team name: {teamName}");
        foreach (Fighter fighter in fighters)
        {
            fighter.ShowInfo();
        }
    }
}
