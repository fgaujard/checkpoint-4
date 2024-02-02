-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

USE wiki_wilder_js;

-- All tables relative to users

-- SACOD JURASCRIPT etc -- 
CREATE TABLE `user_team` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) UNIQUE NOT NULL, 
    `formateur_id` INT NOT NULL
);

-- Wilder DWWM CDA Formateur --
CREATE TABLE `user_role` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) UNIQUE NOT NULL,
    `acronyme` VARCHAR(8) UNIQUE NOT NULL
);

CREATE TABLE `user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) UNIQUE NOT NULL,
    `email` VARCHAR(80) UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `is_admin` BIT DEFAULT 0,
    `role_id` INT,
    `team_id` INT,
    FOREIGN KEY (`role_id`) REFERENCES `user_role`(id),
    FOREIGN KEY (`team_id`) REFERENCES `user_team`(id)
);

-- ----------------------------- --

-- Table relative to recap SACOD --

CREATE TABLE `recap` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `content` TEXT NOT NULL
);

-- ------------------------------- --

-- All tables relative to keywords

CREATE TABLE `keyword_category` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) UNIQUE NOT NULL
);

CREATE TABLE `keyword` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `acronyme` VARCHAR(15) UNIQUE NOT NULL,
    `name` VARCHAR(50) UNIQUE NOT NULL,
    `description` VARCHAR(150) NOT NULL,
    `content` TEXT NOT NULL,
    `category_id` INT NOT NULL,
    FOREIGN KEY (`category_id`) REFERENCES `keyword_category`(id)
);

-- ------------------------------- --

-- Table relative for basics -- (CLI HTML CSS JS REACT API SQL)

CREATE TABLE `basics` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) UNIQUE NOT NULL,
    `description` VARCHAR(200) UNIQUE NOT NULL,
    `content` TEXT NOT NULL
);

-- ------------------------------- -- 

-- All tables relative to packages --

CREATE TABLE `package_category` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) UNIQUE NOT NULL
);

CREATE TABLE `package` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) UNIQUE NOT NULL,
    `description` VARCHAR(150) UNIQUE NOT NULL,
    `content` TEXT NOT NULL,
    `category_id` INT NOT NULL,
    FOREIGN KEY (`category_id`) REFERENCES `package_category`(id)
);

-- ------------------------------- --


CREATE TABLE `keyword_fav`
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `keyword_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    FOREIGN KEY (`keyword_id`) REFERENCES `keyword`(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE `package_fav`
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `package_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    FOREIGN KEY (`package_id`) REFERENCES `keyword`(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);