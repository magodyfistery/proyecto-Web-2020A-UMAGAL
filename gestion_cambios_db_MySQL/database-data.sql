USE umagal;

/*Table: role*/
INSERT INTO `role` (`id`, `name`) VALUES (NULL, 'ADMIN'), (NULL, 'COMMON_USER');

/*Table: user, passwords encrypted with: SHA-256 -> 64 chars*/
INSERT INTO `user` (`username`, `password`, `name`, `date_of_birth`) VALUES ('user1', '0a041b9462caa4a31bac3567e0b6e6fd9100787db2ab433d96f6d178cabfce90', 'Danny Díaz', '1997-12-05'), ('user2', '6025d18fe48abd45168528f18a82e265dd98d421a7084aa09f61b341703901a3', 'Isaac Tuquerrez', '1998-07-05');
INSERT INTO `user` (`username`, `password`, `name`, `date_of_birth`) VALUES ('user3', '5860faf02b6bc6222ba5aca523560f0e364ccd8b67bee486fe8bf7c01d492ccb', 'AClien Aymara', '1995-12-12');

/*Table: role_user*/
INSERT INTO `role_user` (`id_role`, `username_user`) VALUES ('1', 'user1'), ('2', 'user2');
INSERT INTO `role_user` (`id_role`, `username_user`) VALUES ('1', 'user3'), ('2', 'user3');

/*Table: artist*/
INSERT INTO `artist` (`username_user`, `artistic_name`) VALUES ('user2', 'Van gohs');

/*Table: client*/
INSERT INTO `client` (`username_user`, `address`, `contact_phone`) VALUES ('user3', 'Carapungo, El Arenal y los Cipreses oe10-273', '0978654041');
