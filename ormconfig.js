module.exports = [{
    "name": "default",
    "type": "mysql",
    "host": "db",
    "port": 3306,
    "username": "testRoot",
    "password": "root",
    "database": "dev_test",
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/migration"
    }
}, {
    "name": "localhost",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "testRoot",
    "password": "root",
    "database": "dev_test",
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/migration"
    }
}]