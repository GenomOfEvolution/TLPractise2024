using CarFactory.Models.Color;

namespace CarFactory.Factory;
public static class ColorFactory
{
    public static IColor CreateCarColor()
    {
        Console.WriteLine( $"Choose your new car color: \n" +
            $"[1] - Black\n" +
            $"[2] - Blue\n" +
            $"[3] - Green\n" +
            $"[4] - Red\n");
        while ( true )
        {
            Console.Write( "Choose wisely: " );
            switch ( Console.ReadLine().Trim().ToLower() )
            {
                case "1":
                    return new ColorBlack();
                case "2":
                    return new ColorBlue();
                case "3":
                    return new ColorGreen();
                case "4":
                    return new ColorRed();
                default:
                    Console.WriteLine( "Unknown command!" );
                    break;
            }
        }
    }
}
