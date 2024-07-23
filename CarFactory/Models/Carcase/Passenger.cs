using CarFactory.Models.Carcase;

public class Passenger : ICarcase
{
    public string Name => "Passenger";
    public int Weight => 1250;
}