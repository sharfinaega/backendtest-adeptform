create table hackers (
hacker_id int not null,
name varchar(100) not null,
primary key (hacker_id)
);

show tables;
describe hackers;

insert into hackers(hacker_id, name) values(5580, "Rose");
insert into hackers(hacker_id, name) values(8439, "Angela");
insert into hackers(hacker_id, name) values(27205, "Frank");
insert into hackers(hacker_id, name) values(52243, "Patrick");
insert into hackers(hacker_id, name) values(52348, "Lisa");
insert into hackers(hacker_id, name) values(57645, "Kimberly");
insert into hackers(hacker_id, name) values(77726, "Bonnie");
insert into hackers(hacker_id, name) values(83082, "Michael");
insert into hackers(hacker_id, name) values(86870, "Todd");
insert into hackers(hacker_id, name) values(90411, "Joe");

select * from hackers;

