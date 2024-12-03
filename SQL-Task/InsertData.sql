INSERT INTO dbo.rooms (room_number, room_type, price_per_night, availability)
VALUES
	(228, '�����������', 300, 1),
	(1, '����������', 176, 0),
	(2, '�����������', 396, 1), 
	(3, '����������', 364, 0),
	(4, '�����������', 108, 0), 
	(5, '����������', 371, 1),
	(6, '�����������', 394, 0), 
	(7, '����������', 224, 0),
	(8, '����������', 253, 0),
	(9, '�����������', 258, 1), 
	(10, '����������', 332, 1),
	(11, '�����������', 388, 1),
	(12, '�����������', 169, 0),
	(13, '�����������', 376, 1),
	(14, '����������', 181, 0),
	(15, '����������', 239, 1),
	(16, '����������', 341, 0),
	(17, '�����������', 140, 0),
	(18, '�����������', 311, 0),
	(19, '�����������', 245, 0),
	(20, '����������', 174, 0);

INSERT INTO dbo.Customers (first_name, last_name, email, phone_number)
VALUES
	('Oleg', 'Nechaev', 'oleg_nechaev@mail.ru', '+79391110011'),
	('Oleg', 'Olegovich', 'OlegOlegovich@gmail.com', '+79297320211'),
	('Oleg', 'Alegovich', 'OlegAlegovich@gmail.com', '+79297220211'),
	('Oleg', 'Elegovich', 'OlegElegovich@gmail.com', '+79297120211'),
	('Aleg', 'Olegovich', 'AlegOlegovich@gmail.com', '+79297320212'),
	('Aleg', 'Slegovich', 'AlegAlegovich@gmail.com', '+79297020212'),
	('Aleg', 'Elegovich', 'AlegElegovich@gmail.com', '+79297120212'),
	('Eleg', 'Olegovich', 'ElegOlegovich@gmail.com', '+79297420213'),
	('Eleg', 'Alegovich', 'ElegAlegovich@gmail.com', '+79297520213'),
	('Eleg', 'Slegovich', 'ElegElegovich@gmail.com', '+79297320213');


INSERT INTO dbo.facilities(facility_name)
VALUES
	('wi-fi'),
	('����-���'),
	('�����������');

INSERT INTO dbo.roomsToFacilities(facility_id, room_id)
VALUES
  (1,1), -- wifi 228, 20, 19, 18
  (1,21),
  (1,20),
  (1,19),
  (2,2), -- ������� 1, 2, 3, 4
  (2,3), 
  (2,4),
  (2,5),
  (3,6), -- ����������� 5, 6, 7, 8
  (3,7),
  (3,8),
  (3,9);

INSERT INTO dbo.bookings(customer_id, room_id, check_in_date, check_out_date)
VALUES
  (1, 1, '14-08-2024', '16-08-2024'),
  (5, 20, '20-04-1889', '30-04-1945'),
  (3, 18, '30-11-1874', '24-01-1965');