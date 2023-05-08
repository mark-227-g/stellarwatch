DROP TABLE IF EXISTS AstroUser;
DROP TABLE IF EXISTS AstroEvent;
DROP TABLE IF EXISTS astroUserEvent;

CREATE TABLE AstroUser (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),
  password  VARCHAR(50),
  name  VARCHAR(50),
  zipcode  VARCHAR(50),
  email  VARCHAR(50)
);


CREATE TABLE AstroEvent (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  description VARCHAR(50),
  datetime datetime,
  info VARCHAR(50) NOT NULL,
  photo VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL
);

CREATE TABLE AstroUserEvent (
  id INTEGER,
  event INTEGER 
);
alter table AstroUserEvent drop primary key;