﻿using System.Net;
using System.Xml.Linq;
using System.Xml.Schema;


const string exitPhrase = "exit";
var order = new UserOrder();

PrintAppName();
while ( true )
{
    Console.WriteLine( "Заполните форму доставки" );
    order = GetUserOrder();
    if ( CheckOrderCorrectness( order ) )
    {
        SuccesfullOrderMessage( order );
    }
    else
    {
        Console.WriteLine( "Отменяем заказ..." );
    }
    Console.WriteLine( "Хотите заказать что-то еще?" );
    Console.Write( $"Или введите \"{exitPhrase}\"  для выхода: " );
    if ( Console.ReadLine() == exitPhrase )
    {
        Console.WriteLine( "До свидания!" );
        break;
    }
}

static void PrintAppName()
{
    Console.WriteLine( "Order Manager" );
}

static string GetNotEmptyString( string paramName )
{
    Console.Write( $"Введите {paramName}: " );
    string str = Console.ReadLine();
    while ( string.IsNullOrWhiteSpace( str ) )
    {
        Console.WriteLine( "Поле не должно быть пустым, введите его еще раз" );
        str = Console.ReadLine();
    }
    return str;
}
static bool CheckOrderCorrectness( UserOrder order )
{
    const string positiveAnswer = "да";
    Console.WriteLine( $"Здравствуйте, {order.name}, вы заказали {order.productCount} {order.product} на адрес {order.address}, все верно?" );
    Console.Write( $"Введите \"{positiveAnswer}\" для подтверждения: " );

    return ( Console.ReadLine() == positiveAnswer );
}

static decimal GetCorrectItemCount()
{
    decimal count;
    Console.Write( "Введите количество товара: " );
    while ( !decimal.TryParse( Console.ReadLine(), out count ) || !( count > 0 ) )
    {
        Console.WriteLine( "Кол-во товара должно быть положительным числом" );
    }

    return count;
}
static UserOrder GetUserOrder()
{
    var userOrder = new UserOrder();
    userOrder.name = GetNotEmptyString( "ваше имя" );
    userOrder.address = GetNotEmptyString( "ваш адрес" );
    userOrder.product = GetNotEmptyString( "наименование товара" );
    userOrder.productCount = GetCorrectItemCount();

    return userOrder;
}
static void SuccesfullOrderMessage( UserOrder userOrder )
{
    var now = DateTime.Now;
    Console.WriteLine( $"{userOrder.name}! Ваш заказ {userOrder.product} в количестве {userOrder.productCount} оформлен! Ожидайте доставку по адресу {userOrder.address} к {now.AddDays( 3 ).ToString( "D" )}" );
}
struct UserOrder
{
    public string name, address, product;
    public decimal productCount;
}