/*
DROP DATABASE IF EXISTS derm_assist;
CREATE DATABASE derm_assist;
*/
USE derm_assist;
/*
CREATE TABLE user (
	user_id VARCHAR(255) PRIMARY KEY NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE prediction (
	prediction_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    probability DECIMAL(5,4) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    user_id VARCHAR(255) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

CREATE TABLE clinic (
	clinic_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    address VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    cell_phone CHAR(9) NOT NULL,
    doctor_name VARCHAR(255) NOT NULL
);

-- Insertando clínicas
INSERT INTO clinic (name, description, address, image_url, cell_phone, doctor_name) VALUES
('DermaVida', 'Clínica especializada en dermatología clínica y estética, con atención personalizada.', 'Av. Los Olivos 123, Lima', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '987654321', 'Dra. Mariana Torres'),
('Piel & Salud', 'Centro dermatológico con tecnología de punta para el cuidado integral de la piel.', 'Calle Primavera 456, Arequipa', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '912345678', 'Dr. Carlos Gómez'),
('Dermatológica Integral', 'Atención especializada en acné, manchas, y rejuvenecimiento facial.', 'Jr. Los Sauces 789, Trujillo', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '998877665', 'Dra. Ana Beltrán'),
('Clínica Cutis', 'Expertos en tratamientos para enfermedades de la piel y dermocosmética.', 'Av. Brasil 1001, Lima', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '976543210', 'Dr. Luis Rivas'),
('DermaEstética Perú', 'Tratamientos dermatológicos y estéticos con enfoque en resultados naturales.', 'Calle Central 300, Cusco', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '933112244', 'Dra. Paola Núñez'),
('Centro DermaCare', 'Consultas, tratamientos y procedimientos dermatológicos con experiencia.', 'Av. América Sur 500, Trujillo', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '945667788', 'Dr. Ernesto Mejía'),
('DermaClinic Sur', 'Especialistas en piel, cabello y uñas. Diagnóstico preciso y eficaz.', 'Av. Grau 210, Tacna', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '934556677', 'Dra. Isabel Mendoza'),
('SkinCare Plus', 'Clínica dermatológica moderna enfocada en salud y estética.', 'Jr. Piura 150, Piura', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '988123456', 'Dr. Andrés Quispe'),
('Clínica DermoSalud', 'Soluciones efectivas para problemas dermatológicos comunes y complejos.', 'Av. Javier Prado Este 2020, Lima', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '977889900', 'Dra. Cecilia Vargas'),
('Dermocenter Andino', 'Atención dermatológica especializada con enfoque integral y ético.', 'Calle Bolívar 45, Huancayo', 'https://www.clinicadelapiel.com/wp-content/uploads/2023/07/Sede-LOS-OLIVOS-1-e1690952535138.png', '944332211', 'Dr. Jorge Salazar');
*/

SELECT * FROM user;

SELECT 
u.user_id,
	u.user_name,
    u.email,
    p.name AS prediction,
    p.probability,
    p.created_at,
    p.image_url
FROM user u
INNER JOIN prediction p ON u.user_id = p.user_id;

-- SELECT * FROM prediction WHERE user_id = "OQWMlOxrYbbC64iy5ZaUDXKGl9d2";