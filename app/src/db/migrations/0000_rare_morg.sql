CREATE TABLE `responses` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`message` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `responses_email_unique` ON `responses` (`email`);