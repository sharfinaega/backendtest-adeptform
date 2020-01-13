create table difficulty  (
difficulty_level int not null auto_increment,
score varchar(100) not null,
primary key (difficulty_level)
);

show tables;
describe difficulty;

insert into difficulty(score) values(20);
insert into difficulty(score) values(30);
insert into difficulty(score) values(40);
insert into difficulty(score) values(60);
insert into difficulty(score) values(80);
insert into difficulty(score) values(100);
insert into difficulty(score) values(120);

select * from difficulty;
