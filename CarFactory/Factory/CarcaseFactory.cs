using CarFactory.Models.Carcase;

namespace CarFactory.Factory;
public static class CarcaseFactory
{
    public static ICarcase CreateCarcase()
    {
        Console.WriteLine( $"Choose your new car carcase: \n" +
            $"[1] - Supercar\n" +
            $"[2] - Sedan\n" +
            $"[3] - Passenger\n" );
        while ( true )
        {
            Console.Write( "Choose wisely: " );
            switch ( Console.ReadLine().Trim().ToLower() )
            {
                case "1":
                    return new Supercar();
                case "2":
                    return new Sedan();
                case "3":
                    return new Passenger();
                default:
                    Console.WriteLine( "Unknown command!" );
                    break;
            }
        }
    }
}
