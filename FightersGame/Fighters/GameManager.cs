using Fighters.Extensions;
using Fighters.Models;

namespace Fighters;

public class GameManager
{
    public FighterTeam Play(FighterTeam teamA, FighterTeam teamB)
    {
        int round = 1;

        FighterTeam firstAttacker;
        FighterTeam secondAttacker;

        if (teamA.GetMaxInitiativity() > teamB.GetMaxInitiativity())
        {
            firstAttacker = teamA;
            secondAttacker = teamB;
        }
        else
        {
            firstAttacker = teamB;
            secondAttacker = teamA;
        }

        Console.WriteLine($"{firstAttacker.teamName} attacks first, with initiative {firstAttacker.GetMaxInitiativity()}!");
        Console.WriteLine($"{secondAttacker.teamName} defends with initiative {secondAttacker.GetMaxInitiativity()}!");

        while (true)
        {
            Console.WriteLine($"Round {round}\n");

            firstAttacker.Attack(secondAttacker);
            if (!secondAttacker.IsTeamAlive())
            {
                firstAttacker.RemoveDeadFighters();
                return firstAttacker;
            }
            firstAttacker.RemoveDeadFighters();
            secondAttacker.RemoveDeadFighters();

            secondAttacker.Attack(firstAttacker);
            if (!firstAttacker.IsTeamAlive())
            {
                secondAttacker.RemoveDeadFighters();
                return secondAttacker;
            }
            firstAttacker.RemoveDeadFighters();
            secondAttacker.RemoveDeadFighters();

            round++;
            Console.WriteLine();
        }
    }
}
