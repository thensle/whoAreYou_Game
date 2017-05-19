DROP DATABASE IF EXISTS `question_db`;

CREATE DATABASE `question_db`;
-- DO NOT RUN CODE BELOW THIS LINE!!!!!
--===================================--
-- These will be added into their own
-- .js files in the models folder.
-- They're here for reference only.
-- Delete before final push!


USE `question_db`;

CREATE TABLE questions(
id INT AUTO_INCREMENT,
question VARCHAR(140),
sfw BOOL NOT NULL DEFAULT 0,
PRIMARY KEY (id)
);

-- Foreign Key maybe needed. Look Into.
CREATE TABLE user (
id INT AUTO_INCREMENT,
username VARCHAR(40),
user_question VARCHAR(140),
PRIMARY KEY (id)
);

-- Foreign Key will be needed
CREATE TABLE tags (
id INT AUTO_INCREMENT,
tag VARCHAR(30),
PRIMARY KEY (id)
);
