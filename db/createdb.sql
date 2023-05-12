DROP TABLE IF EXISTS stellarEvent;
DROP TABLE IF EXISTS stellarUser;
DROP TABLE IF EXISTS stellarUserEvent;

CREATE TABLE stellarUser (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  name VARCHAR(50) NOT NULL,
  zipcode VARCHAR(10) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE stellarEvent (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  description VARCHAR(50),
  eventdatetime datetime,
  info VARCHAR(50) NOT NULL,
  photo VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stellarUserEvent (
  id INTEGER,
  event INTEGER 
);

CREATE TABLE savedEvents (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  event_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES stellarUser(id),
  FOREIGN KEY (event_id) REFERENCES stellarEvent(id)
);

INSERT INTO stellarUser (username, password, name, zipcode, email)
VALUES ('testuser', '$2a$10$IXy5tkJ4F1w183I0MU40uuSTfApflDk1yaY1y/0Au1ja7mjSVJP1C', 'Test User', '12345', 'testuser@example.com');

INSERT INTO stellarUserEvent(id,event)
VALUES (0,0);

ALTER TABLE stellarUserEvent DROP PRIMARY KEY;
