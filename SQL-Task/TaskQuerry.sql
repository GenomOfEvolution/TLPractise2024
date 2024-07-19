-- Ќайдите все доступные номера дл€ бронировани€ сегодн€.
SELECT * 
	FROM 
		dbo.bookings
		JOIN dbo.rooms
		ON availability = 1
	WHERE GETDATE() NOT BETWEEN check_in_date AND check_out_date;

-- Ќайдите всех клиентов, чьи фамилии начинаютс€ с буквы "S".
SELECT *
	FROM dbo.customers
	WHERE last_name LIKE 'S%';

-- Ќайдите все бронировани€ дл€ определенного клиента (по имени или электронному адресу).
SELECT *
	FROM 
		dbo.bookings
		JOIN dbo.customers
		ON dbo.customers.email = 'oleg_nechaev@mail.ru';

-- Ќайдите все бронировани€ дл€ определенного номера.
SELECT *
	FROM 
		dbo.bookings
		JOIN dbo.rooms
		ON rooms.room_id = bookings.room_id
	WHERE room_number = 19;

-- Ќайдите все номера, которые не забронированы на определенную дату.
SELECT *
	FROM 
		dbo.rooms
		JOIN dbo.bookings
		ON rooms.room_id = bookings.room_id
	WHERE CONVERT(DATETIME,'2024-08-14', 102) NOT BETWEEN bookings.check_in_date AND bookings.check_out_date;
