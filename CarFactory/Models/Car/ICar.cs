using CarFactory.Models.Carcase;
using CarFactory.Models.Color;
using CarFactory.Models.Engine;
using CarFactory.Models.Gearbox;

namespace CarFactory.Models.Car;
public interface ICar
{
    public string Name { get; }
    public IGearbox Gearbox { get; }
    public IEngine Engine { get; }
    public IColor Color { get; }
    public ICarcase Carcase { get; }

    public decimal MaxSpeed { get; }
    public int GearCount { get; }
}
