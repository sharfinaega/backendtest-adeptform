create table submission  (
submission_id int not null,
hacker_id int not null,
challenge_id int not null,
score varchar(100) not null,
primary key (submission_id)
);

show tables;
describe submission;

insert into submission(submission_id, challenge_id, score) values(68628, 36566, 30);
insert into submission(submission_id, challenge_id, score) values(65300, 21089, 10);
insert into submission(submission_id, challenge_id, score) values(40326, 36566, 77);
insert into submission(submission_id, challenge_id, score) values(8941, 4810, 4);
insert into submission(submission_id, challenge_id, score) values(83554, 66730, 30);
insert into submission(submission_id, challenge_id, score) values(43353, 66730, 0);
insert into submission(submission_id, challenge_id, score) values(55385, 71055, 20);
insert into submission(submission_id, challenge_id, score) values(39784, 71055, 23);
insert into submission(submission_id, challenge_id, score) values(94613, 71055, 30);
insert into submission(submission_id, challenge_id, score) values(45788, 36566, 0);
insert into submission(submission_id, challenge_id, score) values(93058, 36566, 30);
insert into submission(submission_id, challenge_id, score) values(7344, 66730, 92);
insert into submission(submission_id, challenge_id, score) values(2721, 4810, 36);
insert into submission(submission_id, challenge_id, score) values(523, 71055, 4);
insert into submission(submission_id, challenge_id, score) values(49105, 66730, 0);
insert into submission(submission_id, challenge_id, score) values(55877, 66730, 80);
insert into submission(submission_id, challenge_id, score) values(38355, 66730, 35);
insert into submission(submission_id, challenge_id, score) values(3924, 36566, 80);
insert into submission(submission_id, challenge_id, score) values(97397, 66730, 100);
insert into submission(submission_id, challenge_id, score) values(84162, 4810, 40);
insert into submission(submission_id, challenge_id, score) values(97431, 71055, 30);

select * from submission;
