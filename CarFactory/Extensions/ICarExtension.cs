using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarFactory.Models.Car;

namespace CarFactory.Extensions;
public static class ICarExtension
{
    public static void GetCarInfo( this ICar car )
    {
        Console.WriteLine( "Your car model: " );
        Console.WriteLine( $"Car name: {car.Name}" );
        Console.WriteLine( $"Car engine: {car.Engine.Name}" );
        Console.WriteLine( $"Car gearbox: {car.Gearbox.Name}" );
        Console.WriteLine( $"Car carcase type: {car.Carcase.Name}" );
        Console.WriteLine( $"Car color: {car.Color.Name}" );

        Console.WriteLine( $"Car max speed: {car.MaxSpeed}" );
        Console.WriteLine( $"Car gear count: {car.GearCount}" );
    }
}
