namespace GlobalRandom;
public static class RandomGlobal
{
    private static readonly Random _random = new Random();

    public static double NextDouble(double minValue, double maxValue)
    {
        return _random.NextDouble() * (maxValue - minValue) + minValue;
    }
}
