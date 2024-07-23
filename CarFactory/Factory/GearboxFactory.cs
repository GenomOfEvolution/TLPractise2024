using CarFactory.Models.Gearbox;

namespace CarFactory.Factory;
public static class GearboxFactory
{
    public static IGearbox CreateGearbox()
    {
        Console.WriteLine( $"Choose your new gearbox: \n" +
            $"[1] - Automatic gearbox\n" +
            $"[2] - Mechanical gearbox\n" );
        while ( true )
        {
            Console.Write( "Choose wisely: " );
            switch ( Console.ReadLine().Trim().ToLower() )
            {
                case "1":
                    return new AutomaticGearbox();
                case "2":
                    return new MechanicalGearbox();
                default:
                    Console.WriteLine( "Unknown command!" );
                    break;
            }
        }
    }
}
