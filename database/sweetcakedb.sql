use SweetCakeDB
go

--tabla Clientes

--tabla Productos
/*
create table Pedidos
(
	codPedido_P int identity(1,1) not null,

	codCliente int identity(1, 1) not null,

	--nroVenta int identity(1, 1) not null,

	fecha date not null,

	monto decimal(18, 1) not null

	constraint PK_Pedidos primary key(codPedido_P)
	--FK de codCliete
)
*/

--Tabla de Gemini
create table Pedidos
(
	codPedido_P int identity(1,1) not null,

	cliente  varchar(100) null,

	producto  varchar(100),

	cantidad int null,

	fecha datetime default GETDATE() not null,

	constraint PK_Pedidos primary key(codPedido_P)
)
GO

alter table Pedidos add email varchar(50) null
GO

alter table Pedidos alter column cantidad varchar (max) 
GO

-- Cambiar nombre columna cantidad a descripcion
EXEC sp_rename 'Pedidos.cantidad', 'descripcion', 'COLUMN';
GO
-- Cambiar nombre columna producto a servicio
EXEC sp_rename 'Pedidos.producto', 'servicio', 'COLUMN';
GO
select * from Pedidos
GO