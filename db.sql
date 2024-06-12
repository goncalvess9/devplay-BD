create database devplaydb;

use devplaydb;

create table tb_games (
  id_games  int primary key auto_increment,
  nome_games  varchar(30) not null,
  preco_games  double not null,
  img_games  varchar(200) not null
);

create table tb_login (
 id  int primary key auto_increment,
 nomeUsuario varchar(70),
 senha varchar(70),
 tipo varchar(70)
);

select*from tb_games;

insert into tb_games (nome_games, preco_games, img_games) value ('God Of War', '200', 'img.png');

select*from tb_login;
insert into tb_login (nomeUsuario, senha, tipo) value ('ademir', '1234', 'Admin');