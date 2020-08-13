
CREATE DATABASE umagal;
USE umagal;
/*
Cambios realizados en: 09-08-2020
Generado por: Danny Díaz Padilla
*/
CREATE TABLE `umagal`.`user` ( `username` VARCHAR(20) NOT NULL , `password` VARCHAR(64) NOT NULL , `name` VARCHAR(50) NOT NULL , `date_of_birth` DATE NOT NULL , PRIMARY KEY (`username`)) ENGINE = InnoDB;
CREATE TABLE `umagal`.`role` ( `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT , `name` VARCHAR(24) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `umagal`.`role_user` ( `id_role` TINYINT UNSIGNED NOT NULL , `username_user` VARCHAR(20) NOT NULL ) ENGINE = InnoDB;
ALTER TABLE `role_user` ADD PRIMARY KEY(id_role, username_user);
ALTER TABLE `role_user` ADD INDEX(`id_role`);
ALTER TABLE `role_user` ADD INDEX(`username_user`);
ALTER TABLE `role_user` ADD CONSTRAINT `fk_role-user_role` FOREIGN KEY (`id_role`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE; ALTER TABLE `role_user` ADD CONSTRAINT `fk_role-user-user` FOREIGN KEY (`username_user`) REFERENCES `user`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE TABLE `umagal`.`client` ( `username_user` VARCHAR(20) NOT NULL , `address` VARCHAR(64) NOT NULL , `contact_phone` VARCHAR(10) NOT NULL , PRIMARY KEY (`username_user`)) ENGINE = InnoDB;
ALTER TABLE `client` ADD INDEX(`username_user`);
ALTER TABLE `client` ADD CONSTRAINT `fk_client_user` FOREIGN KEY (`username_user`) REFERENCES `user`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE TABLE `umagal`.`artist` ( `username_user` VARCHAR(20) NOT NULL , `artistic_name` VARCHAR(20) NOT NULL , PRIMARY KEY (`username_user`)) ENGINE = InnoDB;
ALTER TABLE `artist` ADD INDEX(`username_user`);
ALTER TABLE `artist` ADD CONSTRAINT `fk_artist_user` FOREIGN KEY (`username_user`) REFERENCES `user`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
