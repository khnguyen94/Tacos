CREATE DATABASE IF NOT EXISTS tacos_db;
USE tacos_db;

-- If the table already exists, remove it before tyring ot create the table again
DROP TABLE IF EXISTS tacos;

-- Create the tacos table
Create TABLE tacos
(
    id INT NOT NULL
    AUTO_INCREMENT, 
    burger_name VARCHAR
    (255) NOT NULL, 
    devoured BOOL DEFAULT false, 
    PRIMARY KEY
    (id)
);
