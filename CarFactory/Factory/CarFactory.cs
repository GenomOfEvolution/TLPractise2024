using System.Xml.Linq;
using static CarFactory.Factory.CarcaseFactory;
using static CarFactory.Factory.ColorFactory;
using static CarFactory.Factory.GearboxFactory;
using static CarFactory.Factory.EngineFactory;
using CarFactory.Models.Color;
using CarFactory.Models.Gearbox;
using CarFactory.Models.Engine;
using CarFactory.Models.Carcase;
using CarFactory.Models.Car;

namespace CarFactory.Factory;
public static class CarFactory
{
    public static ICar CreateCar()
    {
        Console.Write( "Choose your car model name: " );
        string Name = Console.ReadLine().Trim();
        while ( string.IsNullOrWhiteSpace( Name ) )
        {
            Console.WriteLine( "Car model name must not be empty!" );
            Console.Write( "Choose your car model name: " );
            Name = Console.ReadLine().Trim();
        }

        IColor Color = CreateCarColor();
        IGearbox Gearbox = CreateGearbox();
        IEngine Engine = CreateEngine();
        ICarcase Carcase = CreateCarcase();

        return new Car(Name, Gearbox, Engine, Color, Carcase);
    }
}

