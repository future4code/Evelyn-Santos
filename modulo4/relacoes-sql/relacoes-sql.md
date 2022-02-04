# EXERCÍCIO 01

a) A FOREIGN KEY cria uma relação entre duas tabelas

b) Ok

c) Ocorre um erro pois a FOREIGN KEY não existe na outra tabela

d) Ok

e) Não é possível excluir o filme devido a restrição da FOREIGN KEY

# EXERCÍCIO 02

a) Esta tabela serve como referência indicando que os atores podem estar em diferentes filmes

b) Ok

c) Não é possível excluir o filme devido a restrição da FOREIGN KEY

d) Não é possível excluir o filme devido a restrição da FOREIGN KEY

# EXERCÍCIO 03

a) A query faz uni as duas tabelas através da ligação do id da tabela movies e movies_id da tabela rating.

b) SELECT name, id, rating FROM movies 
INNER JOIN Rating ON movies.id = Rating.movies_id;

# DESAFIOS

# EXERCÍCIO 04

a) SELECT name, movies_id, rating.rate, comment FROM movies LEFT JOIN rating ON movies.id = rating.movie_id;

b) SELECT movies.id, movies.title, actor_id FROM movies RIGHT JOIN MovieCast ON movies.id = MovieCast.movie_id;

c) SELECT AVG(rating.rate), movies.id, movies.title FROM rating RIGHT JOIN movies ON movies.id=rating.movie_id GROUP BY movies.id;

