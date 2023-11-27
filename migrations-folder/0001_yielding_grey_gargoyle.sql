CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text,
	`password` text
);

CREATE UNIQUE INDEX `usernameIdx` ON `users` (`username`);