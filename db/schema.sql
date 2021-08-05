DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(40),
    password VARCHAR(40),
    streetAddress VARCHAR(200),
    cityStateZip VARCHAR(50),
    phoneNumber VARCHAR(20),
    cc INT,
    expDate VARCHAR(20),
    cvv INT,
    billingZip INT
);

INSERT INTO user (name, email, password, streetAddress, cityStateZip, phoneNumber) VALUES ('Tina', 'tina@tina.com', 'tina', '123 Street', 'Somewhere,CA 12345', '1234567890');

UPDATE user set user.cc='123456789', user.expDate='10/24', user.cvv='123', user.billingZip='12345' where user.id=1;