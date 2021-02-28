BEGIN;

TRUNCATE
  users;

INSERT INTO users (first_name, last_name, username, password)
VALUES
    ('Camino', 'Paz', 'cpaz', 'password'),
    ('Luna', 'Oseguera', 'loseguera', 'secret');
