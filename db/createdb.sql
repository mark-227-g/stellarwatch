DROP TABLE IF EXISTS stellarUser;
DROP TABLE IF EXISTS stellarEvent;
DROP TABLE IF EXISTS stellarUserEvent;

CREATE TABLE stellarUser (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  zipcode VARCHAR(10) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE
);


 CREATE TABLE stellarEvent (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  description VARCHAR(50),
  eventDateTime datetime,
  info VARCHAR(50) NOT NULL,
  photo VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL
);

CREATE TABLE stellarUserEvent (
  id INTEGER,
  event INTEGER 
);
