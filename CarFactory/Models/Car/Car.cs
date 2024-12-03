using CarFactory.Models.Carcase;
using CarFactory.Models.Color;
using CarFactory.Models.Engine;
using CarFactory.Models.Gearbox;

namespace CarFactory.Models.Car;
public class Car : ICar
{
    private string _name { get; }
    private IGearbox _gearbox { get; }
    private IEngine _engine { get; }
    private IColor _color { get; }
    private ICarcase _carcase { get; }

    public Car( string name, IGearbox gearbox, IEngine engine, IColor color, ICarcase carcase )
    {
        _name = name;
        _gearbox = gearbox;
        _engine = engine;
        _color = color;
        _carcase = carcase;
    }

    public string Name => _name;
    public IColor Color => _color;
    public IGearbox Gearbox => _gearbox;
    public IEngine Engine => _engine;
    public ICarcase Carcase => _carcase;

    public decimal MaxSpeed => ( decimal )( _color.SpeedAmp * Math.Sqrt( ( _engine.Power / _carcase.Weight * _gearbox.Gears ) ) * 20 );
    public int GearCount => ( int )( _gearbox.Gears + Math.Ceiling( _color.SpeedAmp ) );
}
