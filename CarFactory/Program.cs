using CarFactory.Models.Car;
using static CarFactory.Factory.CarFactory;
using CarFactory.Extensions;

ICar car = CreateCar();
car.GetCarInfo();
