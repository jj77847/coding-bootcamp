DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;
USE customer_db;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  value_card_member BOOLEAN DEFAULT FALSE
);
