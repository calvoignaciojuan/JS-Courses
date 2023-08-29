create database holamundo;
show databases;
use holamundo;
CREATE TABLE animales (
	id int,
    tipo varchar(255),
    estado varchar(255),
    PRIMARY KEY (id)    
);
-- modifico configuracion de una columna
ALTER TABLE animales MODIFY COLUMN id int auto_increment;

-- para ver comando de como fue creada la tabla
SHOW CREATE TABLE animales;

-- respuesta
CREATE TABLE `animales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- insertar registro
INSERT INTO animales (tipo, estado) VALUES ('chanchito','feliz');
INSERT INTO animales (tipo, estado) VALUES ('dragon','feliz');
INSERT INTO animales (tipo, estado) VALUES ('felipe','triste');

-- consultar data
SELECT * FROM animales;
SELECT * FROM animales WHERE id = 3;
SELECT * FROM animales WHERE estado = 'feliz';
SELECT * FROM animales WHERE estado = 'feliz' and tipo = 'chanchito';

-- cambiar valor de registro
UPDATE animales SET estado = 'feliz' where id = 3;

-- ERROR por que siempre que se borra se tiene que indicar un id
DELETE from animales where estado = 'feliz';

DELETE from animales where id = 3;
SELECT * FROM animales;

-- ERROR por que siempre que se updatea se tiene que indicar un id
UPDATE animales set estado = 'triste' where tipo = 'dragon';