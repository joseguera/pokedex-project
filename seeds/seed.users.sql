BEGIN;

TRUNCATE
  users;

INSERT INTO users (first_name, last_name, username, password)
VALUES
    ('Chicano', 'Chickie', 'chicks_mcgee', 'secret'),
    ('Ogolla', 'Lina', 'logolla', 'secret');
