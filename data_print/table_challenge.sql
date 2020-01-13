create table challenge  (
challenge_id int not null,
hacker_id int not null,
difficulty_level int not null,
primary key (challenge_id)
);

describe challenge;

insert into challenge(challenge_id, hacker_id, difficulty_level) values(4810, 77726, 4);
insert into challenge(challenge_id, hacker_id, difficulty_level) values(21089, 27205, 1);
insert into challenge(challenge_id, hacker_id, difficulty_level) values(36566, 5580, 7);
insert into challenge(challenge_id, hacker_id, difficulty_level) values(66730, 52243, 6);
insert into challenge(challenge_id, hacker_id, difficulty_level) values(71055, 52243, 2);

select * from challenge
order by difficulty_level;