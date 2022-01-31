# EXERCICIO 1
 CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

## a)varchar: usado para guardar strings
o número entre () é o número máximo de caracteres permitidos
a primary key representa uma chave que é única e não pode ser repitida

## b) SHOW DATABASES retorna o banco de dados e o SHOW TABLES retorna as tabelas

## c) DESCRIBRE retorna todos as informações do atributo escolhido

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor


# EXERCICIO 2
## a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

## b)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Bananinha",
  500000,
  "2022-08-25", 
  "male"
);

## c)
 INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

ERRO: numero de colunas não corresponde aos número de parâmetros (colunas) indicadas

## d) 
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

ERRO: Não existe o campo "nome" como parâmetro

## e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

ERRO: Declaração de data errada no birth_date

## f) Validado


# EXERCICIO 3

## a) SELECT * from Actor WHERE gender LIKE "female%";

# b) SELECT salary from Actor WHERE name LIKE "Tony Ramos%";

## c) SELECT * from Actor WHERE gender = "invalid";
Erro: O resultado foi uma tabela com campos null

## d) SELECT id, name, salary from Actor WHERE salary > 500000;

## e) SELECT id, name from Actor WHERE id = "002";
Erro: Coluna "nome" é desconhecido, pois a o correto é "name"


# EXERCICIO 4

## a) SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

## b)SELECT * from Actor WHERE name NOT LIKE "A%" AND salary >350000;

## c) SELECT * from Actor WHERE name LIKE "%g%";

##d) SELECT * from Actor WHERE (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;


# EXERCICIO 5


## a) 
CREATE TABLE Movies (
	id VARCHAR(225) PRIMARY KEY,
    title VARCHAR(225) NOT NULL UNIQUE,
    sinopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating DOUBLE NOT NULL
);

## b)
INSERT INTO Movies(id, title, sinopsis, release_date, rating) VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
), 
(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
), 
(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
    "2017/11/02",
    8
);




# EXERCICIO 6 
## a)
SELECT id, title, review from Movies WHERE id = "004";

## b)
SELECT * from Movies WHERE title = "Se Eu Fosse Você";

## c)
SELECT id, title, sinopse from Movies WHERE rating >= 7;


## EXERCICIO 7
# a) 
SELECT * from Movies WHERE title LIKE "%vida%";

# b)
SELECT * from Movies WHERE sinopsis LIKE "%saber%" OR title LIKE "%saber%";

# c)
SELECT * from Movies WHERE release_date < "2022/01/31";

# d)
SELECT * from Movies WHERE release_date < "2022/01/31" AND (title LIKE "%quer%" OR sinopsis LIKE "%ele%") AND rating > 7;
`