# Awesome Project Build with TypeORM

## HOW TO RUN

Steps to run this project with Docker and Node:

1. Run `npm i` command
2. Run `dc up -d db` to start the database. Give it a few seconds to boot up and create the database
3. Run `dc up -d api` to start the API.

To run this project locally wihout Docker:

1. Make sure you have a MySQL server running on port 3306
2. Create a database called `dev_test` on your MySQL server
3. Run `npm i` command
4. Run `npm start` to start the API.

## HOW TO CREATE MIGRATIONS

Steps to create a new migration:

1. Make sure the connection details on ormconfig.js are correct for the second connection
2. Run `npm run createMigration -n YourMigrationName` command