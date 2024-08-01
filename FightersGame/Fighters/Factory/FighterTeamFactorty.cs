using Fighters.Models;
using Fighters.Models.Weapons;
using static FighterFactory;

namespace Fighters.Factory;
public static class FighterTeamFactorty
{
    public static FighterTeam CreateTeam()
    {
        FighterTeam team = new FighterTeam();

        Console.Write("Choose your team name: ");
        string TeamName = Console.ReadLine().Trim();

        while (string.IsNullOrWhiteSpace(TeamName))
        {
            Console.WriteLine("Fighter name must not be empty!");
            Console.Write("Choose your fighter name: ");
            TeamName = Console.ReadLine().Trim();
        }

        team.teamName = TeamName;

        Console.Write("How many fighters in your team: ");
        int fightersAmount = 0;
        while (!int.TryParse(Console.ReadLine(), out fightersAmount) || !(fightersAmount > 0))
        {
            Console.WriteLine("Team should have at least 1 fighter!");
            Console.Write("How many fighters in your team: ");
        }

        for (int i = 0; i < fightersAmount; i++)
        {
            Fighter fighter = CreateFighter();
            team.fighters.Add(fighter);
        }

        team.CalcMaxInitiativity();
        Console.WriteLine();

        return team;
    }
}
