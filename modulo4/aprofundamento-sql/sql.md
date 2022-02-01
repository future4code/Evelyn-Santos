CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

 # EX1:
  a) Iria excluir a coluna salary da tabela.
    b) Iria alterar a coluna de gender para sex da tabela.
    c) Iria alterar a coluna gender de varchar(6) para varchar(225).
    d) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


# EX2:
 a)
UPDATE Actor SET name = "Suzana Vieira" , birth_Date = "1900/01/02" WHERE id = "006";

 b)
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

 c)
UPDATE Actor 
set 
	id = "007",
    name = "Claudia Raia",
    salary = 7000000,
    birth_date = "1300/01/02",
    gender = "female"
WHERE id = 005;

 d) 
UPDATE Actor
 set 
    name = "Camila Pitanga",
    salary = 3000000,
    birth_date = "1950/08/02",
    gender = "female"
WHERE id = 333;

O comando roda mas ele não altera na tabela.



 # EX3-
  a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

 b)
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


 # EX 4- 
 a)
SELECT MAX(salary) FROM Actor;

 b)
SELECT MAX(salary) FROM Actor WHERE gender = "female";

 c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

 d) 
SELECT SUM(salary) FROM Actor;



# EX 5-
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

 b)
SELECT id, name FROM Actor ORDER BY name DESC;

 c)
SELECT * FROM Actor ORDER BY salary;

 d)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

 e)
SELECT AVG(salary), gender FROM Actor GROUP BY gender;



DESCRIBE Movies;
SELECT * FROM Movies;

 # EX 6- 
 a)
ALTER TABLE Movies ADD playing_limit_date DATE;

 b)
ALTER TABLE Movies CHANGE rating rating FLOAT;

 c)
UPDATE Movies SET playing_limit_date = "2021/12/10" WHERE id = "001";

 d) Ele roda o comando porém sem adicionar nada na tabela.
DELETE FROM Movies WHERE id = "001";
UPDATE Movies SET sinopsis = "Se eu fosse você" WHERE id = "001";







