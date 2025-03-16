-- Creación de la base de datos
CREATE DATABASE QfindeR;
USE QfindeR;

-- Tabla de usuarios
CREATE TABLE Usuario (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Identificacion VARCHAR(50) NOT NULL UNIQUE,
    CorreoElectronico VARCHAR(100) NOT NULL UNIQUE,
    Contrasena VARCHAR(255) NOT NULL,
    Rol ENUM('Acudiente', 'Cuidador', 'Entidad') NOT NULL,
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de pacientes
CREATE TABLE Paciente (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Edad INT NOT NULL,
    TipoDependencia TEXT NOT NULL,
    ContactoEmergencia VARCHAR(100) NOT NULL,
    EntidadID INT,
    FOREIGN KEY (EntidadID) REFERENCES Usuario(ID)
);

-- Tabla de entidades
CREATE TABLE Entidad (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Identificacion VARCHAR(50) NOT NULL UNIQUE,
    Contacto VARCHAR(100) NOT NULL,
    InformacionServicio TEXT
);

-- Tabla de cuidadores
CREATE TABLE Cuidador (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Edad INT NOT NULL,
    Estudios VARCHAR(255),
    EntidadID INT,
    FOREIGN KEY (EntidadID) REFERENCES Entidad(ID)
);

-- Tabla de actividades
CREATE TABLE Actividad (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    PacienteID INT NOT NULL,
    CuidadorID INT NOT NULL,
    Descripcion TEXT NOT NULL,
    FechaHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    QR_Code VARCHAR(255),
    FOREIGN KEY (PacienteID) REFERENCES Paciente(ID),
    FOREIGN KEY (CuidadorID) REFERENCES Cuidador(ID)
);

-- Tabla de notas médicas
CREATE TABLE Nota_Medica (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    PacienteID INT NOT NULL,
    AutorID INT NOT NULL,
    Contenido TEXT NOT NULL,
    FechaHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    imagen VARCHAR(20),
    FOREIGN KEY (PacienteID) REFERENCES Paciente(ID),
    FOREIGN KEY (AutorID) REFERENCES Usuario(ID)
);

-- Tabla de mensajes
CREATE TABLE Mensaje (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmisorID INT NOT NULL,
    ReceptorID INT NOT NULL,
    Contenido TEXT NOT NULL,
    FechaHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (EmisorID) REFERENCES Usuario(ID),
    FOREIGN KEY (ReceptorID) REFERENCES Usuario(ID)
);

