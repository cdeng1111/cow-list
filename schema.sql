-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

DROP DATABASE IF EXISTS cows_all;
CREATE DATABASE cows_all;
USE cows_all;

CREATE TABLE cows (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
description VARCHAR(255) NOT NULL
);



-- mysql -u root < schema.sql