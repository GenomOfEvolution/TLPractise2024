USE HotelManagement
-- Rooms
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='rooms')
	CREATE TABLE dbo.rooms (
		room_id INT IDENTITY(1,1) NOT NULL,

		room_number INT NOT NULL,
		room_type NVARCHAR(50) NOT NULL DEFAULT 'обычная',
		price_per_night MONEY NOT NULL,
		availability BIT NOT NULL,

		CONSTRAINT PK_rooms_room_id PRIMARY KEY (room_id)
	)

-- Customers
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='customers')
	CREATE TABLE dbo.customers (
		customer_id INT IDENTITY(1,1),
		
		first_name NVARCHAR(50) NOT NULL,
		last_name NVARCHAR(50) NOT NULL,
		email NVARCHAR(50) NOT NULL,
		phone_number NVARCHAR(16) NOT NULL,

		CONSTRAINT PK_customers_customer_id PRIMARY KEY (customer_id)
	)

-- Bookings
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='bookings')
	CREATE TABLE dbo.bookings (
		booking_id INT IDENTITY(1,1),

		customer_id INT NOT NULL,
		CONSTRAINT FK_booking_customer_id
			FOREIGN KEY (customer_id) REFERENCES dbo.customers(customer_id),

		room_id INT NOT NULL,
		CONSTRAINT FK_booking_room_id
			FOREIGN KEY (room_id) REFERENCES dbo.rooms(room_id),

		check_in_date DATE NOT NULL,
		check_out_date DATE NOT NULL,

		CONSTRAINT PK_bookings_booking_id PRIMARY KEY (booking_id)
	)

-- Facilities
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='facilities')
	CREATE TABLE dbo.facilities (
		facility_id INT IDENTITY(1,1),

		facility_name NVARCHAR(50) NOT NULL,

		CONSTRAINT PK_facilities_facility_id PRIMARY KEY (facility_id)
	)

-- RoomsToFacilities
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='roomsToFacilities')
	CREATE TABLE dbo.roomsToFacilities (
		room_id INT NOT NULL,
		CONSTRAINT FK_roomsToFacilities_room_id
			FOREIGN KEY (room_id) REFERENCES dbo.rooms(room_id),

		facility_id INT NOT NULL,
		CONSTRAINT FK_roomsToFacilities_facility_id
			FOREIGN KEY (facility_id) REFERENCES dbo.facilities(facility_id)
	)