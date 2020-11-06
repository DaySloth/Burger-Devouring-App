CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    isEaten BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);