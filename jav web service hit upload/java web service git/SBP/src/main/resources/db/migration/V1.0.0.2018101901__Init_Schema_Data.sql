CREATE TABLE tbl_user (
  id bigint(20) NOT NULL,
  username varchar(25) NOT NULL,
  password varchar(75) NOT NULL,
  salary bigint(10) NOT NULL,
  age int(2) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO tbl_user (id, username, password, salary, age) VALUES (1, 'sam', '$2a$04$I9Q2sDc4QGGg5WNTLmsz0.fvGv3OjoZyj81PrSFyGOqMphqfS2qKu', 3456, 33);
INSERT INTO tbl_user (id, username, password, salary, age) VALUES (2, 'john', '$2a$04$PCIX2hYrve38M7eOcqAbCO9UqjYg7gfFNpKsinAxh99nms9e.8HwK', 7823, 23);
INSERT INTO tbl_user (id, username, password, salary, age) VALUES (3, 'vikash', '$2a$04$I9Q2sDc4QGGg5WNTLmsz0.fvGv3OjoZyj81PrSFyGOqMphqfS2qKu', 4234, 45);
INSERT INTO tbl_user (id, username, password, salary, age) VALUES (4, 'tom', '$2a$04$I9Q2sDc4QGGg5WNTLmsz0.fvGv3OjoZyj81PrSFyGOqMphqfS2qKu', 4234, 40);


-- sam / password
-- john / password
-- vikash/ password
-- tom / password