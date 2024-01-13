# note-app-backend

<p align="center" style="display: flex, ">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
  <a href="https://www.postgresql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_PostgreSQL.png?20230908055039" width="100" alt="PostgreSQL Logo" /></a>
  <a href="https://jestjs.io/" target="blank"><img src="https://icon.icepanel.io/Technology/svg/Jest.svg" width="80" alt="Jest Logo" /></a>
</p>


## Description

This is the back-end application of the notes-app.
It's made with NestJS, TypeScript, Jest for testing and PostgreSQL.

## Prerrequisites

```
typescript: ^5,
node: >=18.17.0,
yarn: ^1.22.x
```

###   PostgreSQL Installation:

- Visit the [PostgreSQL]("https://www.postgresql.org/") official website.
<br>

- Download and install PostgreSQL based on your operating system.
<br>

- Download (optional) [pgAdmin](https://www.pgadmin.org/)

### Configuration
Environment Variables

Make sure you have the environment variables configured.

```
DATABASE_USER=db_user
DATABASE_PASSWORD=db_password
DATABASE_HOST=db_host
```

### Setting up the database
- Access PostgreSQL Shell:
        Open the PostgreSQL command-line or terminal.

- Create a Database:
```
CREATE DATABASE your_database_name;
```
- Your user permissions:
```
GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_database_user;
```
## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn run start
```

## Test

```bash
$ yarn run test
```

