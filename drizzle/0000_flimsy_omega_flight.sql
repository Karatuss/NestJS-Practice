CREATE TABLE `workers` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`age` int,
	CONSTRAINT `workers_id` PRIMARY KEY(`id`)
);
