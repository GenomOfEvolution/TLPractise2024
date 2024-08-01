using Fighters.Models;
using static Fighters.Factory.FighterTeamFactorty;

namespace Fighters;

public class Program
{
    public static void Main(string[] args)
    {
        var gameManager = new GameManager();
        FighterTeam firstTeam = CreateTeam();
        FighterTeam secondTeam = CreateTeam();

        var winner = gameManager.Play(firstTeam, secondTeam);
        Console.WriteLine($"Winner team: {winner.teamName}");
        winner.ShowTeam();
    }
}
