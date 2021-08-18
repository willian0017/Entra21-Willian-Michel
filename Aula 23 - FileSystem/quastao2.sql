-- CREATE TABLE IF NOT EXISTS departamento (
-- 	id SERIAL PRIMARY KEY,
-- 	nome text NOT NULL,
-- 	localizacao text NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS funcionarios (
-- 	id SERIAL PRIMARY KEY,
-- 	nome text NOT NULL,
-- 	sobrenome text NOT NULL,
-- 	data_nascimento date NOT NULL,
-- 	cpf text NOT NULL,
-- 	rg text NOT NULL,
-- 	logradouro text NOT NULL,
-- 	cep text NOT NULL,
-- 	cidade text NOT NULL,
-- 	telefone text NOT NULL,
-- 	funcao text NOT NULL,
-- 	salario numeric NOT NULL,
-- 	id_departamento integer NOT NULL,
-- 	FOREIGN KEY (id_departamento) REFERENCES departamento (id)
-- );

-- INSERT INTO departamento (nome, localizacao) VALUES
-- ('Dep1', 'Rodeio'),
-- ('Dep2', 'Timbó'),
-- ('Dep3', 'Blumenau'),
-- ('Dep4', 'Indaial'),
-- ('Dep5', 'Pomerode');

-- INSERT INTO funcionarios (nome, sobrenome, data_nascimento, cpf, rg, logradouro, cep, cidade, telefone, funcao, salario, id_departamento) VALUES
-- ('João', 'da Silva', '13/10/1980', '123.123.123-54', '124234.12', 'Rua 1', '123134-123', 'Rodeio', '(14)99999-9999', 'Pedreiro', 2000, 1),
-- ('Pedro', 'Souza', '15/09/1986', '125.125.125-85', '124235.15', 'Rua 2', '123134-000', 'Timbó', '(14)99999-9998', 'Auxiliar', 970, 2),
-- ('Carlos', 'Rocha', '18/10/1988', '128.128.128-88', '124237.17', 'Rua 3', '123131-414', 'Blumenau', '(14)99999-9995', 'Marceneiro', 1600, 3),
-- ('Maria', 'dos Santos', '11/01/1990', '124.125.121-41', '124244.12', 'Rua 4', '123137-127', 'Indaial', '(14)99999-9992', 'Marketing', 1800, 4),
-- ('Marcelo', 'Cabral', '03/11/1995', '123.123.123-23', '124234.04', 'Rua 5', '123134-111', 'Pomerode', '(14)99999-9993', 'Auxiliar', 980, 5);


--A>----------------------------

SELECT nome, sobrenome, salario
FROM funcionarios
WHERE salario > 1000
ORDER BY nome;

--B>---------------------------

SELECT nome, sobrenome, data_nascimento
FROM funcionarios
ORDER BY data_nascimento DESC;

--C>---------------------------

SELECT sum(salario)
FROM funcionarios;

--D>---------------------------

SELECT d.nome nome_dep, f.nome "nome funcionario", f.funcao
FROM funcionarios f 
INNER JOIN departamento d ON d.id = f.id_departamento
ORDER BY nome_dep;

--E>---------------------------

SELECT d.nome nome_dep, d.id_gerente, f.nome  
FROM funcionarios f 
INNER JOIN departamento d ON d.id_gerente = f.id
ORDER BY nome_dep;

--F>--------------------------

SELECT d.nome nome_dep, f.salario 
FROM funcionarios f 
INNER JOIN departamento d ON d.id = f.id_departamento
ORDER BY nome_dep;

--G>--------------------------

SELECT count(id)
FROM funcionarios;

--H>--------------------------

SELECT ROUND(avg(salario),2)
FROM funcionarios;

--I>--------------------------

SELECT d.nome nome_dep, ROUND(avg(f.salario),2)
FROM funcionarios f 
INNER JOIN departamento d ON d.id = f.id_departamento
GROUP BY d.nome
ORDER BY d.nome;

--J>--------------------------

SELECT d.nome nome_dep, MAX(f.salario)
FROM funcionarios f 
INNER JOIN departamento d ON d.id = f.id_departamento
GROUP BY d.nome
ORDER BY d.nome;