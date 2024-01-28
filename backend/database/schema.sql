-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

USE wiki_wilder;

-- All tables relative to users

CREATE TABLE `user_role` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) UNIQUE NOT NULL,
);

CREATE TABLE `user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) UNIQUE NOT NULL,
    `email` VARCHAR(80) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `is_admin` BOOLEAN DEFAULT 0,
    `role_id` INT NOT NULL,
    FOREIGN KEY (`role_id`) REFERENCES user_role(id)
);

-- ----------------------------- --

-- Table relative to recap SACOD --

CREATE TABLE `recap` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `content` VARCHAR(10000) NOT NULL,
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
    `name` VARCHAR(25) UNIQUE NOT NULL,
    `description` VARCHAR(150) NOT NULL,
    `content` TEXT NOT NULL,
    `category_id` INT NOT NULL,
    FOREIGN KEY (`category_id`) REFERENCES keyword_category(id)
);

-- ------------------------------- --

-- Table relative for basics -- (CLI HTML CSS JS REACT API SQL)

CREATE TABLE `basics` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) UNIQUE NOT NULL,
    `description` VARCHAR(150) UNIQUE NOT NULL,
    `content` VARCHAR(10000) UNIQUE NOT NULL,
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
    FOREIGN KEY (`category_id`) REFERENCES package_category(id)
);

-- ------------------------------- --