-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

USE wiki_wilder;

CREATE TABLE `user` (
    `ID` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(30) UNIQUE NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

CREATE TABLE `keyword` (
    `ID` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(25) UNIQUE NOT NULL,
    `acr` VARCHAR(25) UNIQUE NOT NULL,
    `desc` VARCHAR(150) NOT NULL,
    `content` VARCHAR(10000),
    `category` VARCHAR(30) NOT NULL
);

CREATE TABLE `category` (
    `ID` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL
)