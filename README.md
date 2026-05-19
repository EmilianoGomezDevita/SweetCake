SweetCake | E-commerce Full-Stack 🍰

SweetCake es una plataforma de e-commerce para pastelería artesanal, desarrollada con una arquitectura Full-Stack. El proyecto permite a los usuarios realizar pedidos mediante un formulario dinámico, gestionando la persistencia de datos en una base SQL y la comunicación automatizada mediante correo electrónico.

⚙️ Arquitectura Técnica


El proyecto implementa un flujo de datos completo entre el cliente y el servidor:

Frontend: Interfaz interactiva para gestión de carrito y envío de pedidos.

Backend: API REST construida con Node.js y Express que centraliza la lógica de negocio.

Base de Datos: Integración con SQL Server para almacenamiento estructurado de pedidos.

Notificaciones: Servicio automatizado de envío de emails de confirmación vía nodemailer.

🛠️ Tecnologías


Frontend: HTML5, CSS3 / SCSS, JavaScript (ES6+).

Backend: Node.js, Express, mssql (SQL Server driver).

Base de Datos: Microsoft SQL Server.

Integraciones: Nodemailer (Gmail SMTP).

🚀 Funcionalidades Backend


Endpoints REST: Ruta /api/pedidos para el procesamiento de nuevos pedidos.

Persistencia: Inserción de datos transaccional en base de datos (INSERT INTO Pedidos).

Comunicación automatizada: Envío dual de correos:

Notificación interna: Al equipo de SweetCake con los detalles del pedido.

Confirmación al cliente: Mensaje automático de agradecimiento y estado de proceso.

🧠 Desafíos Técnicos Resueltos


Conectividad: Gestión de pools de conexión asíncronos a SQL Server.

Seguridad: Uso de variables de entorno (dotenv) para proteger credenciales de base de datos y servicios de correo.

Arquitectura: Separación de responsabilidades en controllers, routes, config y utils.

📦 Cómo ejecutar el proyecto


1. Clonar el repositorio.

2. Instalar dependencias: npm install express cors mssql nodemailer dotenv.

3 .Configurar el archivo .env con las variables: DB_USER, DB_PASSWORD, DB_SERVER, DB_DATABASE, EMAIL_USER, EMAIL_PASS.

4. Ejecutar el servidor: node index.js.

👨‍💻 Autor

Emiliano Gómez Devita


Estudiante de la Tecnicatura Universitaria en Programación (UTN FRGP). Enfocado en el desarrollo de aplicaciones web Full-Stack.
