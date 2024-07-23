using CarFactory.Models.Engine;

namespace CarFactory.Factory;
public static class EngineFactory
{
    public static IEngine CreateEngine()
    {
        Console.WriteLine( $"Choose your new engine: \n" +
            $"[1] - Electric engine\n" +
            $"[2] - V6 Engine\n" );
        while ( true )
        {
            Console.Write( "Choose wisely: " );
            switch ( Console.ReadLine().Trim().ToLower() )
            {
                case "1":
                    return new ElectricEngine();
                case "2":
                    return new V6Engine();
                default:
                    Console.WriteLine( "Unknown command!" );
                    break;
            }
        }
    }
}
