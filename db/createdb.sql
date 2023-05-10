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
  user_id INTEGER,
  description VARCHAR(50),
  datetime datetime,
  info VARCHAR(50) NOT NULL,
  photo VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES stellarUser(id)
);

CREATE TABLE stellarUserEvent (
  id INTEGER,
  event INTEGER 
);

INSERT INTO stellarUser (username, password, name, zipcode, email)
VALUES ('testuser', 'testpassword', 'Test User', '12345', 'testuser@example.com');