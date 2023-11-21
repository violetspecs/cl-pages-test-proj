CREATE TABLE `countries` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);

CREATE UNIQUE INDEX `nameIdx` ON `countries` (`name`);