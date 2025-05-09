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
*/

SELECT * FROM user;

SELECT 
	u.user_name ,
    u.email,
    p.name AS prediction,
    p.probability,
    p.image_url
FROM user u
INNER JOIN prediction p ON u.user_id = p.user_id;
